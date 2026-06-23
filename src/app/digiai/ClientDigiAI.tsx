"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  MessageSquare, Bot, Sparkles, Send, User, Layout, Search, Briefcase, 
  Target, Menu, X, Plus, Trash2, Copy, CheckCircle2, Paperclip, 
  ArrowRight, Megaphone, MonitorPlay, ThumbsUp, ThumbsDown, Share, RefreshCcw, Link as LinkIcon,
  Download, History
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { trackClarityEvent } from "@/components/analytics/MicrosoftClarity";

interface Message {
  id: string;
  sender: "user" | "bot" | "system";
  content: string;
  timestamp: Date;
  isLeadForm?: boolean;
  leadDetails?: any;
  responseTime?: number; // ms
}

const AI_MODES = [
  { id: "General Assistant", label: "General Assistant", icon: Bot },
  { id: "SEO Advisor", label: "SEO Advisor", icon: Search },
  { id: "Website Consultant", label: "Website Consultant", icon: Layout },
  { id: "Branding Expert", label: "Branding Expert", icon: Sparkles },
  { id: "Proposal Generator", label: "Proposal Generator", icon: Briefcase },
  { id: "Marketing Strategist", label: "Marketing Strategist", icon: Target },
];

export default function ClientDigiAI() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeMode, setActiveMode] = useState("General Assistant");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [lastResponseTime, setLastResponseTime] = useState(0);
  const [conversations, setConversations] = useState<any[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load conversations list on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digipeak_chat_conversations");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setConversations(parsed);
        } catch (e) {
          console.error("Error loading chat history:", e);
        }
      }
    }
  }, []);

  // Update current active conversation whenever messages change
  useEffect(() => {
    if (messages.length === 0 || !activeConversationId) return;

    setConversations((prev) => {
      const existingIdx = prev.findIndex((c) => c.id === activeConversationId);
      const title = messages.find((m) => m.sender === "user")?.content.slice(0, 30) || "Conversation";
      
      const updatedConv = {
        id: activeConversationId,
        title,
        mode: activeMode,
        messages,
        timestamp: new Date().toISOString(),
      };

      let nextConvs = [...prev];
      if (existingIdx >= 0) {
        nextConvs[existingIdx] = updatedConv;
      } else {
        nextConvs.unshift(updatedConv);
      }
      
      localStorage.setItem("digipeak_chat_conversations", JSON.stringify(nextConvs));
      return nextConvs;
    });
  }, [messages, activeConversationId, activeMode]);

  useEffect(() => {
    setHasMounted(true);
    trackClarityEvent("digiai_started");
    const checkScreenSize = () => {
      const large = window.innerWidth > 1024;
      setIsLargeScreen(large);
      if (large) {
        setIsSidebarOpen(true);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputVal);
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    if (!activeConversationId) {
      setActiveConversationId("conv_" + Date.now());
    }

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);
    setUserMessageCount(prev => {
      const next = prev + 1;
      if (next === 1) {
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({ event: "digiai_started" });
        }
      }
      return next;
    });
    
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    const startTime = Date.now();

    try {
      const apiMessages = [...messages, userMsg].map((m) => ({
        role: m.sender === "user" ? "user" : (m.sender === "system" ? "system" : "assistant"),
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: apiMessages,
          language: "en",
          currency: "AED",
          aiMode: activeMode
        }),
      });

      if (!res.ok) throw new Error("API Error");
      
      const contentType = res.headers.get("content-type") || "";
      const botMsgId = Math.random().toString();
      let streamedContent = "";

      if (contentType.includes("application/json")) {
        const data = await res.json();
        streamedContent = data.content || "";
        setMessages((prev) => [...prev, {
          id: botMsgId,
          sender: "bot",
          content: streamedContent,
          timestamp: new Date(),
          responseTime: Date.now() - startTime
        }]);
      } else {
        const reader = res.body?.getReader();
        const decoder = new TextDecoder("utf-8");
        
        if (!reader) throw new Error("No readable stream");

        setMessages((prev) => [...prev, {
          id: botMsgId,
          sender: "bot",
          content: "",
          timestamp: new Date(),
          responseTime: 0
        }]);

        let isDone = false;
        let buffer = "";
        while (!isDone) {
          const { done, value } = await reader.read();
          if (done) {
            isDone = true;
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || "";

          for (const line of lines) {
            const cleanedLine = line.trim();
            if (!cleanedLine) continue;

            if (cleanedLine.startsWith('data: ') && cleanedLine !== 'data: [DONE]') {
              try {
                const data = JSON.parse(cleanedLine.slice(6));
                const textPart = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (textPart) {
                  streamedContent += textPart;
                  setMessages((prev) => prev.map(msg => 
                    msg.id === botMsgId ? { ...msg, content: streamedContent } : msg
                  ));
                }
              } catch (e) { }
            }
          }
        }

        if (buffer.trim().startsWith('data: ') && buffer.trim() !== 'data: [DONE]') {
          try {
            const data = JSON.parse(buffer.trim().slice(6));
            const textPart = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (textPart) {
              streamedContent += textPart;
            }
          } catch (e) {}
        }
      }

      const endTime = Date.now();
      const diff = endTime - startTime;
      setLastResponseTime(diff);
      
      setIsTyping(false);

      // Post-process Lead Format
      let hasLead = false;
      let leadJsonParsed: any = null;
      const leadDataRegex = /<lead_data>([\s\S]*?)<\/lead_data>/;
      const match = streamedContent.match(leadDataRegex);
      
      if (match) {
        hasLead = true;
        const cleanContent = streamedContent.replace(leadDataRegex, "").trim();
        try {
          leadJsonParsed = JSON.parse(match[1].trim());
          setMessages((prev) => prev.map(msg => 
            msg.id === botMsgId ? { ...msg, content: cleanContent, responseTime: diff } : msg
          ));

          const leadCardMsg: Message = {
            id: "lead-card-" + Math.random().toString(),
            sender: "system",
            content: "Conversational Scoping Result",
            timestamp: new Date(),
            isLeadForm: true,
            leadDetails: leadJsonParsed
          };
          setMessages((prev) => [...prev, leadCardMsg]);
          
          fetch("/api/send-lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: leadJsonParsed.name,
              email: leadJsonParsed.email,
              whatsapp: leadJsonParsed.whatsapp || "",
              company: leadJsonParsed.company || "",
              country: leadJsonParsed.country || "",
              budget: leadJsonParsed.budget || "",
              service: leadJsonParsed.service,
              details: leadJsonParsed.details || leadJsonParsed.proposalSummary || "Qualified via conversational AI",
              industry: leadJsonParsed.industry || "",
              website: leadJsonParsed.website || "",
              leadSource: "DigiAI Chat (Portal)",
              pageUrl: typeof window !== "undefined" ? window.location.href : ""
            }),
          }).then(res => {
            if (res.ok) {
              trackClarityEvent("digiai_qualified");
              if (typeof window !== "undefined" && (window as any).dataLayer) {
                (window as any).dataLayer.push({ event: "digiai_qualified", lead_email: leadJsonParsed.email });
              }
            }
          }).catch(console.error);
        } catch (e) {}
      } else {
        setMessages((prev) => prev.map(msg => 
          msg.id === botMsgId ? { ...msg, content: streamedContent, responseTime: diff } : msg
        ));
      }

      // Conversion Prompt
      if (userMessageCount + 1 === 5) {
        setTimeout(() => {
          setMessages((prev) => [...prev, {
            id: "conversion-msg",
            sender: "system",
            content: "Conversion Prompt",
            timestamp: new Date()
          }]);
        }, 1500);
      }

    } catch (error) {
      setIsTyping(false);
      setMessages((prev) => [...prev, {
        id: Math.random().toString(),
        sender: "bot",
        content: "I encountered a connection issue. Please try again.",
        timestamp: new Date(),
      }]);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setActiveConversationId(null);
    setUserMessageCount(0);
    setLastResponseTime(0);
  };

  const handleLoadConversation = (id: string) => {
    const conv = conversations.find((c) => c.id === id);
    if (conv) {
      setActiveConversationId(id);
      setActiveMode(conv.mode || "General Assistant");
      setMessages(conv.messages.map((m: any) => ({
        ...m,
        timestamp: new Date(m.timestamp)
      })));
      setUserMessageCount(conv.messages.filter((m: any) => m.sender === "user").length);
    }
  };

  const handleDeleteConversation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this conversation?")) {
      const nextConvs = conversations.filter((c) => c.id !== id);
      setConversations(nextConvs);
      localStorage.setItem("digipeak_chat_conversations", JSON.stringify(nextConvs));
      if (activeConversationId === id) {
        setMessages([]);
        setActiveConversationId(null);
        setUserMessageCount(0);
        setLastResponseTime(0);
      }
    }
  };

  const handleExportChat = () => {
    if (messages.length === 0) {
      alert("No messages to export.");
      return;
    }
    const header = `==================================================\n  DIGIAI CONVERSATION EXPORT\n  Date: ${new Date().toLocaleString()}\n  Mode: ${activeMode}\n==================================================\n\n`;
    const body = messages.map((m) => {
      const time = new Date(m.timestamp).toLocaleTimeString();
      const sender = m.sender === "user" ? "USER" : (m.sender === "system" ? "SYSTEM" : "DIGIAI");
      return `[${time}] ${sender}:\n${m.content}\n--------------------------------------------------\n`;
    }).join("\n");

    const blob = new Blob([header + body], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `digiai-chat-${activeConversationId || "export"}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleShareChat = () => {
    if (messages.length === 0) {
      alert("No chat to share.");
      return;
    }
    const text = messages.map((m) => {
      const sender = m.sender === "user" ? "**User**" : "**DigiAI**";
      return `${sender}: ${m.content}`;
    }).join("\n\n");
    const shareMessage = `Check out my conversation with DigiAI (Digipeak Growth Assistant):\n\n${text}`;
    navigator.clipboard.writeText(shareMessage).then(() => {
      alert("Conversation copied to clipboard as markdown!");
    }).catch(() => {
      alert("Failed to copy conversation.");
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  if (!hasMounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden flex h-[100dvh] bg-[#03050c] text-white font-sans w-full">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
      {(isSidebarOpen || isLargeScreen) && (
        <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`fixed lg:static top-0 left-0 h-full w-[280px] bg-[#08080c] border-r border-white/5 z-50 flex flex-col shrink-0`}
          >
            <div className="p-4 flex items-center justify-between border-b border-white/5">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-accent-primary/[0.03] flex items-center justify-center border border-accent-primary/20 relative">
                  <Image src="/logo.png" alt="Digipeak" width={16} height={16} className="object-contain" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#08080c]" />
                </div>
                <span className="font-heading font-bold text-lg group-hover:text-accent-primary transition-colors">DigiAI</span>
              </Link>
              <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-muted hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
              <button 
                onClick={handleNewChat}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors font-semibold text-sm"
              >
                <Plus className="w-4 h-4" /> New Chat
              </button>

              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2 px-2">AI Modes</h4>
                <div className="space-y-1">
                  {AI_MODES.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setActiveMode(mode.id);
                        if (window.innerWidth < 1024) setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        activeMode === mode.id 
                          ? "bg-accent-primary/15 text-accent-primary font-bold border border-accent-primary/20" 
                          : "text-muted hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <mode.icon className="w-4 h-4" />
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2 px-2 flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5" /> Recent Chats
                  </h4>
                  <div className="space-y-1 max-h-[200px] overflow-y-auto custom-scrollbar">
                    {conversations.length > 0 ? (
                      conversations.map((conv) => (
                        <div key={conv.id} className={`group flex items-center justify-between rounded-lg transition-all ${
                          activeConversationId === conv.id ? "bg-white/10" : "hover:bg-white/5"
                        }`}>
                          <button 
                            onClick={() => handleLoadConversation(conv.id)}
                            className={`flex-1 text-left px-3 py-2 text-xs truncate flex items-center gap-2 transition-colors ${
                              activeConversationId === conv.id ? "text-accent-primary font-bold" : "text-white/80"
                            }`}
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                            <span className="truncate">{conv.title || "New Conversation"}</span>
                          </button>
                          <button 
                            onClick={(e) => handleDeleteConversation(conv.id, e)}
                            className="p-1.5 opacity-0 group-hover:opacity-100 text-muted hover:text-red-400 transition-all rounded mr-1"
                            title="Delete Conversation"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-400 px-3 italic">No recent chats.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Footer Actions */}
            <div className="p-4 border-t border-white/5 space-y-2">
               <button onClick={handleShareChat} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  <Share className="w-4 h-4" /> Share Conversation
               </button>
               <button onClick={handleExportChat} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  <Download className="w-4 h-4" /> Export Conversation
               </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-[100dvh] relative min-w-0">
        
        {/* Top Navbar & Status */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 sticky top-0 bg-[#03050c]/80 backdrop-blur-md z-30 shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className={`${isSidebarOpen && 'lg:hidden'} p-2 text-muted hover:text-white rounded-lg hover:bg-white/5 transition-colors`}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg hidden sm:block text-white/90">{activeMode}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-[10px] text-slate-200 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full">
              <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online</div>
              <div className="w-px h-3 bg-white/10"></div>
              <div>Powered by Gemini 2.5 Flash</div>
              {lastResponseTime > 0 && (
                <>
                  <div className="w-px h-3 bg-white/10"></div>
                  <div>{(lastResponseTime / 1000).toFixed(1)}s</div>
                </>
              )}
            </div>
            <MagneticButton>
              <Link href="/proposal" className="btn-primary px-5 py-2 text-xs md:text-sm font-bold flex items-center gap-2 shrink-0">
                Get Proposal
              </Link>
            </MagneticButton>
          </div>
        </header>

        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-8 md:px-12 relative custom-scrollbar">
          <div className="max-w-4xl mx-auto space-y-8 pb-40">
            
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                {/* Premium Avatar */}
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-accent-primary/20 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-full opacity-10 blur-xl"></div>
                  <div className="relative w-full h-full rounded-full bg-[#08080c] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden">
                    <Image src="/logo.png" alt="DigiAI" width={40} height={40} className="object-contain z-10" />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white max-w-2xl">
                  What would you like to achieve today?
                </h1>
                <p className="text-muted mb-10 max-w-xl text-sm md:text-base">
                  DigiAI can help with SEO, Websites, Branding, Digital Marketing, AI Automation, Lead Generation and Business Growth.
                </p>

                {/* Large Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-4xl px-2">
                  {[
                    { title: "Generate Proposal", icon: Briefcase, q: "I want to generate a new project proposal." },
                    { title: "SEO Audit", icon: Search, q: "I need an SEO audit for my website." },
                    { title: "Website Review", icon: Layout, q: "Can you review my website design?" },
                    { title: "Branding Strategy", icon: Sparkles, q: "I need a corporate branding strategy." },
                    { title: "Marketing Plan", icon: Megaphone, q: "Help me create a digital marketing plan." },
                    { title: "AI Automation", icon: Bot, q: "How can I automate my business with AI?" }
                  ].map((card, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(card.q)}
                      className="p-5 rounded-2xl border border-white/5 bg-[#08080c]/50 backdrop-blur-md hover:bg-white/5 hover:border-white/10 text-left transition-all group flex flex-col gap-3"
                    >
                      <card.icon className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-white/90 group-hover:text-white">{card.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, index) => {
                const isLastBotMessage = msg.sender === 'bot' && index === messages.length - 1 && !isTyping;
                
                return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                  key={msg.id || index} 
                  className={`flex gap-4 md:gap-6 w-full ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  
                  {/* Avatar */}
                  {msg.sender !== "system" && (
                    <div className="flex-shrink-0 mt-1">
                      {msg.sender === "user" ? (
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                          <User className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#08080c] border border-white/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                          <Image src="/logo.png" alt="DigiAI" width={20} height={20} className="object-contain w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Message Content */}
                  <div className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} max-w-[90%] md:max-w-[85%] w-full`}>
                    
                    {msg.sender === "system" && msg.content === "Conversion Prompt" ? (
                      <div className="w-full max-w-lg glass border border-accent-primary/30 rounded-2xl p-6 bg-accent-primary/[0.02] shadow-xl my-4">
                        <div className="flex items-center gap-3 text-accent-primary mb-3">
                          <MonitorPlay className="w-6 h-6" />
                          <h4 className="text-white text-lg font-bold font-heading">Need expert help?</h4>
                        </div>
                        <p className="text-muted text-sm mb-5">
                          It looks like you're exploring some deep digital strategies. Our team of human experts can help you implement these precisely.
                        </p>
                        <a 
                          href="/proposal" 
                          className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all gap-2 cursor-pointer"
                        >
                          Book a Strategy Session <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    ) : msg.sender === "system" && msg.isLeadForm && msg.leadDetails ? (
                      <div className="w-full max-w-lg glass border border-emerald-500/30 rounded-2xl p-6 bg-[#08080c]/80 backdrop-blur-md shadow-[0_10px_40px_rgba(16,185,129,0.1)] my-4">
                        <div className="flex flex-col items-center text-center gap-3 border-b border-white/5 pb-5 mb-5">
                          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <h4 className="text-white text-xl font-bold font-heading">Ready for your custom proposal?</h4>
                          <p className="text-muted text-xs">We've securely compiled your requirements.</p>
                        </div>
                        <div className="text-sm text-white/80 space-y-3">
                          <div className="flex justify-between bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                            <span className="text-muted">Name</span> <span className="font-medium text-white">{msg.leadDetails.name}</span>
                          </div>
                          <div className="flex justify-between bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                            <span className="text-muted">Service</span> <span className="font-medium text-white">{msg.leadDetails.service}</span>
                          </div>
                          <div className="flex justify-between bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                            <span className="text-muted">Budget</span> <span className="font-medium text-white">{msg.leadDetails.budget}</span>
                          </div>
                        </div>
                        <Link 
                          href="/proposal" 
                          onClick={() => sessionStorage.setItem("active_funnel", "proposal")}
                          className="mt-6 inline-flex items-center justify-center w-full py-3 bg-white text-[#08080c] font-bold rounded-xl hover:bg-white/90 transition-all gap-2"
                        >
                          Get Custom Proposal
                        </Link>
                      </div>
                    ) : (
                      <div className={`prose prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-[#08080c] prose-pre:border prose-pre:border-white/10 prose-a:text-accent-primary rounded-3xl px-6 py-4 text-sm md:text-base shadow-lg ${
                        msg.sender === "user" 
                          ? "bg-gradient-to-br from-accent-primary/80 to-accent-secondary/80 text-white rounded-tr-sm border border-white/10" 
                          : "bg-[#0a0d1e]/80 backdrop-blur-md text-white/90 rounded-tl-sm border border-white/5"
                      }`}>
                        {msg.sender === "user" ? (
                          <p className="whitespace-pre-wrap m-0 font-medium">{msg.content}</p>
                        ) : (
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {msg.content}
                          </ReactMarkdown>
                        )}
                      </div>
                    )}

                    {/* AI Response Actions */}
                    {msg.sender === "bot" && (
                      <div className="flex items-center gap-1.5 mt-2 ml-2">
                        <button onClick={() => copyToClipboard(msg.content)} className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-colors" title="Copy">
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => handleSendMessage("Please regenerate your previous response.")} className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-colors" title="Regenerate">
                          <RefreshCcw className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-px h-3 bg-white/10 mx-1"></div>
                        <button className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-colors" title="Good response">
                          <ThumbsUp className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-colors" title="Bad response">
                          <ThumbsDown className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-white transition-colors" title="Share">
                          <Share className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Suggested Follow Ups (Only show on last bot message) */}
                    {isLastBotMessage && msg.content.length > 50 && (
                       <motion.div 
                         initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                         className="flex flex-wrap gap-2 mt-4 ml-1"
                       >
                         {["How much does this cost?", "Can you audit my website?", "What package do you recommend?"].map((q, i) => (
                           <button
                             key={i}
                             onClick={() => handleSendMessage(q)}
                             className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 bg-transparent text-muted hover:text-white hover:bg-white/10 transition-colors"
                           >
                             {q}
                           </button>
                         ))}
                       </motion.div>
                    )}
                  </div>
                </motion.div>
                );
              })
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex gap-4 md:gap-6"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#08080c] border border-white/10 flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <Image src="/logo.png" alt="DigiAI" width={20} height={20} className="object-contain w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex items-center gap-1.5 bg-[#0a0d1e]/80 backdrop-blur-md border border-white/5 rounded-2xl rounded-tl-sm px-5 py-4 h-[44px]">
                  <span className="text-xs text-muted mr-2 font-medium">DigiAI is thinking</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/80 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/80 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/80 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        </div>

        {/* Bottom Input Area */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#03050c] via-[#03050c] to-transparent pt-16 pb-4 md:pb-6 px-4 md:px-12 z-20 shrink-0">
          <div className="max-w-4xl mx-auto relative">
            <div className="glass border border-white/15 bg-[#0a0d1e]/90 rounded-3xl p-2 shadow-2xl backdrop-blur-xl flex items-end relative focus-within:border-accent-primary/50 transition-colors">
              <button 
                className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-colors mb-1 ml-1"
                title="Attach files (Coming soon)"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <textarea
                ref={textareaRef}
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  handleTextareaInput();
                }}
                onKeyDown={handleKeyDown}
                placeholder={`Message DigiAI (${activeMode})...`}
                className="w-full bg-transparent text-white placeholder-muted px-3 py-3 min-h-[52px] max-h-[200px] resize-none focus:outline-none text-base custom-scrollbar"
                rows={1}
              />
              <button
                onClick={() => handleSendMessage(inputVal)}
                disabled={!inputVal.trim() || isTyping}
                className="w-10 h-10 shrink-0 rounded-full bg-accent-primary text-white flex items-center justify-center hover:bg-accent-secondary transition-colors disabled:opacity-50 disabled:hover:bg-accent-primary mb-1 mr-1"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
            <div className="text-center mt-2.5">
              <p className="text-[10px] text-slate-300">DigiAI can make mistakes. Consider verifying important pricing or timelines with our team.</p>
            </div>
          </div>
        </div>
      </main>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(255, 255, 255, 0.2); }
      `}} />
    </div>
  );
}

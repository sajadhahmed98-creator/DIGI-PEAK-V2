"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  X,
  MessageSquare,
  Bot,
  Sparkles,
  Send,
  User,
  Mail,
  Building,
  Globe,
  Briefcase,
  Coins,
  FileText,
  CheckCircle2,
  ChevronDown,
  History,
  Download,
  Share2,
  Trash2,
  Plus
} from "lucide-react";

// Types
interface Message {
  id: string;
  sender: "user" | "bot" | "system";
  content: string;
  timestamp: Date;
  isLeadForm?: boolean;
  leadSubmitted?: boolean;
  leadDetails?: any;
}

interface LeadData {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  country: string;
  budget: string;
  service: string;
  details: string;
  _gotcha?: string;
}

const currencyConfig: Record<string, { rate: number; symbol: string; flag: string; label: string }> = {
  AED: { rate: 1.0, symbol: "AED ", flag: "🇦🇪", label: "UAE Dirham" },
  QAR: { rate: 0.99, symbol: "QAR ", flag: "🇶🇦", label: "Qatari Riyal" },
  SAR: { rate: 1.02, symbol: "SAR ", flag: "🇸🇦", label: "Saudi Riyal" },
  USD: { rate: 0.27, symbol: "$", flag: "🇺🇸", label: "US Dollar" },
  GBP: { rate: 0.21, symbol: "£", flag: "🇬🇧", label: "British Pound" },
  SGD: { rate: 0.36, symbol: "S$", flag: "🇸🇬", label: "Singapore Dollar" },
  AUD: { rate: 0.41, symbol: "A$", flag: "🇦🇺", label: "Australian Dollar" },
  NZD: { rate: 0.45, symbol: "NZ$", flag: "🇳🇿", label: "New Zealand Dollar" },
  LKR: { rate: 81.0, symbol: "Rs. ", flag: "🇱🇰", label: "Sri Lankan Rupee" },
};

export function DigiAiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Settings state
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [activeCurrency, setActiveCurrency] = useState("AED");
  const [chatCurrencyOpen, setChatCurrencyOpen] = useState(false);

  // History and persistent conversations state
  const [conversations, setConversations] = useState<any[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // Form State inside chat (Legacy Form)
  const [currentLeadStep, setCurrentLeadStep] = useState(1);
  const [leadData, setLeadData] = useState<LeadData>({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    country: "",
    budget: "",
    service: "",
    details: "",
    _gotcha: "",
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isLeadCompleted, setIsLeadCompleted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dynamic initial greeting based on language and currency
  const getGreeting = (lang: string, currency: string) => {
    const isAr = lang === "ar";
    const symbol = currencyConfig[currency]?.symbol || "AED ";
    if (isAr) {
      return `مرحباً! أنا ديجي AI، مساعد النمو الرقمي الاستشاري لشركة ديجي بيك. يمكنني إجابتك على أي أسئلة تخص باقات السيو، تصميم وبرمجة المواقع المخصصة، إعلانات السوشيال ميديا، والأسعار (الحالية بالـ ${currency}). كيف يمكنني مساعدتك اليوم في تسريع استراتيجية أعمالك الرقمية؟`;
    }
    return `Hello! I am Digi AI, your consultative growth assistant. I can answer questions about Digipeak's web design, custom SEO, paid digital ads, pricing plans, or founder Sajadh Ahmed. All price estimates will be converted into your active currency (${currency}). How can I help accelerate your digital strategy today?`;
  };

  // Mounting delay and storage loading
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== "undefined") {
      // Sync Language Setting
      const savedLang = localStorage.getItem("digiai_language");
      if (savedLang === "ar" || savedLang === "en") {
        setActiveLanguage(savedLang);
      }

      // Sync Currency Setting
      const savedCurr = localStorage.getItem("digipeak_currency");
      if (savedCurr && currencyConfig[savedCurr]) {
        setActiveCurrency(savedCurr);
      }

      // Load conversations history
      const storedConvs = localStorage.getItem("digipeak_chat_conversations");
      if (storedConvs) {
        try {
          setConversations(JSON.parse(storedConvs));
        } catch (e) {
          console.error("Error loading chat history:", e);
        }
      }

      const activeId = localStorage.getItem("digiai_active_conv_id");
      if (activeId) {
        setActiveConversationId(activeId);
      }

      const stored = localStorage.getItem("digiai_messages");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const messagesWithDates = parsed.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          }));
          setMessages(messagesWithDates);
        } catch (e) {
          initDefaultChat(savedLang || "en", savedCurr || "AED");
        }
      } else {
        initDefaultChat(savedLang || "en", savedCurr || "AED");
      }
    }
  }, []);

  const initDefaultChat = (lang: string, currency: string) => {
    const greeting: Message = {
      id: "initial",
      sender: "bot",
      content: getGreeting(lang, currency),
      timestamp: new Date(),
    };
    setMessages([greeting]);
    if (typeof window !== "undefined") {
      localStorage.setItem("digiai_messages", JSON.stringify([greeting]));
    }
  };

  // Synchronize currency selections with general pages
  useEffect(() => {
    const handleStorageChange = () => {
      const savedCurr = localStorage.getItem("digipeak_currency");
      if (savedCurr && currencyConfig[savedCurr] && savedCurr !== activeCurrency) {
        setActiveCurrency(savedCurr);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [activeCurrency]);

  // Auto-save history
  useEffect(() => {
    if (hasMounted && messages.length > 0) {
      localStorage.setItem("digiai_messages", JSON.stringify(messages));
    }
  }, [messages, hasMounted]);

  // Update current active conversation whenever messages change
  useEffect(() => {
    if (!hasMounted || messages.length <= 1 || !activeConversationId) return;

    setConversations((prev) => {
      const existingIdx = prev.findIndex((c) => c.id === activeConversationId);
      const title = messages.find((m) => m.sender === "user")?.content.slice(0, 30) || "Conversation";
      
      const updatedConv = {
        id: activeConversationId,
        title,
        mode: "Widget Session",
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
  }, [messages, activeConversationId, hasMounted]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Listen for external open triggers
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openDigiAI", handleOpen);
    return () => window.removeEventListener("openDigiAI", handleOpen);
  }, []);

  // Sync isOpen state with custom event
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("digiai-state", { detail: { isOpen } }));
    }
  }, [isOpen]);

  // Welcome tooltip
  useEffect(() => {
    if (!hasMounted) return;
    const t = setTimeout(() => setIsTooltipVisible(true), 2500);
    const t2 = setTimeout(() => setIsTooltipVisible(false), 7000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [hasMounted]);

  if (!hasMounted) return null;
  if (pathname === '/digiai') return null;

  // Language setting change
  const handleLanguageChange = (lang: string) => {
    setActiveLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("digiai_language", lang);
    }
    const isEn = lang === "en";
    const notification: Message = {
      id: "lang-change-" + Math.random().toString(),
      sender: "system",
      content: isEn 
        ? "Language switched to English 🇬🇧" 
        : "تم تغيير اللغة إلى العربية 🇸🇦",
      timestamp: new Date()
    };
    
    // Also inject a new dynamic bot greeting in the chosen language to guide them
    const newGreeting: Message = {
      id: "new-greet-" + Math.random().toString(),
      sender: "bot",
      content: getGreeting(lang, activeCurrency),
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, notification, newGreeting]);
  };

  // Currency setting change
  const handleCurrencyChange = (code: string) => {
    setActiveCurrency(code);
    setChatCurrencyOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("digipeak_currency", code);
      // Trigger event to sync pricing components
      window.dispatchEvent(new Event("storage"));
    }
    
    const notification: Message = {
      id: "curr-change-" + Math.random().toString(),
      sender: "system",
      content: `Currency switched to ${code} ${currencyConfig[code].flag}`,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, notification]);
  };

  // Silent lead autosubmission to hello@digipeak.agency
  const triggerLeadAutoSubmit = async (leadJson: any) => {
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadJson.name,
          email: leadJson.email,
          whatsapp: leadJson.whatsapp || "",
          company: leadJson.company || "",
          country: leadJson.country || "",
          budget: leadJson.budget || "",
          service: leadJson.service,
          details: leadJson.details || leadJson.proposalSummary || "Qualified via conversational AI",
          industry: leadJson.industry || "",
          website: leadJson.website || "",
          leadSource: "DigiAI Chat (Widget)",
          pageUrl: typeof window !== "undefined" ? window.location.href : ""
        }),
      });
      if (res.ok) {
        console.log("Lead qualified and autosubmitted securely!");
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({ event: 'audit_completed', lead_source: 'digi_ai_conversational' });
        }
      }
    } catch (e) {
      console.error("Auto submit lead error:", e);
    }
  };

  // Send query to API
  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    let currentId = activeConversationId;
    if (!currentId) {
      currentId = "conv_" + Date.now();
      setActiveConversationId(currentId);
      if (typeof window !== "undefined") {
        localStorage.setItem("digiai_active_conv_id", currentId);
      }
    }

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      content: text,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputVal("");
    setIsTyping(true);

    try {
      const apiMessages = updatedMessages.map((m) => ({
        role: m.sender === "user" ? "user" : (m.sender === "system" ? "system" : "assistant"),
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: apiMessages,
          language: activeLanguage,
          currency: activeCurrency
        }),
      });

      const contentType = res.headers.get("content-type") || "";
      let botContent = "";
      let isFallback = false;

      if (contentType.includes("application/json")) {
        const data = await res.json();
        botContent = data.content || "";
        isFallback = !!data.fallback;
        setIsTyping(false);
      } else {
        const reader = res.body?.getReader();
        const decoder = new TextDecoder("utf-8");
        if (!reader) throw new Error("No readable stream");

        setIsTyping(false);
        const botMsgId = Math.random().toString();

        setMessages((prev) => [
          ...prev,
          {
            id: botMsgId,
            sender: "bot",
            content: "",
            timestamp: new Date(),
          }
        ]);

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
                  botContent += textPart;
                  setMessages((prev) => prev.map(msg => 
                    msg.id === botMsgId ? { ...msg, content: botContent } : msg
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
              botContent += textPart;
            }
          } catch (e) {}
        }
      }

      let hasLead = false;
      let leadJsonParsed: any = null;

      // Scan content for lead_data blocks
      const leadDataRegex = /<lead_data>([\s\S]*?)<\/lead_data>/;
      const match = botContent.match(leadDataRegex);
      if (match) {
        hasLead = true;
        botContent = botContent.replace(leadDataRegex, "").trim();
        try {
          leadJsonParsed = JSON.parse(match[1].trim());
        } catch (e) {
          console.error("Failed to parse lead data XML JSON:", e);
        }
      }

      if (contentType.includes("application/json")) {
        const botMsg: Message = {
          id: Math.random().toString(),
          sender: "bot",
          content: botContent,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        setMessages((prev) => {
          const newMsgs = [...prev];
          const lastIndex = newMsgs.length - 1;
          if (lastIndex >= 0 && newMsgs[lastIndex].sender === "bot") {
            newMsgs[lastIndex] = { ...newMsgs[lastIndex], content: botContent };
          }
          return newMsgs;
        });
      }

      if (hasLead && leadJsonParsed) {
        const leadCardMsg: Message = {
          id: "lead-card-" + Math.random().toString(),
          sender: "system",
          content: "Conversational Scoping Result",
          timestamp: new Date(),
          isLeadForm: true,
          leadSubmitted: true,
          leadDetails: leadJsonParsed
        };

        setMessages((prev) => [...prev, leadCardMsg]);
        triggerLeadAutoSubmit(leadJsonParsed);
      } else {
        // Legacy buying triggers check (for fallback interactive forms)
        const textLower = text.toLowerCase();
        if (
          !isFallback &&
          (textLower.includes("proposal") ||
          textLower.includes("quote") ||
          textLower.includes("hire") ||
          textLower.includes("get a proposal")) &&
          !hasLead
        ) {
          triggerLeadForm();
        }
      }

    } catch (error) {
      setIsTyping(false);
      const errorMsg: Message = {
        id: Math.random().toString(),
        sender: "bot",
        content: activeLanguage === "ar" 
          ? "حدث خطأ في الاتصال بالخادم. كيف يمكنني مساعدتك في معلومات الأسعار والخدمات؟"
          : "I ran into a server communication hiccup, but I can guide you offline! What service or pricing information are you looking for today?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  // Trigger legacy inline lead form (as fallback)
  const triggerLeadForm = () => {
    setTimeout(() => {
      const formMsg: Message = {
        id: "lead-form-" + Math.random().toString(),
        sender: "system",
        content: "Interactive Proposal Form",
        timestamp: new Date(),
        isLeadForm: true,
        leadSubmitted: false
      };
      setMessages((prev) => [...prev, formMsg]);
    }, 600);
  };

  // Quick Action triggers
  const handleQuickAction = (action: string) => {
    const isAr = activeLanguage === "ar";
    if (action === "Conversational Estimator" || action === "Get Proposal" || action === "تقدير ميزانية") {
      const queryText = isAr ? "أريد تقدير تكلفة مشروع" : "I want to estimate a project";
      const userMsg: Message = {
        id: Math.random().toString(),
        sender: "user",
        content: queryText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      handleSendMessage(queryText);
    } else if (action === "Talk To Human" || action === "تحدث لمستشار") {
      const queryText = isAr ? "أود التحدث إلى شخص بشكل مباشر" : "I would like to speak to a human directly";
      const userMsg: Message = {
        id: Math.random().toString(),
        sender: "user",
        content: queryText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: Math.random().toString(),
          sender: "bot",
          content: isAr 
            ? `بالتأكيد! يمكنك التواصل مع فريق الاستراتيجية لدينا مباشرة عبر واتساب للحصول على رد فوري:
            
🔗 https://wa.me/94773624413`
            : `No problem at all! You can reach our strategy team directly on WhatsApp for an immediate response.

Click the link below to start chat:
🔗 https://wa.me/94773624413`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 700);
    } else {
      const queryText = isAr ? `أخبرني عن خدمة ${action}` : `Tell me about your ${action}`;
      handleSendMessage(queryText);
    }
  };

  // Submit Legacy Lead Qualification Form
  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          leadSource: "DigiAI Manual Lead Form",
          pageUrl: typeof window !== "undefined" ? window.location.href : ""
        }),
      });

      if (res.ok) {
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({ event: 'contact_form_submit', lead_source: 'digi_ai_widget' });
        }
        setIsLeadCompleted(true);
        setMessages((prev) =>
          prev.map((m) => (m.isLeadForm && !m.leadSubmitted ? { ...m, leadSubmitted: true } : m))
        );

        const botSuccessMsg: Message = {
          id: Math.random().toString(),
          sender: "bot",
          content: activeLanguage === "ar"
            ? `شكرًا لك يا ${leadData.name}! لقد تم تأهيل تفاصيل مشروعك وإرسالها إلى hello@digipeak.agency.

سيقوم فريقنا بدراسة المتطلبات وتقديم العرض المخصص لك خلال 24 ساعة.`
            : `Thank you, ${leadData.name}! Your project details have been securely qualified and sent to hello@digipeak.agency.

Our strategy team will analyze your requirements and get back to you with a custom proposal in 24 hours.`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botSuccessMsg]);
      } else {
        alert("Failed to submit. Please try again or email hello@digipeak.agency.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission error. WhatsApp handoff available.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Handoff URL generator
  const getWhatsAppHandoffUrl = (details?: any) => {
    const data = details || leadData;
    const name = data.name;
    const service = data.service;
    const budget = data.budget || "Not specified";
    const notes = data.details || data.proposalSummary || "";
    const text = `Hello Digipeak,\n\nI have qualified my project using Digi AI.\n\nName: ${name}\nService: ${service}\nBudget: ${budget}\nProject Details: ${notes}`;
    return `https://wa.me/94773624413?text=${encodeURIComponent(text)}`;
  };

  // Conversation history helpers
  const handleNewChat = () => {
    initDefaultChat(activeLanguage, activeCurrency);
    setActiveConversationId(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("digiai_active_conv_id");
    }
    setIsHistoryOpen(false);
  };

  const handleLoadConversation = (id: string) => {
    const conv = conversations.find((c) => c.id === id);
    if (conv) {
      setActiveConversationId(id);
      if (typeof window !== "undefined") {
        localStorage.setItem("digiai_active_conv_id", id);
      }
      setMessages(conv.messages.map((m: any) => ({
        ...m,
        timestamp: new Date(m.timestamp)
      })));
      setIsHistoryOpen(false);
    }
  };

  const handleDeleteConversation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Delete this conversation?")) {
      const nextConvs = conversations.filter((c) => c.id !== id);
      setConversations(nextConvs);
      localStorage.setItem("digipeak_chat_conversations", JSON.stringify(nextConvs));
      if (activeConversationId === id) {
        initDefaultChat(activeLanguage, activeCurrency);
        setActiveConversationId(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("digiai_active_conv_id");
        }
      }
    }
  };

  const handleExportChat = () => {
    if (messages.length <= 1) {
      alert("No messages to export.");
      return;
    }
    const header = `==================================================\n  DIGIAI WIDGET CONVERSATION EXPORT\n  Date: ${new Date().toLocaleString()}\n==================================================\n\n`;
    const body = messages.map((m) => {
      const time = new Date(m.timestamp).toLocaleTimeString();
      const sender = m.sender === "user" ? "USER" : (m.sender === "system" ? "SYSTEM" : "DIGIAI");
      return `[${time}] ${sender}:\n${m.content}\n--------------------------------------------------\n`;
    }).join("\n");

    const blob = new Blob([header + body], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `digiai-widget-chat-${activeConversationId || "export"}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleShareChat = () => {
    if (messages.length <= 1) {
      alert("No chat to share.");
      return;
    }
    const text = messages.map((m) => {
      const sender = m.sender === "user" ? "**User**" : "**DigiAI**";
      return `${sender}: ${m.content}`;
    }).join("\n\n");
    const shareMessage = `Check out my conversation with DigiAI:\n\n${text}`;
    navigator.clipboard.writeText(shareMessage).then(() => {
      alert("Conversation copied to clipboard as markdown!");
    }).catch(() => {
      alert("Failed to copy conversation.");
    });
  };

  return (
    <div
      className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-3"
      style={{ fontFamily: "var(--font-sans, sans-serif)" }}
    >
      {/* 1. Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[90vw] sm:w-[400px] h-[550px] rounded-3xl glass border border-white/10 bg-[#08080c]/95 shadow-[0_12px_48px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Main Header */}
            <div className="px-5 py-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#08080c] border border-white/10 flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/logo.png" alt="Digi AI Logo" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold font-heading flex items-center gap-1.5">
                    Digi AI <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-medium">LIVE</span>
                  </h3>
                  <p className="text-muted text-[10px] font-medium leading-none mt-1">
                    {activeLanguage === "ar" ? "مستشارك الرقمي للنمو" : "Your Digital Growth Consultant"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleNewChat}
                  className="p-1 text-muted hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
                  title={activeLanguage === "ar" ? "محادثة جديدة" : "New Chat"}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                  className={`p-1 rounded hover:bg-white/5 transition-colors cursor-pointer ${
                    isHistoryOpen ? "text-accent-primary animate-pulse" : "text-muted hover:text-white"
                  }`}
                  title={activeLanguage === "ar" ? "سجل المحادثات" : "Chat History"}
                >
                  <History className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleShareChat}
                  className="p-1 text-muted hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
                  title={activeLanguage === "ar" ? "مشاركة" : "Share"}
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleExportChat}
                  className="p-1 text-muted hover:text-white rounded hover:bg-white/5 transition-colors cursor-pointer"
                  title={activeLanguage === "ar" ? "تصدير" : "Export"}
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] flex items-center justify-center text-muted hover:text-white transition-all cursor-pointer ml-1"
                  aria-label="Close Chat"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sub-header Settings Bar */}
            <div className="px-5 py-2 border-b border-white/5 bg-white/[0.01] flex items-center justify-between text-[11px]">
              {/* Language Switch */}
              <div className="flex items-center gap-1">
                <span className="text-muted text-[10px]">{activeLanguage === "ar" ? "اللغة:" : "Language:"}</span>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                    activeLanguage === "en"
                      ? "bg-accent-primary/20 text-white font-bold"
                      : "text-muted hover:text-white"
                  }`}
                >
                  EN 🇬🇧
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => handleLanguageChange("ar")}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                    activeLanguage === "ar"
                      ? "bg-accent-primary/20 text-white font-bold"
                      : "text-muted hover:text-white"
                  }`}
                >
                  AR 🇸🇦
                </button>
              </div>

              {/* Currency Selector */}
              <div className="relative">
                <button
                  onClick={() => setChatCurrencyOpen(!chatCurrencyOpen)}
                  className="flex items-center gap-1 text-white hover:text-accent-secondary transition-colors cursor-pointer font-semibold"
                >
                  <span>{currencyConfig[activeCurrency]?.flag}</span>
                  <span>{activeCurrency}</span>
                  <ChevronDown className="w-3 h-3 text-muted" />
                </button>

                <AnimatePresence>
                  {chatCurrencyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute right-0 mt-1 w-32 rounded-xl glass border border-white/10 bg-[#08080c] shadow-2xl p-1 z-[10000] max-h-[150px] overflow-y-auto"
                    >
                      {Object.keys(currencyConfig).map((code) => (
                        <button
                          key={code}
                          onClick={() => handleCurrencyChange(code)}
                          className={`flex items-center justify-between w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-semibold cursor-pointer transition-colors ${
                            activeCurrency === code
                              ? "bg-accent-primary/[0.03] text-accent-primary"
                              : "text-muted hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <span>{currencyConfig[code].flag}</span>
                            <span>{code}</span>
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Chat Content or History Overlay */}
            {isHistoryOpen ? (
              <div className="flex-1 flex flex-col bg-[#08080c] p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <h4 className="text-white text-xs font-bold font-heading flex items-center gap-1.5">
                    <History className="w-4 h-4 text-accent-primary" />
                    {activeLanguage === "ar" ? "المحادثات السابقة" : "Recent Conversations"}
                  </h4>
                  <button 
                    onClick={() => setIsHistoryOpen(false)}
                    className="text-xs text-muted hover:text-white font-semibold transition-colors"
                  >
                    {activeLanguage === "ar" ? "رجوع" : "Back to Chat"}
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 digiai-scrollbar">
                  {conversations.length > 0 ? (
                    conversations.map((conv) => (
                      <div key={conv.id} className={`group flex items-center justify-between rounded-xl transition-all p-1 ${
                        activeConversationId === conv.id ? "bg-white/10 border border-white/5" : "hover:bg-white/5"
                      }`}>
                        <button 
                          onClick={() => handleLoadConversation(conv.id)}
                          className="flex-1 text-left px-3 py-1.5 text-xs truncate flex items-center gap-2"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                          <span className="truncate text-white/90 group-hover:text-white font-medium">{conv.title || "New Conversation"}</span>
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
                    <p className="text-xs text-muted/50 px-3 py-6 italic text-center">
                      {activeLanguage === "ar" ? "لا توجد محادثات سابقة." : "No recent chats."}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <button 
                    onClick={handleNewChat}
                    className="w-full py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary hover:shadow-lg text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    {activeLanguage === "ar" ? "محادثة جديدة" : "Start New Chat"}
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Chat Body */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 digiai-scrollbar">
                  {messages.map((msg) => {
                // Settings messages
                if (msg.sender === "system" && !msg.isLeadForm) {
                  return (
                    <div key={msg.id} className="w-full flex justify-center">
                      <div className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-muted border border-white/5">
                        {msg.content}
                      </div>
                    </div>
                  );
                }

                // Lead Qualification Form / receipt card
                if (msg.sender === "system" && msg.isLeadForm) {
                  return (
                    <div key={msg.id} className="w-full">
                      {msg.leadSubmitted ? (
                        <div className="glass border border-emerald-500/20 rounded-2xl p-4 bg-emerald-500/[0.02] flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-emerald-400">
                            <CheckCircle2 className="w-5 h-5" />
                            <h4 className="text-white text-xs font-bold font-heading">
                              {activeLanguage === "ar" ? "تم تأهيل مشروعك بنجاح!" : "Project Scoping Qualified!"}
                            </h4>
                          </div>

                          {msg.leadDetails ? (
                            <div className="text-[11px] text-muted space-y-1.5 border-t border-white/5 pt-2">
                              <div><span className="text-white font-medium">{activeLanguage === "ar" ? "الاسم:" : "Name:"}</span> {msg.leadDetails.name}</div>
                              {msg.leadDetails.company && <div><span className="text-white font-medium">{activeLanguage === "ar" ? "الشركة:" : "Company:"}</span> {msg.leadDetails.company}</div>}
                              <div><span className="text-white font-medium">{activeLanguage === "ar" ? "الخدمة:" : "Service:"}</span> {msg.leadDetails.service}</div>
                              <div><span className="text-white font-medium">{activeLanguage === "ar" ? "الميزانية:" : "Budget:"}</span> {msg.leadDetails.budget}</div>
                              <div>
                                <span className="text-white font-medium">{activeLanguage === "ar" ? "التقييم:" : "Lead Score:"}</span>{" "}
                                <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                                  msg.leadDetails.leadScore === "Hot" 
                                    ? "bg-red-500/10 text-red-400 border border-red-500/25" 
                                    : msg.leadDetails.leadScore === "Warm"
                                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/25"
                                      : "bg-blue-500/10 text-blue-400 border border-blue-500/25"
                                }`}>
                                  {msg.leadDetails.leadScore}
                                </span>
                              </div>
                              {msg.leadDetails.proposalSummary && (
                                <div className="mt-2 text-[10px] bg-white/[0.02] p-2.5 rounded-xl border border-white/5 whitespace-pre-line text-muted-foreground">
                                  <span className="text-white font-bold block mb-1">{activeLanguage === "ar" ? "ملخص العرض الاستثماري:" : "Internal Proposal Summary:"}</span>
                                  {msg.leadDetails.proposalSummary}
                                </div>
                              )}
                            </div>
                          ) : (
                            <p className="text-muted text-[10px]">
                              {activeLanguage === "ar" ? "تم إرسال المتطلبات المحددة لـ hello@digipeak.agency" : "Details dispatched to hello@digipeak.agency"}
                            </p>
                          )}

                          <a
                            href={getWhatsAppHandoffUrl(msg.leadDetails)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-full py-2 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs font-bold rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            {activeLanguage === "ar" ? "متابعة على واتساب" : "Continue on WhatsApp"}
                          </a>
                        </div>
                      ) : (
                        // Legacy HTML Multi-step Form inside chatbot (as fallback configuration)
                        <div className="glass border border-accent-primary/20 rounded-2xl p-5 bg-white/[0.01]">
                          <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-accent-primary" />
                            <h4 className="text-white font-heading font-bold text-xs">
                              {activeLanguage === "ar" ? "أهل مشروعك الرقمي" : "Qualify Your Growth Project"}
                            </h4>
                          </div>

                          <form onSubmit={submitLead} className="space-y-4">
                            <input type="text" name="_gotcha" value={leadData._gotcha || ""} onChange={(e) => setLeadData({ ...leadData, _gotcha: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />
                            {currentLeadStep === 1 && (
                              <div className="space-y-3">
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "الاسم *" : "Your Name *"}</label>
                                  <div className="relative">
                                    <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <input
                                      type="text"
                                      required
                                      value={leadData.name}
                                      onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                                      placeholder="Sajadh Ahmed"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "البريد الإلكتروني *" : "Your Email *"}</label>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <input
                                      type="email"
                                      required
                                      value={leadData.email}
                                      onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                                      placeholder="hello@digipeak.agency"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "رقم الواتساب" : "WhatsApp Number"}</label>
                                  <div className="relative">
                                    <MessageSquare className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <input
                                      type="tel"
                                      value={leadData.whatsapp}
                                      onChange={(e) => setLeadData({ ...leadData, whatsapp: e.target.value })}
                                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                                      placeholder="+94 77 362 4413"
                                    />
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  disabled={!leadData.name || !leadData.email}
                                  onClick={() => setCurrentLeadStep(2)}
                                  className="w-full py-2 bg-gradient-to-r from-accent-primary to-accent-secondary disabled:opacity-50 text-white text-xs font-bold rounded-xl cursor-pointer hover:shadow-lg transition-all"
                                >
                                  {activeLanguage === "ar" ? "التالي" : "Next Step"}
                                </button>
                              </div>
                            )}

                            {currentLeadStep === 2 && (
                              <div className="space-y-3">
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "اسم الشركة" : "Company Name"}</label>
                                  <div className="relative">
                                    <Building className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <input
                                      type="text"
                                      value={leadData.company}
                                      onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                                      placeholder="Acme Corp"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "البلد" : "Country"}</label>
                                  <div className="relative">
                                    <Globe className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <input
                                      type="text"
                                      value={leadData.country}
                                      onChange={(e) => setLeadData({ ...leadData, country: e.target.value })}
                                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                                      placeholder="Qatar"
                                    />
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setCurrentLeadStep(1)}
                                    className="py-2 border border-white/10 text-white text-xs font-semibold rounded-xl"
                                  >
                                    {activeLanguage === "ar" ? "رجوع" : "Back"}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setCurrentLeadStep(3)}
                                    className="py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold rounded-xl"
                                  >
                                    {activeLanguage === "ar" ? "التالي" : "Next Step"}
                                  </button>
                                </div>
                              </div>
                            )}

                            {currentLeadStep === 3 && (
                              <div className="space-y-3">
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "الخدمة المطلوبة *" : "Service Needed *"}</label>
                                  <div className="relative">
                                    <Briefcase className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <select
                                      required
                                      value={leadData.service}
                                      onChange={(e) => setLeadData({ ...leadData, service: e.target.value })}
                                      className="w-full bg-[#08080c] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:border-accent-primary focus:outline-none appearance-none"
                                    >
                                      <option value="" className="bg-[#08080c]">{activeLanguage === "ar" ? "اختر الخدمة" : "Select Service"}</option>
                                      <option value="SEO Services" className="bg-[#08080c]">SEO Services</option>
                                      <option value="Website Design" className="bg-[#08080c]">Website Design & Dev</option>
                                      <option value="Digital Marketing" className="bg-[#08080c]">Digital Marketing</option>
                                      <option value="E-Commerce Store" className="bg-[#08080c]">E-Commerce Development</option>
                                      <option value="Branding" className="bg-[#08080c]">Branding & Creative</option>
                                      <option value="AI Solutions" className="bg-[#08080c]">AI Solutions</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 w-3 h-3 text-muted pointer-events-none" />
                                  </div>
                                </div>
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "الميزانية المتوقعة" : "Budget Range"}</label>
                                  <div className="relative">
                                    <Coins className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <select
                                      value={leadData.budget}
                                      onChange={(e) => setLeadData({ ...leadData, budget: e.target.value })}
                                      className="w-full bg-[#08080c] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:border-accent-primary focus:outline-none appearance-none"
                                    >
                                      <option value="" className="bg-[#08080c]">{activeLanguage === "ar" ? "اختر نطاق الميزانية" : "Select Budget"}</option>
                                      <option value="Under 2,000 AED" className="bg-[#08080c]">Under 2,000 AED</option>
                                      <option value="2,000 - 5,000 AED" className="bg-[#08080c]">2,000 - 5,000 AED</option>
                                      <option value="5,000 - 15,000 AED" className="bg-[#08080c]">5,000 - 15,000 AED</option>
                                      <option value="15,000+ AED" className="bg-[#08080c]">15,000+ AED (Enterprise)</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 w-3.5 h-3.5 text-muted pointer-events-none" />
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setCurrentLeadStep(2)}
                                    className="py-2 border border-white/10 text-white text-xs font-semibold rounded-xl"
                                  >
                                    {activeLanguage === "ar" ? "رجوع" : "Back"}
                                  </button>
                                  <button
                                    type="button"
                                    disabled={!leadData.service}
                                    onClick={() => setCurrentLeadStep(4)}
                                    className="py-2 bg-gradient-to-r from-accent-primary to-accent-secondary disabled:opacity-50 text-white text-xs font-bold rounded-xl"
                                  >
                                    {activeLanguage === "ar" ? "التالي" : "Next Step"}
                                  </button>
                                </div>
                              </div>
                            )}

                            {currentLeadStep === 4 && (
                              <div className="space-y-3">
                                <div>
                                  <label className="text-[10px] text-muted block mb-1 font-semibold">{activeLanguage === "ar" ? "تفاصيل إضافية" : "Project Details"}</label>
                                  <div className="relative">
                                    <FileText className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted" />
                                    <textarea
                                      value={leadData.details}
                                      onChange={(e) => setLeadData({ ...leadData, details: e.target.value })}
                                      rows={3}
                                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
                                      placeholder="Brief details about your target timeline or key features..."
                                    />
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  <button
                                    type="button"
                                    onClick={() => setCurrentLeadStep(3)}
                                    className="py-2 border border-white/10 text-white text-xs font-semibold rounded-xl"
                                  >
                                    {activeLanguage === "ar" ? "رجوع" : "Back"}
                                  </button>
                                  <button
                                    type="submit"
                                    disabled={isSubmittingLead}
                                    className="py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
                                  >
                                    {isSubmittingLead ? (activeLanguage === "ar" ? "جاري الإرسال..." : "Submitting...") : (activeLanguage === "ar" ? "أرسل الطلب" : "Qualify Lead")}
                                  </button>
                                </div>
                              </div>
                            )}
                          </form>
                        </div>
                      )}
                    </div>
                  );
                }

                // Ordinary chat bubbles
                const isUser = msg.sender === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-lg bg-[#08080c] border border-white/10 flex items-center justify-center flex-shrink-0 text-white shadow-sm mt-0.5 overflow-hidden">
                        <img src="/logo.png" alt="Digi AI Logo" className="w-4.5 h-4.5 object-contain" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                        isUser
                          ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-md shadow-accent-primary/10 rounded-tr-none"
                          : "glass border border-white/10 text-white rounded-tl-none"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#08080c] border border-white/10 flex items-center justify-center flex-shrink-0 text-white shadow-sm overflow-hidden">
                    <img src="/logo.png" alt="Digi AI Logo" className="w-4.5 h-4.5 object-contain" />
                  </div>
                  <div className="glass border border-white/10 text-white rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Settings (scrollable actions list) */}
            <div className="px-5 py-2.5 border-t border-white/5 bg-white/[0.005] flex items-center gap-1.5 overflow-x-auto digiai-scrollbar digiai-scrollbar-horizontal scroll-smooth whitespace-nowrap">
              {(activeLanguage === "ar"
                ? ["سيو SEO", "تصميم مواقع", "تسويق رقمي", "هوية تجارية", "أسعار الخدمات", "تقدير ميزانية", "تحدث لمستشار"]
                : ["SEO Services", "Website Design", "Digital Marketing", "Branding", "Pricing", "Conversational Estimator", "Talk To Human"]
              ).map((act) => (
                <button
                  key={act}
                  onClick={() => handleQuickAction(act)}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-[10px] font-semibold text-white transition-all cursor-pointer"
                >
                  {act}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-white/10 bg-[#08080c] flex gap-2 items-center">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputVal)}
                placeholder={activeLanguage === "ar" ? "اسأل عن السيو، الأسعار، الخدمات..." : "Ask about SEO, pricing, services..."}
                className="flex-1 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-muted focus:border-accent-primary focus:outline-none"
              />
              <button
                onClick={() => handleSendMessage(inputVal)}
                disabled={!inputVal.trim()}
                className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-primary to-accent-secondary disabled:opacity-40 flex items-center justify-center text-white cursor-pointer hover:shadow-lg transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Welcome Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex items-start gap-3 glass rounded-2xl border border-white/10 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[220px]"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-muted hover:text-white transition-colors cursor-pointer"
              aria-label="Dismiss Welcome Tooltip"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="w-8 h-8 rounded-full bg-[#08080c] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden">
              <img src="/logo.png" alt="Digi AI Logo" className="w-5 h-5 object-contain" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold leading-tight mb-0.5">
                {activeLanguage === "ar" ? "ديجي AI الاستشاري" : "Meet Digi AI"}
              </p>
              <p className="text-muted text-[10px] leading-relaxed pr-4">
                {activeLanguage === "ar" ? "اسأله عن باقات وأسعار الخدمات وتصميم المواقع والسيو." : "Ask about packages, prices, & founder Sajadh Ahmed."}
              </p>
            </div>

            {/* Tail */}
            <div className="absolute -bottom-[6px] left-6 w-3 h-3 glass border-b border-l border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Floating Activation Circular Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsTooltipVisible(false);
        }}
        aria-label="Toggle Digi AI assistant"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => !isOpen && setIsTooltipVisible(true)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
          boxShadow: "0 4px 24px rgba(168,85,247,0.35), 0 0 0 0 rgba(168,85,247,0.4)",
        }}
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-accent-primary" />
        <span className="absolute inset-0 rounded-full bg-accent-primary/[0.03]" />

        {isOpen ? (
          <ChevronDown className="relative z-10 w-7 h-7 text-white" />
        ) : (
          <img src="/logo.png" alt="Digi AI Logo" className="relative z-10 w-7.5 h-7.5 object-contain animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}

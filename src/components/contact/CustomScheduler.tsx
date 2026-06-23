"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Globe, CheckCircle2, ChevronRight, AlertCircle, ArrowRight } from "lucide-react";
import { Turnstile } from "@/components/shared/Turnstile";

interface CustomSchedulerProps {
  userName: string;
  userEmail: string;
  funnelName: string;
  onSuccess?: () => void;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export function CustomScheduler({ userName, userEmail, funnelName, onSuccess }: CustomSchedulerProps) {
  const [dates, setDates] = useState<{ date: Date; dateStr: string; label: string; dayName: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("Asia/Dubai");
  const [bookingState, setBookingState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [turnstileToken, setTurnstileToken] = useState("");

  // Define standard slots
  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "02:00 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "05:00 PM", available: true },
  ];

  useEffect(() => {
    // Auto-detect timezone
    if (typeof window !== "undefined") {
      try {
        const detectedTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (detectedTz) setTimezone(detectedTz);
      } catch (e) {
        console.warn("Timezone detection failed, using fallback:", e);
      }
    }

    // Generate next 14 calendar days (excluding Sundays)
    const generatedDates = [];
    let current = new Date();
    
    // Start from tomorrow
    current.setDate(current.getDate() + 1);

    while (generatedDates.length < 10) {
      const day = current.getDay();
      if (day !== 0) { // Skip Sundays (0 = Sunday)
        const dateStr = current.toISOString().split('T')[0];
        const dayName = current.toLocaleDateString("en-US", { weekday: "short" });
        const label = current.toLocaleDateString("en-US", { day: "numeric", month: "short" });
        
        generatedDates.push({
          date: new Date(current),
          dateStr,
          label,
          dayName
        });
      }
      current.setDate(current.getDate() + 1);
    }

    setDates(generatedDates);
    // Pre-select first date
    if (generatedDates.length > 0) {
      setSelectedDate(generatedDates[0].dateStr);
    }
  }, []);

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;

    setBookingState('submitting');
    setErrorMessage("");

    try {
      const selectedDateObj = dates.find(d => d.dateStr === selectedDate);
      const displayDate = selectedDateObj ? selectedDateObj.date.toLocaleDateString("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : selectedDate;

      const res = await fetch("/api/book-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          date: displayDate,
          time: selectedTime,
          timezone,
          funnel: funnelName,
          turnstileToken
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to book strategy session.");
      }

      setBookingState('success');
      
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        let eventName = "booking_confirmed";
        const fn = String(funnelName).toLowerCase();
        if (fn.includes("proposal")) {
          eventName = "proposal_booked";
        } else if (fn.includes("audit")) {
          eventName = "audit_booked";
        } else if (fn.includes("digiai") || fn.includes("digi_ai") || fn.includes("chat") || fn.includes("widget")) {
          eventName = "digiai_booked";
        }
        (window as any).dataLayer.push({
          event: eventName,
          funnel: funnelName,
          lead_email: userEmail
        });
      }

      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error("Booking error:", err);
      setBookingState('error');
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  const getDisplayDateLabel = () => {
    if (!selectedDate) return "";
    const dateObj = dates.find(d => d.dateStr === selectedDate);
    return dateObj ? dateObj.date.toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" }) : "";
  };

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-8 text-white min-h-[550px] md:min-h-[650px] bg-[#030305]/60 backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {bookingState === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-grow flex flex-col justify-center items-center text-center space-y-6 py-8"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-white">
                Session Confirmed!
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Thank you, <span className="text-white font-semibold">{userName}</span>. Your strategy session is scheduled.
              </p>
            </div>

            <div className="glass p-5 rounded-2xl border border-white/10 w-full max-w-sm bg-white/[0.02] text-left space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Date</p>
                  <p className="text-sm font-semibold text-white">{getDisplayDateLabel()}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Time Slot</p>
                  <p className="text-sm font-semibold text-white">{selectedTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Timezone</p>
                  <p className="text-xs text-slate-300 font-light truncate max-w-[240px]">{timezone}</p>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-center max-w-md">
              <p className="text-xs text-slate-400">
                A calendar invitation with the Google Meet link has been dispatched to:
              </p>
              <p className="text-xs text-accent-primary font-mono select-all bg-accent-primary/5 px-3 py-1 rounded-md inline-block border border-accent-primary/20">
                {userEmail}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="scheduler"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-grow flex flex-col justify-between space-y-6"
          >
            {/* Header */}
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
                Select Date & Time
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Choose a convenient slot for your custom strategy walk-through.
              </p>
            </div>

            {/* Timezone Info */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 font-mono">
              <Globe className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
              <span className="truncate">Timezone: {timezone} (Auto-detected)</span>
            </div>

            {/* Dates Carousel/Grid */}
            <div className="space-y-3">
              <label className="text-[11px] uppercase tracking-wider font-mono text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Select a Date
              </label>
              
              <div className="grid grid-cols-5 gap-2">
                {dates.map((d) => {
                  const isSelected = selectedDate === d.dateStr;
                  return (
                    <button
                      key={d.dateStr}
                      type="button"
                      onClick={() => {
                        setSelectedDate(d.dateStr);
                        setSelectedTime(""); // reset time when date changes
                      }}
                      className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-accent-primary/20 border-accent-primary text-white shadow-[0_0_15px_rgba(124,92,255,0.15)]"
                          : "bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <span className="text-[9px] uppercase tracking-widest font-mono font-bold block mb-0.5">{d.dayName}</span>
                      <span className="text-xs font-bold font-heading">{d.label.split(' ')[0]}</span>
                      <span className="text-[9px] uppercase tracking-wider block font-light opacity-80 mt-0.5">{d.label.split(' ')[1]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-3 flex-grow">
              <label className="text-[11px] uppercase tracking-wider font-mono text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Available Times
              </label>

              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedTime(slot.time)}
                      className={`py-2 px-1 rounded-xl text-center border text-xs font-semibold font-mono transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-accent-primary to-accent-secondary border-accent-primary text-white shadow-[0_4px_12px_rgba(124,92,255,0.25)]"
                          : "bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error Message */}
            {bookingState === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-mono">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Turnstile Spam Protection */}
            <div className="py-2">
              <Turnstile onVerify={setTurnstileToken} />
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/5">
              <button
                type="button"
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !turnstileToken || bookingState === 'submitting'}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-heading text-sm font-bold transition-all relative overflow-hidden group bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-[0_4px_20px_rgba(124,92,255,0.3)] hover:brightness-110 disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none"
              >
                {bookingState === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Booking Discovery Call...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Strategy Session</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

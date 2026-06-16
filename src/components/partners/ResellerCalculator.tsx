"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Info, Calculator, Sparkles } from "lucide-react";

export function ResellerCalculator() {
  const [projectsPerMonth, setProjectsPerMonth] = useState(2);
  const [avgProjectValue, setAvgProjectValue] = useState(5000);
  const [desiredMargin, setDesiredMargin] = useState(30);
  const [annualVolume, setAnnualVolume] = useState(15);

  const [averageProfitPerProject, setAverageProfitPerProject] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [projectedAnnualEarnings, setProjectedAnnualEarnings] = useState(0);

  useEffect(() => {
    const profitPerProject = avgProjectValue * (desiredMargin / 100);
    const monthlyRev = projectsPerMonth * avgProjectValue;
    const annualRev = annualVolume * avgProjectValue;
    const annualEarnings = annualVolume * profitPerProject;

    setAverageProfitPerProject(profitPerProject);
    setMonthlyRevenue(monthlyRev);
    setAnnualRevenue(annualRev);
    setProjectedAnnualEarnings(annualEarnings);
  }, [projectsPerMonth, avgProjectValue, desiredMargin, annualVolume]);

  return (
    <section id="earnings-calculator-section" className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5 scroll-mt-28">
      <div className="mx-auto max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Profit calculator</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Estimate Your Potential Earnings
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Use the interactive sliders below to project your revenue and margins under our reseller model.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders (Left Column) */}
          <div className="lg:col-span-7 glass border border-white/10 bg-white/[0.01] rounded-3xl p-6 md:p-8 space-y-6.5">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-indigo-400" />
              <h3 className="font-heading text-lg font-bold text-white">Adjust Parameters</h3>
            </div>

            {/* Projects Per Month */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-white font-mono">
                <span>Projects Per Month</span>
                <span className="text-indigo-400">{projectsPerMonth}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={projectsPerMonth}
                onChange={(e) => setProjectsPerMonth(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            {/* Average Project Value */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-white font-mono">
                <span>Average Project Value (AED)</span>
                <span className="text-indigo-400">AED {avgProjectValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={avgProjectValue}
                onChange={(e) => setAvgProjectValue(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            {/* Your Desired Margin % */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-white font-mono">
                <span>Your Desired Margin %</span>
                <span className="text-indigo-400">{desiredMargin}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="70"
                value={desiredMargin}
                onChange={(e) => setDesiredMargin(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>

            {/* Annual Referral Volume */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-white font-mono">
                <span>Annual Referral Volume (Projects/Year)</span>
                <span className="text-indigo-400">{annualVolume}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={annualVolume}
                onChange={(e) => setAnnualVolume(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
            </div>
          </div>

          {/* Results (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Output Panel */}
            <div className="glass border border-indigo-500/20 bg-indigo-950/5 rounded-3xl p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 className="font-heading text-lg font-bold text-white">Earnings Breakdown</h3>
              </div>

              {/* Monthly Revenue Potential */}
              <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                <span className="text-xs text-muted font-medium">Monthly Revenue Potential</span>
                <span className="text-base font-bold text-white font-mono">AED {monthlyRevenue.toLocaleString()}</span>
              </div>

              {/* Annual Revenue Potential */}
              <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                <span className="text-xs text-muted font-medium">Annual Revenue Potential</span>
                <span className="text-base font-bold text-white font-mono">AED {annualRevenue.toLocaleString()}</span>
              </div>

              {/* Average Profit Per Project */}
              <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                <span className="text-xs text-muted font-medium">Average Profit Per Project</span>
                <span className="text-base font-bold text-emerald-400 font-mono">AED {averageProfitPerProject.toLocaleString()}</span>
              </div>

              {/* Projected Annual Earnings */}
              <div className="pt-2 flex justify-between items-center">
                <span className="text-sm font-bold text-white">Projected Annual Earnings</span>
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
                  AED {projectedAnnualEarnings.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Example Card Box */}
            <div className="glass border border-white/5 bg-white/[0.005] rounded-3xl p-6">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono block mb-3">Example Scenario</span>
              <h4 className="font-heading text-sm font-bold text-white mb-1">10 Website Projects Per Year</h4>
              <p className="text-xs text-muted mb-4 leading-relaxed">
                Average Project Value: <span className="text-white font-semibold font-mono">AED 3,000</span>
              </p>
              <div className="border-t border-white/5 pt-3.5 flex justify-between items-baseline">
                <span className="text-xs text-muted">Estimated Earnings:</span>
                <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-accent-primary to-accent-secondary font-mono">
                  AED 12,000+
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground block text-right mt-1 font-medium font-sans">Potential Annual Profit</span>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2.5 px-2">
              <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                <strong>Disclaimer:</strong> All figures generated by this calculator are illustrative estimates only and do not represent guaranteed earnings. Actual payouts depend entirely on custom agreements and finalized project invoices.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

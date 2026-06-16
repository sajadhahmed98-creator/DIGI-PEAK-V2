import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Elevate Marketing Group | Enterprise Transformation Case Study | Digipeak",
  description: "Discover how Digipeak transformed Elevate Marketing Group with a complete enterprise digital strategy, AI automation, and scalable growth systems.",
};

export default function ElevateCaseStudyPage() {
  const challenges = [
    "Weak brand positioning in a highly competitive Dubai market.",
    "Low organic search visibility.",
    "Poor website conversion rates.",
    "Manual lead qualification process.",
    "Lack of authority-building content strategy.",
    "No automation workflows.",
    "Inconsistent visual identity across digital channels."
  ];

  const goals = [
    { title: "Revenue Growth", value: "Increase annual revenue by 250%+" },
    { title: "Lead Generation", value: "Generate 150+ qualified leads monthly" },
    { title: "Organic Growth", value: "Increase website traffic by 450%" },
    { title: "Conversion Optimization", value: "Improve lead conversion rate by 180%" },
    { title: "Brand Authority", value: "Position Elevate among top digital agencies in Dubai" },
    { title: "Automation", value: "Reduce manual administrative tasks by 70%" }
  ];

  const deliverables = [
    "Brand Strategy Document", "Visual Identity System", "Logo Suite", "Brand Guidelines", 
    "Website UX/UI", "Full Website Development", "SEO Framework", "Content Strategy", 
    "Social Media Playbook", "Paid Ads Strategy", "AI Assistant", "CRM Integration", 
    "Analytics Dashboard", "Conversion Funnel System"
  ];

  return (
    <div className="bg-[#03050c] text-white selection:bg-accent-primary/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-primary mb-8">
              Enterprise Digital Transformation
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">
              Elevate Marketing Group
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto mb-12">
              Transforming a service provider into a premium digital brand capable of attracting enterprise-level clients in Dubai.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-left border-y border-white/10 py-8 mt-12 bg-white/[0.02] backdrop-blur-sm rounded-2xl">
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Industry</p>
                <p className="font-bold text-lg">Digital Marketing</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-lg">Dubai, UAE</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Duration</p>
                <p className="font-bold text-lg">6 Months</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Executive Summary & Challenges */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5 bg-[#050816]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Executive Summary</h2>
              <div className="prose prose-invert prose-lg text-muted/90">
                <p>Elevate Marketing Group approached Digipeak with a clear challenge: Despite offering high-quality marketing services, the agency lacked a premium market presence capable of attracting enterprise-level clients.</p>
                <p>The company needed a complete digital transformation to reposition itself as one of the leading marketing agencies in Dubai and the GCC region. Digipeak was selected to lead the project from strategy to execution.</p>
                <p>The objective was to create a scalable growth ecosystem capable of generating predictable leads while building long-term authority.</p>
              </div>
            </Reveal>
          </div>
          
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Business Challenges</h2>
            </Reveal>
            <StaggerContainer delayOffset={0.1} className="space-y-4">
              {challenges.map((challenge, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold text-sm shrink-0">
                      0{i + 1}
                    </div>
                    <p className="text-white/80 font-medium pt-1">{challenge}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Goals & Strategy */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center">Business Goals</h2>
          </Reveal>
          
          <StaggerContainer delayOffset={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {goals.map((goal, i) => (
              <StaggerItem key={i}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-accent-primary">{goal.title}</h3>
                  <p className="text-muted/90 text-lg leading-relaxed">{goal.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Discovery & Strategy</h2>
              <p className="text-lg text-muted/90 mb-8">
                We conducted a full digital audit, reviewing leading agencies in Dubai, analyzing search demand, buyer behavior, and mapping out core customer personas.
              </p>
              
              <div className="p-6 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/20 blur-2xl rounded-full" />
                <h4 className="text-xs uppercase tracking-widest text-accent-secondary font-bold mb-3">Brand Positioning Statement</h4>
                <p className="text-xl font-heading italic text-white/90 relative z-10">
                  "Helping ambitious businesses accelerate growth through data-driven marketing, AI automation, and scalable digital systems."
                </p>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {["Premium", "Professional", "Strategic", "Innovative", "Trustworthy", "Modern"].map(trait => (
                  <div key={trait} className="p-4 rounded-xl border border-white/10 bg-[#050816] text-center font-medium text-white/80">
                    {trait}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual Identity Showcase */}
      <section className="py-20 md:py-32 px-6 bg-[#050816] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Visual Identity System</h2>
              <p className="text-lg text-muted/90 max-w-2xl mx-auto">A modern geometric "E" symbol representing Growth, Performance, Innovation, and Digital Transformation.</p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] mb-16">
              <Image src="/images/case-studies/elevate/brand.png" alt="Elevate Brand Guidelines" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Website & App Architecture Showcase */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Digital Experience & Web Architecture</h2>
              <p className="text-lg text-muted/90 mb-6">
                We developed a high-performing Next.js platform integrated with a Headless CMS, targeting a 95+ Google Lighthouse Score.
              </p>
              <ul className="space-y-3 mb-8">
                {["Brand authority homepage", "Interactive portfolio showcase", "SEO-focused Blog Hub", "Lead qualification contact system"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/images/case-studies/elevate/website.png" alt="Elevate Website Design" fill className="object-cover" />
              </div>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <Reveal delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/images/case-studies/elevate/app.png" alt="Elevate Dashboard and AI Tools" fill className="object-cover" />
              </div>
            </Reveal>
            
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">AI Automation & CRM</h2>
              <p className="text-lg text-muted/90 mb-6">
                To scale operations, we integrated a proprietary AI Assistant System and CRM dashboard.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /> AI Lead Qualification Bot</li>
                <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /> Automated Proposal Generator</li>
                <li className="flex items-center gap-3 text-white/80"><CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /> HubSpot CRM Integration</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social & Content Strategy */}
      <section className="py-20 md:py-32 px-6 bg-[#050816] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Content & Social Strategy</h2>
              <p className="text-lg text-muted/90 max-w-2xl mx-auto">An omnipresent social framework focusing on authority building, educational reels, and high-impact LinkedIn thought leadership.</p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/case-studies/elevate/social.png" alt="Elevate Social Media Strategy" fill className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated Results */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-center">Results Achieved</h2>
          </Reveal>
          
          <StaggerContainer delayOffset={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            <StaggerItem>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold font-heading text-emerald-400 mb-2">
                  +<Counter to={487} duration={2.5} />%
                </div>
                <p className="text-muted text-sm uppercase tracking-wider font-bold">Organic Traffic</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold font-heading text-accent-primary mb-2">
                  +<Counter to={312} duration={2.5} />%
                </div>
                <p className="text-muted text-sm uppercase tracking-wider font-bold">Qualified Leads</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold font-heading text-accent-secondary mb-2">
                  +<Counter to={275} duration={2.5} />%
                </div>
                <p className="text-muted text-sm uppercase tracking-wider font-bold">Revenue Growth</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
                  <Counter to={96} duration={2.5} />%
                </div>
                <p className="text-muted text-sm uppercase tracking-wider font-bold">Client Retention</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Testimonial & Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <h3 className="text-2xl font-bold font-heading mb-6">Deliverables Created</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-transparent border border-accent-primary/30 relative">
                <div className="text-6xl text-accent-primary/30 font-serif absolute top-6 left-6 leading-none">"</div>
                <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed relative z-10 mb-8 italic">
                  Digipeak transformed our agency from a service provider into a premium digital brand. The combination of branding, SEO, automation, and lead generation created measurable business growth and significantly improved our market position across the GCC.
                </p>
                <p className="font-bold tracking-wider text-accent-secondary uppercase text-sm">
                  — CEO, Elevate Marketing Group
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-[#050816] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">Ready for your transformation?</h2>
          <p className="text-lg text-muted/90 mb-10 max-w-2xl mx-auto relative z-10">
            Let's build a scalable growth engine for your business utilizing the same enterprise strategies.
          </p>
          <div className="relative z-10 flex justify-center">
            <MagneticButton>
              <Link href="/contact" className="btn-primary px-8 py-4 text-sm font-bold flex items-center gap-2">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </section>

    </div>
  );
}

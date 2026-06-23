import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import caseStudiesData from "@/data/case_studies.json";

interface CaseStudy {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  industry: string;
  location: string;
  duration: string;
  summary: string[];
  challenges: string[];
  goals: { title: string; value: string }[];
  strategyText: string;
  brandPositioning: string;
  brandTraits: string[];
  visualIdentity: { desc: string; image: string };
  webExperience: { desc: string; items: string[]; image: string };
  automation: { desc: string; items: string[]; image: string };
  contentStrategy: { desc: string; image: string };
  results: { label: string; value: number; suffix: string; color: string }[];
  deliverables: string[];
  testimonial: { quote: string; author: string };
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const caseStudy = (caseStudiesData as CaseStudy[]).find((cs) => cs.slug === params.slug);
  if (!caseStudy) {
    return {};
  }
  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    alternates: {
      canonical: `https://www.digipeak.agency/case-studies/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const caseStudy = (caseStudiesData as CaseStudy[]).find((cs) => cs.slug === params.slug);
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-[#03050c] text-white selection:bg-accent-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-primary mb-8">
              {caseStudy.category}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">
              {caseStudy.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto mb-12">
              Transforming a service provider into a premium digital brand capable of attracting enterprise-level clients in {caseStudy.location.split(",")[0]}.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-left border-y border-white/10 py-8 mt-12 bg-white/[0.02] backdrop-blur-sm rounded-2xl">
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Industry</p>
                <p className="font-bold text-lg">{caseStudy.industry}</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="font-bold text-lg">{caseStudy.location}</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-widest mb-1">Duration</p>
                <p className="font-bold text-lg">{caseStudy.duration}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Executive Summary & Challenges */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5 bg-[#020203]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Executive Summary</h2>
              <div className="prose prose-invert prose-lg text-muted/90">
                {caseStudy.summary.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>
          
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Business Challenges</h2>
            </Reveal>
            <StaggerContainer delayOffset={0.1} className="space-y-4">
              {caseStudy.challenges.map((challenge, i) => (
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
            {caseStudy.goals.map((goal, i) => (
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
                {caseStudy.strategyText}
              </p>
              
              <div className="p-6 rounded-2xl bg-accent-primary/[0.03] border border-accent-primary/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/20 blur-2xl rounded-full" />
                <h4 className="text-xs uppercase tracking-widest text-accent-secondary font-bold mb-3">Brand Positioning Statement</h4>
                <p className="text-xl font-heading italic text-white/90 relative z-10">
                  "{caseStudy.brandPositioning}"
                </p>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.brandTraits.map((trait) => (
                  <div key={trait} className="p-4 rounded-xl border border-white/10 bg-[#020203] text-center font-medium text-white/80">
                    {trait}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visual Identity Showcase */}
      <section className="py-20 md:py-32 px-6 bg-[#020203] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Visual Identity System</h2>
              <p className="text-lg text-muted/90 max-w-2xl mx-auto">{caseStudy.visualIdentity.desc}</p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] mb-16 bg-[#0b0b0f]/50">
              <Image 
                src={caseStudy.visualIdentity.image} 
                alt={`${caseStudy.title} Brand Guidelines`} 
                fill 
                sizes="(max-width: 1024px) 100vw, 80vw" 
                className="object-cover" 
              />
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
                {caseStudy.webExperience.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {caseStudy.webExperience.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b0b0f]/50">
                <Image 
                  src={caseStudy.webExperience.image} 
                  alt={`${caseStudy.title} Website Design`} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover" 
                />
              </div>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <Reveal delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b0b0f]/50">
                <Image 
                  src={caseStudy.automation.image} 
                  alt={`${caseStudy.title} Dashboard and AI Tools`} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover" 
                />
              </div>
            </Reveal>
            
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">AI Automation & CRM</h2>
              <p className="text-lg text-muted/90 mb-6">
                {caseStudy.automation.desc}
              </p>
              <ul className="space-y-3">
                {caseStudy.automation.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social & Content Strategy */}
      <section className="py-20 md:py-32 px-6 bg-[#020203] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Content & Social Strategy</h2>
              <p className="text-lg text-muted/90 max-w-2xl mx-auto">{caseStudy.contentStrategy.desc}</p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b0b0f]/50">
              <Image 
                src={caseStudy.contentStrategy.image} 
                alt={`${caseStudy.title} Social Media Strategy`} 
                fill 
                sizes="(max-width: 1024px) 100vw, 80vw" 
                className="object-cover" 
              />
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
            {caseStudy.results.map((res, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                  <div className={`text-4xl md:text-5xl font-bold font-heading mb-2 ${res.color}`}>
                    +{res.value === 96 ? "" : "+"}<Counter to={res.value} duration={2.5} />{res.suffix}
                  </div>
                  <p className="text-muted text-sm uppercase tracking-wider font-bold">{res.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Testimonial & Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <h3 className="text-2xl font-bold font-heading mb-6">Deliverables Created</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.deliverables.map((item) => (
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
                  {caseStudy.testimonial.quote}
                </p>
                <p className="font-bold tracking-wider text-accent-secondary uppercase text-sm">
                  — {caseStudy.testimonial.author}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-[#020203] border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-accent-primary/[0.03] blur-[120px] rounded-full pointer-events-none" />
        
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

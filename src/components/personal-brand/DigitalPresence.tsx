"use client";

import { motion } from "framer-motion";
import { Globe, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

// Inline Custom SVGs for platforms/icons
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.228 15.011c0 .412-.108.78-.325 1.102-.217.324-.515.58-.893.771-.378.19-.816.286-1.312.286H3.342V12.85h2.247c.531 0 .979.088 1.346.264.366.177.65.426.852.748.201.32.302.695.302 1.124m-.227-4.457c0 .356-.09.673-.271.954-.18.28-.432.502-.756.663-.323.161-.714.242-1.171.242H3.342V9.167h2.28c.451 0 .837.078 1.156.234.32.156.566.375.739.658.172.282.259.605.259.97l.025.125zM0 19.333h5.922c1.233 0 2.274-.249 3.123-.748.849-.499 1.498-1.189 1.947-2.072.449-.882.673-1.879.673-2.99 0-.913-.153-1.748-.46-2.505-.306-.757-.751-1.398-1.332-1.923.705-.623 1.218-1.353 1.54-2.188.322-.836.483-1.776.483-2.822 0-1.011-.205-1.916-.615-2.716-.411-.8-.992-1.436-1.744-1.908-.752-.472-1.637-.708-2.656-.708H0v18.579zm21.467-6.071c-.08-.667-.323-1.229-.731-1.688-.407-.458-.938-.802-1.593-1.031a6.035 6.035 0 00-2.112-.346c-1.127 0-2.11.236-2.951.708-.841.472-1.488 1.149-1.942 2.032-.453.882-.68 1.908-.68 3.076 0 1.139.227 2.146.68 3.023.454.878 1.1 1.549 1.938 2.013.839.464 1.83.696 2.973.696 1.42 0 2.6-.339 3.541-1.018.94-.679 1.514-1.636 1.72-2.872h-2.585c-.145.49-.427.876-.848 1.157-.421.282-.95.422-1.589.422-.65 0-1.192-.149-1.625-.447-.434-.298-.737-.714-.908-1.248h7.935c.033-.275.051-.555.051-.84l-.014-.583zm-2.479.948h-5.267c.099-.544.359-.974.781-1.289.422-.315.952-.473 1.589-.473.623 0 1.144.156 1.565.467.421.311.693.742.818 1.29l.514.005zm-15-10.457h6.634v1.86H3.988v-1.86z"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-12.513c-.37-.093-3.923-.935-7.91-.334 1.638 4.49 2.296 8.1 2.407 8.678 3.42-1.745 5.51-5.228 5.503-8.344zm-7.616 9.45c-.145-.75-.853-4.46-2.56-9.018-.088.026-.178.05-.27.078-4.887 1.51-6.663 5.483-6.84 5.9.043.036.085.07.13.106 2.1 2.247 5.093 3.622 8.412 3.622 1.196 0 2.34-.216 3.4-.606.012-.047.018-.095.028-.142zm-11.83-4.59c.27-.42 2.656-4.042 7.23-5.215.19-.05.384-.092.578-.13-1.317-3.032-2.73-5.59-3.1-6.223a10.276 10.276 0 00-6.148 9.387c0 .8.095 1.576.273 2.322.025-.047.05-.093.076-.14zm1.884-12.593c.36.603 1.842 3.298 3.252 6.47 3.962-1.488 5.542-3.727 5.864-4.223a10.25 10.25 0 00-9.116-2.247zm11.394 1.25c-.328.487-2.073 2.87-6.046 4.305.86 2.096 1.6 4.095 2.14 5.76.042-.008.083-.016.126-.025 4.398-.9 7.747.464 8.09.615A10.254 10.254 0 0014.07 3.597z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.876 1.528c-1.396-.135-2.766.196-3.856.931-1.09.735-1.815 1.81-2.04 3.028-.216 1.166.071 2.355.808 3.348a5.556 5.556 0 003.541 2.176c1.194.224 2.36-.088 3.284-.88.924-.792 1.458-1.92 1.503-3.177.045-1.258-.415-2.433-1.295-3.308-.881-.876-2.074-1.385-3.361-1.433zm-1.42 1.42c.881.033 1.685.38 2.278.98a4.135 4.135 0 011.026 2.478 4.136 4.136 0 01-1.026 2.478 4.136 4.136 0 01-2.478 1.026 4.136 4.136 0 01-2.478-1.026c-.593-.6-.947-1.397-.98-2.278a4.136 4.136 0 011.026-2.478 4.136 4.136 0 012.478-1.026l.156-.156zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12C0 5.384 5.373 0 12 0s12 5.384 12 12zm-3.056.236c-.198-2.748-2.235-4.965-4.992-5.18-1.509-.118-2.923.364-3.956 1.254a6.568 6.568 0 00-1.748 3.655 6.569 6.569 0 001.748 3.656c1.033.89 2.447 1.372 3.956 1.254a5.186 5.186 0 004.992-5.18 4.093 4.093 0 00.354-2.236c-.053-.564-.472-1.011-1.036-1.064s-1.064.354-1.118.918a2.08 2.08 0 01-1.8 1.8v-2.072a2.083 2.083 0 011.8-1.8 3.14 3.14 0 003.02 3.125l.024.167z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.377-.294 1.194-.333 1.354-.053.211-.174.257-.402.15-1.5-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.988-5.373 11.988-12S18.637 0 12.017 0z"/>
  </svg>
);

const FiverrIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12.007c0-2.492-1.854-4.507-4.14-4.507-2.287 0-4.14 2.015-4.14 4.507s1.853 4.507 4.14 4.507c2.286 0 4.14-2.015 4.14-4.507zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.384 19.333h2.38V12.75h3.906v6.583h2.38v-6.583h3.5v-2.083h-3.5V8.125c0-.623.238-.938.833-.938h2.667v-2.084h-2.667c-2.023 0-3.213 1.04-3.213 2.917v2.667h-3.906v-3.75h-2.38v12.502h-.001z"/>
  </svg>
);

const FreelancerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.654 4.296L12.01 1.082a.377.377 0 00-.594 0L8.773 4.296a.377.377 0 00.297.625h5.287c.297 0 .445-.357.297-.625zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM7.346 19.333h9.308a.377.377 0 00.297-.625L12 12.583 7.049 18.708c-.148.268 0 .625.297.625z"/>
  </svg>
);

const presenceData = [
  {
    category: "Social Media",
    accent: "border-accent-primary/20 bg-accent-primary/[0.015] text-accent-primary",
    profiles: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sajadh-ahmed-6a62641a9/", desc: "Professional background & business network.", icon: LinkedinIcon },
      { name: "Instagram", url: "https://www.instagram.com/aham3dsm", desc: "Design inspiration & daily photography updates.", icon: InstagramIcon },
      { name: "Threads", url: "https://www.threads.com/@sajadhahm?igshid=NTc4MTIwNjQ2YQ==", desc: "Short thoughts & design insights.", icon: ThreadsIcon },
      { name: "X (Twitter)", url: "https://x.com/sajadhahmed?s=11&t=esyvwkDm1CU4N2JMX_w0dw", desc: "Tech discussions & industry commentary.", icon: TwitterIcon },
      { name: "Facebook", url: "https://www.facebook.com/share/1HRThmiG7S/?mibextid=wwXIfr", desc: "Personal network & local community.", icon: FacebookIcon },
      { name: "Pinterest", url: "https://pin.it/42522pkhe", desc: "Creative vision boards & design pins.", icon: PinterestIcon },
    ]
  },
  {
    category: "Creative Platforms",
    accent: "border-accent-secondary/20 bg-accent-secondary/[0.015] text-accent-secondary",
    profiles: [
      { name: "Behance", url: "https://www.behance.net/sajathahm", desc: "Full case studies & visual branding portfolios.", icon: BehanceIcon },
      { name: "Dribbble", url: "https://dribbble.com/sajadh98", desc: "Design mockups, UI concepts & graphic shots.", icon: DribbbleIcon },
    ]
  },
  {
    category: "Freelance Platforms",
    accent: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
    profiles: [
      { name: "Fiverr", url: "https://www.fiverr.com/sellers/sajadh", desc: "Direct freelance services & logo retainers.", icon: FiverrIcon },
      { name: "Freelancer", url: "https://www.freelancer.com/u/Sajadh98", desc: "Contract design & digital marketing projects.", icon: FreelancerIcon },
    ]
  },
  {
    category: "Development & Publishing",
    accent: "border-amber-500/20 bg-amber-500/5 text-amber-400",
    profiles: [
      { name: "Personal Website", url: "https://sajadhahmed.com", desc: "Personal portfolio and creative hub.", icon: Globe },
      { name: "Link Directory", url: "https://sajathahmed.link/", desc: "One-stop link directory & brand resources.", icon: ExternalLink },
      { name: "GitHub", url: "https://github.com/sajadhahmed98-creator", desc: "Open-source projects and web codebases.", icon: GithubIcon },
      { name: "Medium", url: "https://medium.com/@sajathahmed/about", desc: "Tech publications, design guides & articles.", icon: BookOpen },
    ]
  }
];

export function DigitalPresence() {
  return (
    <section className="py-12 md:py-20 lg:py-32 px-6 bg-black/50 border-t border-white/5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/[0.015] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <span className="text-accent-secondary font-mono text-xs font-bold uppercase tracking-widest mb-4 block">
            E-E-A-T Networks
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Digital <span className="text-gradient-primary">Presence.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            A premium directory linking all verified social channels, creative showcases, freelance storefronts, and code repositories.
          </p>
        </div>

        <div className="space-y-16">
          {presenceData.map((group, groupIdx) => (
            <div key={group.category} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full bg-current ${group.accent.split(' ').pop()}`} />
                <h3 className="font-heading text-lg font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.profiles.map((profile, i) => {
                  const Icon = profile.icon;
                  return (
                    <motion.div
                      key={profile.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (groupIdx * 3 + i) * 0.04 }}
                      className="glass border border-white/8 rounded-2xl p-5 hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center bg-white/[0.02] text-white/70 group-hover:text-white group-hover:border-white/20 transition-all duration-300`}>
                            <Icon />
                          </div>
                          <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            aria-label={`Visit Sajadh Ahmed on ${profile.name}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{profile.name}</h4>
                          <p className="text-xs text-muted leading-relaxed mt-1">{profile.desc}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/5">
                        <a
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-muted hover:text-white transition-colors"
                        >
                          Visit Platform
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const items = [
  "Established 2022",
  "Serving GCC & Global Markets",
  "Based in Sri Lanka",
  "AI-Powered Growth Solutions",
  "Founder-Led Agency",
];

export function TrustSection() {
  return (
    <section className="border-y border-white/5 py-5 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={item} className="flex items-center gap-8">
              <span className="text-xs font-medium text-muted tracking-[0.06em] uppercase whitespace-nowrap">
                {item}
              </span>
              {i < items.length - 1 && (
                <span className="hidden sm:block w-px h-3 bg-white/15" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

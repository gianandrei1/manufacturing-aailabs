import { useEffect, useRef, useState } from 'react';

function FadeInSection({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.25 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
}

export default function CallToActionCard() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6" id="contact">
      <FadeInSection>
        <div className="relative rounded-3xl border border-white/10 bg-neutral-900/60 bg-grid-pattern p-10 md:p-16 lg:p-24 overflow-hidden backdrop-blur-xl">
          {/* Radial orange glow in top right */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-8 relative z-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Get Started</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
              Let's improve your manufacturing workflow.
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              Tell us where your engineering process slows down. We'll identify where AI can automate the work, reduce repetitive tasks, and create measurable impact.
            </p>
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a className="px-6 py-3.5 rounded-md bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors" href="mailto:contact@aailabs.com">
                Book a process audit
              </a>
              <a className="px-6 py-3.5 rounded-md border border-zinc-700 bg-transparent text-white font-medium text-sm hover:border-zinc-500 transition-colors" href="#talk">
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

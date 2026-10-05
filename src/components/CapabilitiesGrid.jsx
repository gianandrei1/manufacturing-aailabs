import { useEffect, useRef, useState } from 'react';

function FadeInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.15 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
}

export default function CapabilitiesGrid() {
  return (
    <section className="py-24 border-t border-zinc-900 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-zinc-600"></span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">What we can offer</h2>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl border border-white/10 divide-y md:divide-y-0 lg:divide-x divide-white/10 bg-neutral-900/40 overflow-hidden">
            {/* Offer 01 */}
            <div className="p-8 md:p-10 relative group hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">01</span>
                <span className="text-zinc-600 font-mono text-sm">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Engineering Automation</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Automate repetitive engineering and manufacturing operations.
              </p>
            </div>
            {/* Offer 02 */}
            <div className="p-8 md:p-10 relative group hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">02</span>
                <span className="text-zinc-600 font-mono text-sm">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Drawing Intelligence</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Extract structured information from technical drawings and documents.
              </p>
            </div>
            {/* Offer 03 */}
            <div className="p-8 md:p-10 relative group hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">03</span>
                <span className="text-zinc-600 font-mono text-sm">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Computer Vision</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Detect and analyze manufacturing features and visual information.
              </p>
            </div>
            {/* Offer 04 */}
            <div className="p-8 md:p-10 relative group hover:bg-white/5 transition-colors border-t border-white/10">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">04</span>
                <span className="text-zinc-600 font-mono text-sm">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">CAD &amp; Geometry Intelligence</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Analyze CAD geometry, dimensions, and manufacturing features.
              </p>
            </div>
            {/* Offer 05 */}
            <div className="p-8 md:p-10 relative group hover:bg-white/5 transition-colors border-t border-white/10">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">05</span>
                <span className="text-zinc-600 font-mono text-sm">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">AI-powered Quoting</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Automate drawing analysis and information extraction for faster quoting.
              </p>
            </div>
            {/* Offer 06 */}
            <div className="p-8 md:p-10 relative group hover:bg-white/5 transition-colors border-t border-white/10">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">06</span>
                <span className="text-zinc-600 font-mono text-sm">+</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Custom AI Solutions</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Build AI solutions around existing workflows, data, and infrastructure.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

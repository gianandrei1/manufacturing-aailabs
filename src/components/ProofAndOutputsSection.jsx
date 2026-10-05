import { useEffect, useRef, useState } from 'react';

function FadeInSection({ children, className = "" }) {
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
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
}

export default function ProofAndOutputsSection() {
  return (
    <section className="py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-zinc-600"></span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Proof</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
              Real problems. AI solutions.<br />Measurable value.
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">Outputs from real AAI Labs manufacturing and engineering work.</p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: CAD Error Detection */}
          <FadeInSection className="h-full">
            <div className="h-full rounded-xl border border-zinc-800 bg-[#0a0a0c] p-6 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-black aspect-[16/9] flex items-center justify-center p-4">
                {/* Glow gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-cyan-500/10 pointer-events-none"></div>
                {/* Blueprint visual schematic */}
                <svg className="w-full h-full text-zinc-400 font-mono text-[8px]" fill="none" viewBox="0 0 280 150">
                  <rect height="120" stroke="#333" strokeWidth="1" width="240" x="20" y="15"></rect>
                  <path d="M 40 30 L 220 30 L 220 110 L 140 110 L 140 130 L 40 130 Z" stroke="#38bdf8" strokeWidth="1.5"></path>
                  {/* Detected error marker */}
                  <circle cx="140" cy="110" fill="rgba(239,68,68,0.2)" r="10" stroke="#ef4444" strokeWidth="2"></circle>
                  <line stroke="#ef4444" strokeWidth="1.5" x1="140" x2="140" y1="100" y2="120"></line>
                  <line stroke="#ef4444" strokeWidth="1.5" x1="130" x2="150" y1="110" y2="110"></line>
                  <text fill="#ef4444" fontWeight="bold" x="160" y="112">OPEN CONTOUR DETECTED</text>
                </svg>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Drawing &amp; CAD Analysis</div>
              <h3 className="text-2xl md:text-3xl font-light text-white">Automatic CAD error detection</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Detect common geometry errors before they reach production.
              </p>
            </div>
          </FadeInSection>
          {/* Card 2: Nesting Optimisation */}
          <FadeInSection className="h-full">
            <div className="h-full rounded-xl border border-zinc-800 bg-[#0a0a0c] p-6 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-black aspect-[16/9] flex items-center justify-center p-4">
                {/* Glow gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 via-transparent to-emerald-500/10 pointer-events-none"></div>
                {/* Nesting sheet diagram */}
                <svg className="w-full h-full stroke-zinc-400" fill="none" viewBox="0 0 280 150">
                  <rect height="120" stroke="#52525b" strokeWidth="1.2" width="250" x="15" y="15"></rect>
                  {/* Nested irregular polygons */}
                  <polygon fill="rgba(249,115,22,0.1)" points="25,25 75,25 60,65 25,65" stroke="#f97316" strokeWidth="1.2"></polygon>
                  <polygon points="80,25 140,25 120,60 80,45" stroke="#ffffff" strokeWidth="1.2"></polygon>
                  <polygon points="145,25 210,25 190,70 145,45" stroke="#ffffff" strokeWidth="1.2"></polygon>
                  <polygon fill="rgba(56,189,248,0.1)" points="215,25 255,25 255,75 200,75" stroke="#38bdf8" strokeWidth="1.2"></polygon>
                  <polygon points="25,75 90,75 80,125 25,125" stroke="#ffffff" strokeWidth="1.2"></polygon>
                  <polygon fill="rgba(74,222,128,0.1)" points="95,70 160,70 140,125 105,125" stroke="#4ade80" strokeWidth="1.2"></polygon>
                  <polygon points="165,75 220,75 220,125 150,125" stroke="#ffffff" strokeWidth="1.2"></polygon>
                </svg>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Material Utilisation</div>
              <h3 className="text-2xl md:text-3xl font-light text-white">Nesting &amp; remnant optimisation</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                AI-optimized layout of sheets, profiles, and other shapes.
              </p>
            </div>
          </FadeInSection>
          {/* Card 3: CAD Operations Automation */}
          <FadeInSection className="h-full">
            <div className="h-full rounded-xl border border-zinc-800 bg-[#0a0a0c] p-6 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-black aspect-[16/9] p-4 flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-purple-500/10 pointer-events-none"></div>
                {/* Tabular CAD processing visual */}
                <div className="relative font-mono text-[9px] w-full space-y-1.5">
                  <div className="flex justify-between border-b border-zinc-800 pb-1 text-zinc-500 font-semibold">
                    <span>STEP</span>
                    <span>PROGRAM</span>
                    <span>STATUS</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-900">
                    <span>08-12</span>
                    <span>PRG-401 Alpha</span>
                    <span className="text-emerald-400">PASSED</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-900">
                    <span>08-16</span>
                    <span>PRG-404 Beta</span>
                    <span className="text-emerald-400">PASSED</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5 border-b border-zinc-900">
                    <span>08-19</span>
                    <span>PRG-406 Echo</span>
                    <span className="text-orange-400">RUNNING</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 py-0.5">
                    <span>08-24</span>
                    <span>PRG-412 Zeta</span>
                    <span className="text-zinc-500">QUEUED</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Engineering Automation</div>
              <h3 className="text-2xl md:text-3xl font-light text-white">CAD operations automation</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Repetitive transformations, cuts, sections, and exports in one click.
              </p>
            </div>
          </FadeInSection>
          {/* Card 4: Kerf Pattern Application */}
          <FadeInSection className="h-full">
            <div className="h-full rounded-xl border border-zinc-800 bg-[#0a0a0c] p-6 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-black aspect-[16/9] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 via-transparent to-amber-500/10 pointer-events-none"></div>
                {/* Kerf pattern simulation */}
                <svg className="w-full h-full stroke-zinc-400" fill="none" viewBox="0 0 280 140">
                  {/* Repeated parametric kerf slits */}
                  <path d="M 20 20 L 260 20 M 20 120 L 260 120" stroke="#71717a" strokeWidth="1.5"></path>
                  <g stroke="#f97316" strokeWidth="1.2">
                    <line x1="40" x2="40" y1="20" y2="80"></line>
                    <line x1="55" x2="55" y1="60" y2="120"></line>
                    <line x1="70" x2="70" y1="20" y2="80"></line>
                    <line x1="85" x2="85" y1="60" y2="120"></line>
                    <line x1="100" x2="100" y1="20" y2="80"></line>
                    <line x1="115" x2="115" y1="60" y2="120"></line>
                    <line x1="130" x2="130" y1="20" y2="80"></line>
                    <line x1="145" x2="145" y1="60" y2="120"></line>
                    <line x1="160" x2="160" y1="20" y2="80"></line>
                    <line x1="175" x2="175" y1="60" y2="120"></line>
                    <line x1="190" x2="190" y1="20" y2="80"></line>
                    <line x1="205" x2="205" y1="60" y2="120"></line>
                    <line x1="220" x2="220" y1="20" y2="80"></line>
                    <line x1="235" x2="235" y1="60" y2="120"></line>
                  </g>
                </svg>
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Geometry Processing</div>
              <h3 className="text-2xl md:text-3xl font-light text-white">Kerf pattern application</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Automatic kerf pattern application with adjustable density.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

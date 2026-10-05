export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-8">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] text-white">
              AI-powered engineering for manufacturing
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
              AAI Labs develops AI solutions that automate engineering workflows, analyze technical drawings and CAD data, improve quoting, and reduce repetitive manufacturing work.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a className="px-6 py-3.5 rounded-md bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors" href="#audit">
                Book a process audit
              </a>
              <a className="px-6 py-3.5 rounded-md border border-zinc-700 bg-transparent text-white font-medium text-sm hover:border-zinc-500 transition-colors" href="#solutions">
                Explore solutions
              </a>
            </div>
          </div>
          {/* Right Column CAD Schematic Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl border border-zinc-800 bg-[#0d0d0f] p-6 md:p-8 shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition-transform duration-500">
              {/* Glow accent behind drawing preview */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Blueprint UI Card Header */}
              <div className="border border-zinc-800/80 rounded-lg bg-black/90 p-4 mb-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="text-orange-400">PROJECT: AI_POWERED_ENGINEERING</span>

              </div>
              {/* Blueprint Vector Drawing Simulation */}
              <div className="relative w-full aspect-[4/3] rounded-lg border border-zinc-800 bg-[#07090e] p-4 overflow-hidden flex flex-col justify-between">
                {/* Measurement overlays */}

                {/* Schematic Diagram (SVG) */}
                <svg className="w-full h-full" fill="none" viewBox="0 0 320 220">
                  {/* Grid */}
                  <defs>
                    <pattern height="20" id="hero-cad-grid" patternUnits="userSpaceOnUse" width="20">
                      <line stroke="rgba(255,255,255,0.03)" x1="0" x2="20" y1="0" y2="0"></line>
                      <line stroke="rgba(255,255,255,0.03)" x1="0" x2="0" y1="0" y2="20"></line>
                    </pattern>
                  </defs>
                  <rect fill="url(#hero-cad-grid)" height="100%" width="100%"></rect>
                  {/* Outer bounding box */}
                  <rect height="190" stroke="#ff7324" strokeDasharray="3 3" strokeWidth="1.5" width="290" x="30" y="10"></rect>


                  {/* Main Mechanical Geometry */}
                  <polygon fill="rgba(255,255,255,0.02)" points="55,45 220,45 265,90 265,165 55,165" stroke="#ffffff" strokeWidth="1.75"></polygon>
                  <circle cx="110" cy="105" r="32" stroke="#ffffff" strokeWidth="1.5"></circle>
                  <circle cx="110" cy="105" r="14" stroke="#ffffff" strokeDasharray="2 2" strokeWidth="1"></circle>
                  <rect height="40" stroke="#ffffff" strokeWidth="1.25" width="55" x="180" y="85"></rect>
                  {/* Dimension Lines & Annotations */}
                  <line stroke="#ff7324" strokeWidth="1" x1="55" x2="220" y1="35" y2="35"></line>
                  <line stroke="#ff7324" strokeWidth="1" x1="55" x2="55" y1="32" y2="38"></line>
                  <line stroke="#ff7324" strokeWidth="1" x1="220" x2="220" y1="32" y2="38"></line>
                  <text fill="#ff7324" fontFamily="monospace" fontSize="8" textAnchor="middle" x="125" y="32">165.00 mm</text>
                  <line stroke="#ff7324" strokeWidth="1" x1="275" x2="275" y1="90" y2="165"></line>
                  <line stroke="#ff7324" strokeWidth="1" x1="272" x2="278" y1="90" y2="90"></line>
                  <line stroke="#ff7324" strokeWidth="1" x1="272" x2="278" y1="165" y2="165"></line>
                  <text fill="#ff7324" fontFamily="monospace" fontSize="8" x="280" y="130">75.00 mm</text>
                  {/* Bounding identification tags removed */}
                </svg>
                {/* Badges underneath drawing */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[10px] font-mono">
                  <div className="px-2 py-0.5 rounded  text-orange-400 border border-orange-500/20">DRAWING ANALYSIS</div>
                  <div className="px-2 py-0.5 rounded  text-[#ff7324] border border-cyan-500/20">EXTRACTION: 99.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

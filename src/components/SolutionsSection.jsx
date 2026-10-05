import { useEffect, useRef, useState } from 'react';

function FadeInCard({ children }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
        }`}
    >
      {children}
    </div>
  );
}

const quoteData = [
  { cx: 45, cy: 45, dim: "240 × 180 × 12 mm", feat: "3 Cutouts, 4 Chamfers", cls: "P-401 Heavy Stamping", prog: "88%" },
  { cx: 70, cy: 30, dim: "120 × 90 × 5 mm", feat: "1 Cutout, 2 Holes", cls: "P-102 Light Stamping", prog: "45%" },
  { cx: 30, cy: 70, dim: "300 × 250 × 15 mm", feat: "5 Cutouts, 8 Holes", cls: "P-605 Structural", prog: "72%" },
  { cx: 55, cy: 65, dim: "180 × 140 × 8 mm", feat: "2 Cutouts, 6 Chamfers", cls: "P-304 Medium Stamping", prog: "100%" }
];

const blueprintShapes = [
  <g key="0">
    <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" strokeWidth="1.2"></polygon>
    <line strokeWidth="1.2" x1="50" x2="50" y1="15" y2="55"></line>
    <line strokeWidth="1.2" x1="50" x2="85" y1="55" y2="35"></line>
    <line strokeWidth="1.2" x1="50" x2="15" y1="55" y2="35"></line>
    <line strokeWidth="1.2" x1="50" x2="50" y1="55" y2="95"></line>
    <polygon fill="rgba(255,115,36,0.15)" points="50,30 70,42 50,54 30,42" stroke="#ff7324" strokeWidth="0.8"></polygon>
  </g>,
  <g key="1">
    <polygon points="50,15 85,75 15,75" strokeWidth="1.2"></polygon>
    <line strokeWidth="1.2" x1="50" y1="15" x2="40" y2="60"></line>
    <line strokeWidth="1.2" x1="15" y1="75" x2="40" y2="60"></line>
    <line strokeWidth="1.2" x1="85" y1="75" x2="40" y2="60"></line>
    <polygon fill="rgba(255,115,36,0.15)" points="50,35 70,70 30,70" stroke="#ff7324" strokeWidth="0.8"></polygon>
  </g>,
  <g key="2">
    <ellipse cx="50" cy="30" rx="30" ry="12" strokeWidth="1.2"></ellipse>
    <line strokeWidth="1.2" x1="20" y1="30" x2="20" y2="70"></line>
    <line strokeWidth="1.2" x1="80" y1="30" x2="80" y2="70"></line>
    <path d="M 20 70 A 30 12 0 0 0 80 70" strokeWidth="1.2"></path>
    <polygon fill="rgba(255,115,36,0.15)" points="50,18 70,30 50,42 30,30" stroke="#ff7324" strokeWidth="0.8"></polygon>
  </g>,
  <g key="3">
    <polygon points="50,10 90,50 50,90 10,50" strokeWidth="1.2"></polygon>
    <line strokeWidth="1.2" x1="10" y1="50" x2="90" y2="50"></line>
    <line strokeWidth="1.2" x1="50" y1="10" x2="35" y2="50"></line>
    <line strokeWidth="1.2" x1="35" y1="50" x2="50" y2="90"></line>
    <polygon fill="rgba(255,115,36,0.15)" points="50,30 70,50 50,70 30,50" stroke="#ff7324" strokeWidth="0.8"></polygon>
  </g>,
  <g key="4">
    <polygon points="35,15 65,15 80,30 80,80 50,95 20,80 20,30" strokeWidth="1.2"></polygon>
    <line strokeWidth="1.2" x1="20" y1="30" x2="50" y2="45"></line>
    <line strokeWidth="1.2" x1="80" y1="30" x2="50" y2="45"></line>
    <line strokeWidth="1.2" x1="50" y1="45" x2="50" y2="95"></line>
    <line strokeWidth="1.2" x1="50" y1="45" x2="50" y2="15"></line>
    <polygon fill="rgba(255,115,36,0.15)" points="35,25 65,25 50,40" stroke="#ff7324" strokeWidth="0.8"></polygon>
  </g>
];

const bpProgress = [
  [ "100%", "80%", "60%", "100%" ], 
  [ "100%", "45%", "25%", "85%" ], 
  [ "100%", "60%", "90%", "65%" ], 
  [ "100%", "30%", "40%", "95%" ], 
  [ "100%", "95%", "80%", "100%" ]  
];

export default function SolutionsSection() {
  const [quoteStep, setQuoteStep] = useState(0);
  const [blueprintStep, setBlueprintStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteStep((prev) => (prev + 1) % quoteData.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bpInterval = setInterval(() => {
      setBlueprintStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(bpInterval);
  }, []);

  const currentQuote = quoteData[quoteStep];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="solutions">
      {/* Section Eyebrow & Header */}
      <FadeInCard>
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-zinc-600"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Featured Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
            AI solutions for manufacturing
          </h2>
        </div>
      </FadeInCard>
      {/* Solutions 3-Stacked Deep Cards */}
      <div className="space-y-12">
        {/* Card 01: Quoting */}
        <FadeInCard>
          <article className="rounded-3xl border border-zinc-800/90 bg-[#0a0a0c] p-8 md:p-14 lg:p-16 hover:border-zinc-700 transition-all duration-300 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">Quoting</h3>
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl text-zinc-200 font-medium">AI-powered quoting and feature extraction</h4>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
                    AI analyzes technical drawings and extracts the information required for faster, more consistent quoting.
                  </p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Drawing Analysis</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Dimensions</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Feature Extraction</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Part Classification</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Manufacturing Information</span>
                </div>
                <div className="pt-4">
                  <a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#quoting">
                    Explore Quoting <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              {/* Graphic 01: Schematic part inspection */}
              <div className="lg:col-span-6 bg-black rounded-2xl border border-zinc-800/80 p-8 flex flex-col justify-center min-h-[300px]">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3 text-xs font-mono text-zinc-500">
                  <span>SIMULATION // PART_ESTIMATE</span>
                  <span className="text-orange-500">READY</span>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  {/* Vector part with CAD markers */}
                  <div className="relative aspect-square border border-zinc-800 bg-[#050507] rounded-lg p-3 flex items-center justify-center">
                    <svg className="w-full h-full stroke-zinc-400" fill="none" viewBox="0 0 100 100">
                      <polygon points="15,15 85,15 85,60 65,85 15,85" strokeWidth="1.5"></polygon>
                      <circle cx={currentQuote.cx} cy={currentQuote.cy} r="10" stroke="#f97316" strokeWidth="1.5" className="transition-all duration-1000 ease-in-out"></circle>
                      <line stroke="#71717a" strokeWidth="0.75" x1="8" x2="8" y1="15" y2="85"></line>
                      <line stroke="#71717a" x1="5" x2="11" y1="15" y2="15"></line>
                      <line stroke="#71717a" x1="5" x2="11" y1="85" y2="85"></line>
                    </svg>
                  </div>
                  {/* Data bars */}
                  <div className="space-y-3 font-mono text-[11px]">
                    <div>
                      <div className="text-zinc-500 text-[10px]">DIMENSIONS</div>
                      <div className="text-zinc-200 transition-all duration-500">{currentQuote.dim}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px]">FEATURES</div>
                      <div className="text-zinc-200 transition-all duration-500">{currentQuote.feat}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px]">PART CLASS</div>
                      <div className="text-orange-400 transition-all duration-500">{currentQuote.cls}</div>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full transition-all duration-1000 ease-in-out" style={{ width: currentQuote.prog }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </FadeInCard>
        {/* Card 02: Arginta */}
        <FadeInCard>
          <article className="rounded-3xl border border-zinc-800/90 bg-[#0a0a0c] p-8 md:p-14 lg:p-16 hover:border-zinc-700 transition-all duration-300 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Graphic 02: Error Detection / Inspection */}
              <div className="lg:col-span-6 order-last lg:order-first bg-black rounded-2xl border border-zinc-800/80 p-8 min-h-[300px] flex flex-col justify-center">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-6">
                  <span>CAMERA FEED // IN_PROGRESS</span>
                  <span className="text-red-500 animate-pulse">DEFECT DETECTED</span>
                </div>

                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden flex items-center justify-center">
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEgMGwwIDIwbDE5IDBMMjAgMEwxIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-30"></div>

                  {/* Metal part being inspected */}
                  <style>{`
                    @keyframes aim-target {
                      0%, 15% { transform: translate(-50%, -50%) translateX(0px); }
                      30%, 45% { transform: translate(-50%, -50%) translateX(56px); }
                      60%, 85% { transform: translate(-50%, -50%) translateX(112px); }
                      100% { transform: translate(-50%, -50%) translateX(0px); }
                    }
                  `}</style>
                  <div className="relative z-10 w-48 h-24 bg-zinc-800 rounded shadow-2xl border border-zinc-700 flex items-center justify-center gap-8">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-600"></div>
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-600"></div>
                    {/* Defect hole */}
                    <div className="w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                    </div>

                    {/* Animated target bounding box and crosshairs */}
                    <div className="absolute top-1/2 left-[40px] w-12 h-12 pointer-events-none" style={{ animation: "aim-target 4s infinite ease-in-out" }}>
                      <div className="absolute inset-0 border-2 border-red-500/80 bg-red-500/10 rounded-sm shadow-[0_0_15px_rgba(239,68,68,0.3)]"></div>
                      <div className="absolute -top-2 left-1/2 w-0.5 h-2 bg-red-500 -translate-x-1/2"></div>
                      <div className="absolute -bottom-2 left-1/2 w-0.5 h-2 bg-red-500 -translate-x-1/2"></div>
                      <div className="absolute top-1/2 -left-2 w-2 h-0.5 bg-red-500 -translate-y-1/2"></div>
                      <div className="absolute top-1/2 -right-2 w-2 h-0.5 bg-red-500 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Scanning overlay line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
              <div className="lg:col-span-6 space-y-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">Error Detection</h3>
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl text-zinc-200 font-medium">Automated visual inspection and quality control</h4>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
                    AI-powered error detection identifies defects, anomalies, and inconsistencies in manufactured parts instantly with high precision.
                  </p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Quality Control</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Visual Inspection</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Defect Analysis</span>
                </div>
                <div className="pt-4">
                  <a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-red-400 transition-colors" href="#error-detection">
                    Explore Error Detection <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </FadeInCard>
        {/* Card 03: Blueprint */}
        <FadeInCard>
          <article className="rounded-3xl border border-zinc-800/90 bg-[#0a0a0c] p-8 md:p-14 lg:p-16 hover:border-zinc-700 transition-all duration-300 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">Blueprints Streamline</h3>
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl text-zinc-200 font-medium">From engineering drawings and CAD to structured data</h4>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
                    Blueprints Streamline processes engineering drawings and CAD data and turns them into structured information for downstream manufacturing workflows.
                  </p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Drawing Understanding</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">CAD / STEP Processing</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Geometry Analytics</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Feature Extraction</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-zinc-800 bg-zinc-900/60 text-zinc-300">Structured Manufacturing Data</span>
                </div>
                <div className="pt-4">
                  <a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#blueprint">
                    Explore Blueprints Streamline <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              {/* Graphic 03: 3D Isometric Wireframe Cube & Data Structures */}
              <div className="lg:col-span-6 bg-black rounded-2xl border border-zinc-800/80 p-8 min-h-[300px] flex items-center justify-between gap-8">
                {/* Wireframe Cube / Blueprint */}
                <div className="w-1/2 flex items-center justify-center">
                  <div className="relative w-full max-w-[160px] aspect-square rounded-lg border border-zinc-800 bg-[#050507] flex items-center justify-center overflow-hidden">
                    {/* Grid Pattern */}
                    <svg className="absolute inset-0 w-full h-full" fill="none">
                      <pattern id="bp-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="16" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <line x1="0" y1="0" x2="0" y2="16" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#bp-grid)" />
                    </svg>
                    {/* The animated shapes */}
                    <svg className="w-3/4 h-3/4 stroke-[#ff7324] transition-all duration-1000 ease-in-out relative z-10" fill="none" viewBox="0 0 100 100">
                      {blueprintShapes[blueprintStep]}
                    </svg>
                  </div>
                </div>
                {/* Structured data tiers */}
                <div className="w-1/2 space-y-2.5 font-mono text-[10px]">
                  <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800">
                    <div className="text-zinc-500 text-[9px]">STEP / CAD FILE</div>
                    <div className="h-1 w-full bg-zinc-800 mt-1.5 rounded overflow-hidden">
                      <div className="bg-[#ff7324] h-full transition-all duration-1000 ease-in-out" style={{ width: bpProgress[blueprintStep][0] }}></div>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800">
                    <div className="text-zinc-500 text-[9px]">GEOMETRY</div>
                    <div className="h-1 w-full bg-zinc-800 mt-1.5 rounded overflow-hidden">
                      <div className="bg-[#ff7324] h-full transition-all duration-1000 ease-in-out" style={{ width: bpProgress[blueprintStep][1] }}></div>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800">
                    <div className="text-zinc-500 text-[9px]">FEATURES</div>
                    <div className="h-1 w-full bg-zinc-800 mt-1.5 rounded overflow-hidden">
                      <div className="bg-[#ff7324] h-full transition-all duration-1000 ease-in-out" style={{ width: bpProgress[blueprintStep][2] }}></div>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-zinc-900/80 border border-zinc-800">
                    <div className="text-zinc-500 text-[9px]">STRUCTURED DATA</div>
                    <div className="h-1 w-full bg-zinc-800 mt-1.5 rounded overflow-hidden">
                      <div className="bg-[#ff7324] h-full transition-all duration-1000 ease-in-out" style={{ width: bpProgress[blueprintStep][3] }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </FadeInCard>
      </div>
    </section>
  );
}

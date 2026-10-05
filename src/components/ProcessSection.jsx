import { useEffect, useRef, useState } from 'react';

function FadeInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.2 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
}

export default function ProcessSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start animation when the section is nicely visible (e.g., 70% down the screen)
      const startTrigger = windowHeight * 0.50;

      // Spread the 4 steps over a reasonable scroll distance (e.g. 60% of viewport height)
      // This means as you keep scrolling down, each step activates one by one.
      const totalScrollableDistance = windowHeight * 0.6;
      const scrolled = startTrigger - rect.top;

      let currentProgress = scrolled / totalScrollableDistance;
      currentProgress = Math.max(0, Math.min(1, currentProgress));

      let index = -1;
      if (currentProgress > 0) index = 0; // 1st step
      if (currentProgress >= 0.25) index = 1; // 2nd step
      if (currentProgress >= 0.50) index = 2; // 3rd step
      if (currentProgress >= 0.75) index = 3; // 4th step

      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { num: "01", title: "Understand", desc: "We analyze your manufacturing workflow, data, tools, and bottlenecks." },
    { num: "02", title: "Design", desc: "We identify where AI can create measurable improvements and design the right solution around your workflow." },
    { num: "03", title: "Build", desc: "We develop, test, and validate the solution using real manufacturing data." },
    { num: "04", title: "Integrate", desc: "We integrate the solution into the existing engineering and manufacturing environment." }
  ];

  // Calculate the line width in 25% discrete chunks based on active index
  const lineWidth = activeIndex >= 0 ? `calc(${((activeIndex + 1) / steps.length) * 100}% - 16px)` : '0%';

  return (
    <section ref={containerRef} className="py-32 border-t border-zinc-900 bg-[#030303] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <FadeInSection>
          <div className="mb-20 relative z-10 bg-[#030303] inline-block pr-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-zinc-600"></span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">How we work</h2>
          </div>
        </FadeInSection>

        {/* 4 Step Pipeline Grid */}
        <div className="relative">
          {/* Continuous Connection Line on desktop (Background) */}
          <div className="hidden lg:block absolute top-[11px] left-2 right-2 h-[1px] bg-zinc-800 z-0"></div>

          {/* Active Highlighted Line on desktop */}
          <div
            className="hidden lg:block absolute top-[11px] left-2 h-[1px] bg-white z-0 transition-all duration-500 ease-out"
            style={{ width: lineWidth }}
          ></div>

          {/* Gliding Spearhead Circle */}
          <div
            className={`hidden lg:flex absolute top-[11px] -translate-y-1/2 translate-x-[-50%] w-5 h-5 rounded-full items-center justify-center ring-4 ring-[#030303] bg-white transition-all duration-500 ease-out z-20 ${activeIndex >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ left: `calc(0.5rem + ${lineWidth})` }}
          >
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => {
              const isActive = index <= activeIndex;
              return (
                <div key={index} className="space-y-4">
                  <div className="flex items-center bg-[#030303] w-max px-3 -ml-3 relative z-10">
                    <span className={`font-mono text-xs uppercase transition-colors duration-500 ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-light transition-colors duration-500 ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ${isActive ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

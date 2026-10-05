import { useEffect, useRef, useState } from 'react';

function FadeInSection({ children, delay = 0 }) {
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
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    let animationFrame = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

function WorkflowStep({ label, icon, isActive = false, isLineActive = false, isLast = false, compact = false, activeColor = "orange" }) {
  const colorStyles = {
    orange: 'bg-orange-500/20 border-orange-500/50 text-orange-400 shadow-[0_0_15px_rgba(255,92,0,0.2)]',
    emerald: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
    rose: 'bg-rose-500/20 border-rose-500/50 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.2)]',
  };
  
  const activeStyle = colorStyles[activeColor] || colorStyles.orange;

  return (
    <div className="flex items-center">
      <div className={`flex flex-col items-center gap-2 md:gap-3`}>
        <div className={`${compact ? 'w-10 h-10 md:w-12 md:h-12' : 'w-10 h-10 md:w-14 md:h-14'} rounded-xl flex items-center justify-center border transition-all duration-500 ${isActive ? `${activeStyle} scale-110` : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 scale-100'}`}>
          <div className={`${compact ? 'w-5 h-5 md:w-6 md:h-6' : 'w-5 h-5 md:w-6 md:h-6'} flex items-center justify-center`}>
            {icon}
          </div>
        </div>
        <span className={`${compact ? 'text-[9px] md:text-[10px] w-14 md:w-16' : 'text-[9px] md:text-[10px] w-16 md:w-20'} font-mono text-zinc-400 uppercase tracking-widest text-center leading-tight`}>
          {label}
        </span>
      </div>
      {!isLast && (
        <div className={`relative ${compact ? 'w-4 md:w-8 mx-1 md:mx-3 -translate-y-4 md:-translate-y-5' : 'w-8 md:w-16 mx-2 md:mx-4 -translate-y-4'} h-px transition-colors duration-500 ${isLineActive ? 'bg-orange-500/30' : 'bg-zinc-800'}`}>
          {isLineActive && (
            <div className="absolute top-0 left-0 h-full bg-orange-400 shadow-[0_0_8px_rgba(255,92,0,0.8)] animate-[scan_1s_ease-in-out_infinite]" style={{ width: '50%' }}></div>
          )}
        </div>
      )}
    </div>
  );
}

function AnimatedWorkflow({ steps, compact = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 1200); // 1.2s per step
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex items-center justify-center w-full">
      {steps.map((step, idx) => (
        <WorkflowStep 
          key={idx}
          label={step.label}
          icon={step.icon}
          isActive={idx === activeIndex}
          isLineActive={idx === activeIndex}
          isLast={idx === steps.length - 1}
          compact={compact}
          activeColor={step.activeColor}
        />
      ))}
    </div>
  );
}

export default function AgentsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-b border-zinc-900 relative" id="agents">
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <FadeInSection>
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-zinc-600"></span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Autonomous Execution</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            AI Agents for Manufacturing
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            AI agents that automate manufacturing workflows — from processing incoming orders to detecting errors and managing order data.
          </p>
        </div>
      </FadeInSection>

      <div className="flex flex-col gap-8">
        
        {/* Featured Agent: Man-Order-Intake */}
        <FadeInSection delay={100}>
          <div className="group relative rounded-3xl border border-zinc-800/80 bg-[#0a0a0c] overflow-hidden hover:border-zinc-700 transition-colors shadow-2xl">
            {/* Subtle gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 lg:p-16 relative z-10">
              
              {/* Left Content */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">Man-Order-Intake Agent</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
                  Automatically processes incoming orders from email and transfers the relevant order information into the ERP system.
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800/80">
                  <div>
                    <div className="text-2xl md:text-4xl font-light text-white mb-1"><AnimatedCounter value={1000} />+</div>
                    <div className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">Orders Processed</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-4xl font-light text-white mb-1">0</div>
                    <div className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">Errors</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-4xl font-light text-orange-400 mb-1">€1</div>
                    <div className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">Per Order</div>
                  </div>
                </div>
              </div>

              {/* Right Visual Workflow */}
              <div className="lg:col-span-7 bg-[#050507] rounded-2xl border border-zinc-800/50 p-8 md:p-12 flex flex-col justify-center min-h-[300px] relative overflow-hidden group-hover:border-zinc-700/50 transition-colors">
                <div className="flex items-center justify-center w-full h-full pt-6 overflow-hidden pb-4">
                  <AnimatedWorkflow compact={true} steps={[
                    { label: "Incoming Email", icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> },
                    { label: "AI Agent", icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> },
                    { label: "ERP System", icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg> },
                    { label: "Processed Order", activeColor: "emerald", icon: <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> }
                  ]} />
                </div>
              </div>

            </div>
          </div>
        </FadeInSection>

        {/* Supporting Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Supporting Agent: Freor */}
          <FadeInSection delay={200}>
            <div className="group relative rounded-3xl border border-zinc-800/80 bg-[#0a0a0c] p-8 md:p-10 hover:border-zinc-700 transition-colors h-full flex flex-col shadow-xl">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">Freor Agent</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-10 min-h-[48px]">
                Automatically checks the provided SharePoint data and identifies errors before they move further into the manufacturing workflow.
              </p>
              
              <div className="mt-auto flex items-center justify-center py-4 transition-colors">
                <AnimatedWorkflow compact={true} steps={[
                  { label: "SharePoint", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> },
                  { label: "AI Agent", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> },
                  { label: "Error Detection", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> },
                  { label: "Issues Identified", activeColor: "rose", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> }
                ]} />
              </div>
            </div>
          </FadeInSection>

          {/* Supporting Agent: Elinta */}
          <FadeInSection delay={300}>
            <div className="group relative rounded-3xl border border-zinc-800/80 bg-[#0a0a0c] p-8 md:p-10 hover:border-zinc-700 transition-colors h-full flex flex-col shadow-xl">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">ElintaAgent</h3>
              <p className="text-zinc-400 text-base leading-relaxed mb-10 min-h-[48px]">
                Automates order management using information stored in Excel files.
              </p>
              
              <div className="mt-auto flex items-center justify-center py-4 transition-colors">
                <AnimatedWorkflow compact={true} steps={[
                  { label: "Excel", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> },
                  { label: "AI Agent", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> },
                  { label: "Order Processing", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> },
                  { label: "Managed Orders", activeColor: "emerald", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> }
                ]} />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

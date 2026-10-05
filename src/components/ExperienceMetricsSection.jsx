import { useEffect, useState, useRef } from 'react';

function AnimatedNumber({ value, suffix = "%", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // ADJUST ANIMATION SPEED HERE:
  // This is the number of milliseconds it takes to count up by 1.
  // Smaller number = faster animation. Larger number = slower animation.
  const speedMsPerIncrement = 25;

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Start animation
        startTime = null;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          // Increment by 1 every N milliseconds to count up smoothly
          const currentCount = Math.floor(elapsed / speedMsPerIncrement);

          if (currentCount < value) {
            setCount(currentCount);
            animationFrame = requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };
        animationFrame = requestAnimationFrame(animate);
        
        // Disconnect the observer so it only animates once per refresh
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

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

export default function ExperienceMetricsSection() {
  return (
    <section className="py-24 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-zinc-600"></span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">Manufacturing in practice</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">Figures from AAI Labs manufacturing engagements.</p>
          </div>
        </FadeInSection>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="pt-6 border-t border-zinc-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">Up to</div>
            <div className="text-6xl md:text-8xl font-thin tracking-tight text-white mb-4">
              <AnimatedNumber value={60} />
            </div>
            <div className="h-0.5 w-12 bg-zinc-700 mb-4"></div>
            <p className="text-zinc-400 text-base md:text-lg">shorter modeling process</p>
          </div>
          <div className="pt-6 border-t border-zinc-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">Up to</div>
            <div className="text-6xl md:text-8xl font-thin tracking-tight text-white mb-4">
              <AnimatedNumber value={80} />
            </div>
            <div className="h-0.5 w-12 bg-zinc-700 mb-4"></div>
            <p className="text-zinc-400 text-base md:text-lg">fewer manual tasks</p>
          </div>
          <div className="pt-6 border-t border-zinc-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">Up to</div>
            <div className="text-6xl md:text-8xl font-thin tracking-tight text-white mb-4">
              <AnimatedNumber value={90} />
            </div>
            <div className="h-0.5 w-12 bg-zinc-700 mb-4"></div>
            <p className="text-zinc-400 text-base md:text-lg">accuracy on common errors</p>
          </div>
          <div className="pt-6 border-t border-zinc-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">Up to</div>
            <div className="text-6xl md:text-8xl font-thin tracking-tight text-white mb-4">
              <AnimatedNumber value={10} />
            </div>
            <div className="h-0.5 w-12 bg-zinc-700 mb-4"></div>
            <p className="text-zinc-400 text-base md:text-lg">better material utilization</p>
          </div>
        </div>
      </div>
    </section>
  );
}

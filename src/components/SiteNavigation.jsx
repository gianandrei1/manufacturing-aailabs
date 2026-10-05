export default function SiteNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center">
        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-zinc-400 font-normal">
          <a className="hover:text-white transition-colors" href="#main">Main</a>
          <a className="hover:text-white transition-colors" href="#services">Services</a>
          <a className="hover:text-white transition-colors" href="#cases">Cases</a>
          <a className="hover:text-white transition-colors" href="#research">Research</a>
          <a className="hover:text-white transition-colors" href="#team">Team</a>
          <a className="hover:text-white transition-colors" href="#company">Company</a>
        </nav>
      </div>
    </header>
  );
}

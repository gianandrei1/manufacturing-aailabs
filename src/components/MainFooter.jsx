export default function MainFooter() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-8 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>UAB Taikomasis dirbtinis intelektas © 2026</div>
          <a href="https://www.aai-labs.com/en/contact" className="hover:text-white transition-colors">
            hello@aai-labs.com
          </a>
        </div>
      </div>
    </footer>
  );
}

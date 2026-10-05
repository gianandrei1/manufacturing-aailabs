import SiteNavigation from './components/SiteNavigation'
import HeroSection from './components/HeroSection'
import AgentsSection from './components/AgentsSection'
import SolutionsSection from './components/SolutionsSection'
import ProcessSection from './components/ProcessSection'
import ExperienceMetricsSection from './components/ExperienceMetricsSection'
import CapabilitiesGrid from './components/CapabilitiesGrid'
import ProofAndOutputsSection from './components/ProofAndOutputsSection'
import CallToActionCard from './components/CallToActionCard'
import MainFooter from './components/MainFooter'

function App() {
  return (
    <div className="bg-black text-white antialiased selection:bg-white selection:text-black relative">
      {/* Background Vertical Lines */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-between px-6 md:px-[48px] lg:px-[80px] xl:px-[120px] max-w-[1920px] mx-auto">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 100%)',
              opacity: 0.4
            }}
          ></div>
        ))}
      </div>

      <SiteNavigation />
      <main className="pt-24 overflow-hidden relative z-10" id="main">
        <HeroSection />
        <AgentsSection />
        <SolutionsSection />
        <ProcessSection />
        <ExperienceMetricsSection />
        <CapabilitiesGrid />
        <ProofAndOutputsSection />
        <CallToActionCard />
      </main>
      <div className="relative z-10">
        <MainFooter />
      </div>
    </div>
  )
}

export default App

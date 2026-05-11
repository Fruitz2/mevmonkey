import TopStrip from './components/TopStrip'
import Hero from './components/Hero'
import Anatomy from './components/Anatomy'
import Operator from './components/Operator'
import Tiers from './components/Tiers'
import LabNotes from './components/LabNotes'
import Footer from './components/Footer'
import Crosshair from './components/Crosshair'

export default function App() {
  return (
    <div className="grain min-h-screen bg-ink text-bone">
      <TopStrip />
      <main className="pb-10">
        <Hero />
        <Anatomy />
        <Operator />
        <Tiers />
        <LabNotes />
        <Footer />
      </main>
      <Crosshair />
    </div>
  )
}

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AllInOne from "./components/AllInOne"
import Features from "./components/Features"
import Tracking from "./components/Tracking"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"


export default function Page() {

  return(
    <main>
      <Navbar />
      <Hero />
      <AllInOne />
      <Features />
      <Tracking />
      <Feedback />
      <Footer />
    </main>
  )
}
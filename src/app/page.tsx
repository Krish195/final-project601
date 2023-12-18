import Image from 'next/image'
import Hero from './components/Hero'
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import CombinedComponent from './components/CombinedComponent';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import CookieBanner from './components/CookieBanner';





export default function Home() {
  return (
    <>
    <GoogleAnalytics GA_MEASUREMENT_ID="G-6DVKX14RW9" />
      <main>
        <Hero />
        <Feature />
        <Testimonial />
        <CombinedComponent />
        <Footer />
        <CookieBanner />

      </main>
    </>
  )
}
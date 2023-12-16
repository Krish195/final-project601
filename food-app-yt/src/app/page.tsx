import Image from 'next/image'
import Hero from './components/Hero'
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import CombinedComponent from './components/CombinedComponent';
import Footer from './components/Footer';




export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Testimonial />
      <CombinedComponent />
      <Footer />

    </main>
  )
}
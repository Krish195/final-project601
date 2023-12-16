import Image from 'next/image'
import Hero from './components/Hero'
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Testimonial />

    </main>
  )
}
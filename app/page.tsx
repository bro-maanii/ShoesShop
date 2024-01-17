import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <div>
        <HeroSection/>
      </div>
      <div>
        <Section1/>
      </div>
      
      <div>
      <Section2/>
      </div>
      <div>
      <Contact/>
      </div>
    </>
  )
}

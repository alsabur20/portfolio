import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}


'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TypeAnimation } from 'react-type-animation'

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary/10 rounded-full"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Abdul Sabur
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'AI Enthusiast',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-xl md:text-2xl text-muted-foreground"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
          >
            <Button asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">See Projects</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


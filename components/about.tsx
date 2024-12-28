'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Python', icon: '🐍' },
  { name: 'AI/ML', icon: '🧠' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Docker', icon: '🐳' },
]

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center"
        >
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              I'm a passionate Full Stack Developer with a keen interest in AI and machine learning. My journey in tech has led me to work on diverse projects, from web applications to AI-powered solutions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="p-2 rounded-lg flex flex-col items-center justify-center text-center bg-background shadow-md"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-3xl mb-2">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/me.png"
                alt="Abdul Sabur"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-4 border-primary rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


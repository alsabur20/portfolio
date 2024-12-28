'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Teaching Assistant',
    company: 'University XYZ',
    date: 'Jan 2022 - Present',
    description: 'Assisting in teaching web development courses and mentoring students.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Collabrix',
    date: 'Jun 2021 - Dec 2021',
    description: 'Developed and maintained a collaborative project management tool.',
  },
  {
    title: 'AI Research Assistant',
    company: 'Vocal Eyes AI',
    date: 'Jan 2021 - May 2021',
    description: 'Contributed to the development of an AI-powered voice assistant for visually impaired users.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l border-primary last:pb-0"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1.5 border-4 border-background" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company} | {exp.date}</p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


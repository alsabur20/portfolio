'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Collabrix',
    description: 'A collaborative project management tool with real-time updates and intuitive task organization.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/username/collabrix',
    demo: 'https://collabrix.example.com',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/Image%20here',
  },
  {
    title: 'Vocal Eyes AI',
    description: 'An AI-powered voice assistant for visually impaired users, providing audio descriptions of surroundings.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'OpenCV'],
    github: 'https://github.com/username/vocal-eyes-ai',
    demo: 'https://vocal-eyes-ai.example.com',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/Image%20here',
  },
  {
    title: 'EcoTrack',
    description: 'A mobile app for tracking personal carbon footprint with personalized eco-friendly recommendations.',
    technologies: ['React Native', 'Firebase', 'Redux', 'D3.js'],
    github: 'https://github.com/username/ecotrack',
    demo: 'https://ecotrack.example.com',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/Image%20here',
  },
  {
    title: 'DataViz Pro',
    description: 'A data visualization tool for business analytics with interactive charts and customizable dashboards.',
    technologies: ['D3.js', 'Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/username/dataviz-pro',
    demo: 'https://dataviz-pro.example.com',
    image: 'https://placeholder.pics/svg/300/DEDEDE/555555/Image%20here',
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + projects.length) % projects.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextProject()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Projects</h2>
        <div className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className="flex gap-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {[0, 1].map((offset) => {
                const project = projects[(currentIndex + offset) % projects.length]
                return (
                  <Card key={offset} className="w-1/2 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-lg">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <Image src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button asChild variant="outline" size="icon">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild size="icon">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="bg-background/50 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="bg-background/50 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}


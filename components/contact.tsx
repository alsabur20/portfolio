'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For this example, we'll just set isSubmitted to true
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Name" required className="bg-secondary" />
            <Input type="email" placeholder="Email" required className="bg-secondary" />
            <Textarea placeholder="Message" required className="bg-secondary" />
            <Button type="submit" className="w-full">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.span>
            </Button>
          </form>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-secondary text-foreground rounded-md text-center"
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              className="text-foreground hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linktr.ee/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <ExternalLink className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}


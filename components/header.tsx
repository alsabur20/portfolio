'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header className="w-full px-4 lg:px-6 h-16 flex items-center fixed top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="flex items-center">
          <Code className="h-6 w-6 text-primary" />
          <span className="ml-2 font-bold text-lg">AS</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          {['about', 'projects', 'experience', 'contact'].map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === section ? 'text-primary' : 'text-muted-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.div>
        </Button>
      </div>
    </header>
  )
}


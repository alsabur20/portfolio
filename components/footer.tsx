import { Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background">
      <div className="container mx-auto w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abdul Sabur. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://linktr.ee/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


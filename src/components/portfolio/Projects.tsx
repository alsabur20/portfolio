import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  tech: string[];
  description: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "PlateGuardian",
    tech: ["Python", "Flask", "React", "OpenCV", "RSA"],
    description: "Secure number plate recognition system with OCR, zero trust principles, role-based access, and per-user OCR history.",
    github: "https://github.com/alsabur20/plateguardian",
  },
  {
    title: "TrafficSignNet",
    tech: ["Python", "Streamlit", "TensorFlow", "OpenCV"],
    description: "Traffic sign classification using CNN on the GTSRB dataset with image upload and confidence scores.",
    github: "https://github.com/alsabur20/trafficsignnet",
    live: "https://trafficsignnet.streamlit.app/",
  },
  {
    title: "Creds",
    tech: ["Next.js", "NextAuth.js", "Prisma", "tRPC"],
    description: "Debit/credit management app with authentication, dashboard, and expense splitting.",
    github: "https://github.com/alsabur20/Creds",
    live: "https://creds-main.vercel.app/",
  },
  {
    title: "Triport Logistic",
    tech: ["Next.js"],
    description: "SEO-optimized portfolio/business website for a cargo and logistics service.",
    github: "https://github.com/alsabur20/triportlogistic",
    live: "https://www.triportlogistic.com/",
  },
  {
    title: "URL Shortener",
    tech: ["Next.js", "Prisma", "Neon"],
    description: "Generates short URLs with click analytics and collision handling via unique database values.",
    github: "https://github.com/alsabur20/url-shortner",
    live: "https://url-shortner-alsabur20.vercel.app/",
  },
  {
    title: "QR Generator",
    tech: ["Next.js", "Prisma", "Neon"],
    description: "QR code generator with user authentication and user-specific data handling.",
    github: "https://github.com/alsabur20/qrgenerator",
    live: "https://qrgenerator-alsabur20.vercel.app/",
  },
  {
    title: "Weather App",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Fetches real-time weather data using OpenWeatherMap, ipify, and ipapi APIs.",
    github: "https://github.com/alsabur20/weather-app",
    live: "https://weatherapp-alsabur20.netlify.app/",
  },
  {
    title: "Todo App",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Responsive To-Do List with filtering, adding, completing, and deleting tasks with local storage.",
    github: "https://github.com/alsabur20/todo-app",
    live: "https://todo-alsabur20.netlify.app/",
  },
  {
    title: "Tic Tac Toe",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Tic Tac Toe game with an AI opponent using the Minimax algorithm.",
    github: "https://github.com/alsabur20/tic-tac-toe",
    live: "https://tic-tac-toe-alsabur20.netlify.app/",
  },
];

const Projects = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Projects
        </h2>
        <div className="w-12 h-1 bg-primary mb-10 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-card p-6 hover-lift flex flex-col"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-highlight transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={15} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

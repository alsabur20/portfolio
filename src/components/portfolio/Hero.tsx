import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const roleText = useTypewriter(100, 60, 1500);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24 hero-gradient">
      <div className="max-w-4xl mx-auto text-center">
        {/* Photo placeholder */}
        <div
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-border bg-secondary flex items-center justify-center overflow-hidden opacity-0 animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <img src={profilePhoto} alt="Abdul Sabur" className="w-full h-full object-cover" />
        </div>

        <div
          className="h-7 mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            {roleText}
            <span className="inline-block w-[2px] h-4 bg-foreground ml-0.5 align-middle animate-pulse" />
          </p>
        </div>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Abdul Sabur
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          CS student at UET Lahore building real-world software with Python, .NET, React & more.
        </p>

        <div
          className="flex items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {/* <a
            href="/Abdul_Sabur_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
          >
            <ArrowDown size={16} />
            Download CV
          </a> */}
          <a
            href="https://github.com/alsabur20"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/alsabur20"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border-2 border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:alsabur20@gmail.com"
            className="p-3 rounded-full border-2 border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ArrowDown size={16} />
          Scroll down
        </a>
      </div>
    </section>
  );
};

export default Hero;

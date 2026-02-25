import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-primary mb-8 rounded-full mx-auto" />

        <p className="text-muted-foreground text-lg mb-10">
          I'm always open to discussing new projects, opportunities, or collaborations.
          Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:alsabur20@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            alsabur20@gmail.com
          </a>
          <a
            href="tel:+923060020007"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            <Phone size={18} />
            +92-306-0020007
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} />
          Lahore, Pakistan
        </div>
      </div>
    </section>
  );
};

export default Contact;

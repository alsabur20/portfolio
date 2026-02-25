import { useState, useEffect, useRef } from "react";

const roles = ["Software Engineer", "Full Stack Developer", "CS Student", "Problem Solver"];

export function useTypewriter(speed = 80, deleteSpeed = 40, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const phaseRef = useRef<"typing" | "deleting" | "pausing" | "waiting">("typing");
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);

  useEffect(() => {
    let timer: number;

    const tick = () => {
      const current = roles[roleIndexRef.current];
      const phase = phaseRef.current;

      if (phase === "typing") {
        charIndexRef.current += 1;
        setText(current.slice(0, charIndexRef.current));
        if (charIndexRef.current >= current.length) {
          phaseRef.current = "pausing";
          timer = window.setTimeout(tick, pauseDuration);
        } else {
          timer = window.setTimeout(tick, speed);
        }
      } else if (phase === "pausing") {
        phaseRef.current = "deleting";
        timer = window.setTimeout(tick, deleteSpeed);
      } else if (phase === "deleting") {
        charIndexRef.current -= 1;
        setText(current.slice(0, charIndexRef.current));
        if (charIndexRef.current <= 0) {
          phaseRef.current = "waiting";
          timer = window.setTimeout(tick, 300);
        } else {
          timer = window.setTimeout(tick, deleteSpeed);
        }
      } else if (phase === "waiting") {
        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
        charIndexRef.current = 0;
        setText("");
        phaseRef.current = "typing";
        timer = window.setTimeout(tick, speed);
      }
    };

    timer = window.setTimeout(tick, speed);
    return () => window.clearTimeout(timer);
  }, [speed, deleteSpeed, pauseDuration]);

  return text;
}

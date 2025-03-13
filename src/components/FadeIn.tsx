
import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
}

const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
  once = true,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (direction) {
      case "up":
        return "animate-fade-in";
      case "left":
        return "animate-slide-in-left";
      case "right":
        return "animate-slide-in-right";
      case "none":
        return "opacity-100 transition-opacity duration-500";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={domRef}
      className={`${className} ${getAnimationClass()}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

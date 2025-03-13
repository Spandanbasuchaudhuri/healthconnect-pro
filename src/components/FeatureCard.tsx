
import { ReactNode } from "react";
import FadeIn from "./FadeIn";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <FadeIn 
      delay={delay} 
      className="p-6 glass-card hover-scale glow-effect"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-medical-500 mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 gradient-text">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

export default FeatureCard;


import { MessageSquare, Video, Ambulance, Activity, Share2, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";
import DoctorCall from "./DoctorCall";
import EmergencyDispatch from "./EmergencyDispatch";
import SymptomAnalyzer from "./SymptomAnalyzer";
import ChannelOptions from "./ChannelOptions";
import FadeIn from "./FadeIn";

const FeatureSection = () => {
  return (
    <div className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center bg-medical-50 px-3 py-1 rounded-full mb-4">
            <span className="text-sm font-medium text-medical-700">Advanced AI Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Comprehensive Healthcare Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            MediCall AI combines cutting-edge artificial intelligence with medical expertise to provide immediate and accurate healthcare assistance across multiple channels.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={<MessageSquare />}
            title="AI Medical Assistant"
            description="Get immediate responses to your medical queries in multiple languages with our advanced AI technology."
            delay={0.1}
          />
          <FeatureCard
            icon={<Video />}
            title="Doctor Connect"
            description="Instantly connect with certified medical professionals through high-quality video or voice calls."
            delay={0.2}
          />
          <FeatureCard
            icon={<Ambulance />}
            title="Emergency Dispatch"
            description="Automatic location detection and emergency services dispatch in critical situations."
            delay={0.3}
          />
          <FeatureCard
            icon={<Activity />}
            title="Symptom Analysis"
            description="Powerful AI algorithms analyze your symptoms and provide personalized health recommendations."
            delay={0.4}
          />
          <FeatureCard
            icon={<Share2 />}
            title="Multi-Channel Access"
            description="Reach medical help through various platforms including WhatsApp, Telegram, and direct calls."
            delay={0.5}
          />
          <FeatureCard
            icon={<Shield />}
            title="Privacy Protection"
            description="End-to-end encryption and HIPAA compliance ensure your medical data remains secure and private."
            delay={0.6}
          />
        </div>
        
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Experience the Future of Healthcare</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how MediCall AI revolutionizes emergency medical assistance with its intuitive interfaces and powerful features.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <DoctorCall />
            <EmergencyDispatch />
          </div>
          <div className="space-y-12">
            <SymptomAnalyzer />
            <ChannelOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

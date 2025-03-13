
import { ArrowRight, Languages, Shield, Clock } from "lucide-react";
import PhoneInterface from "./PhoneInterface";
import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient sphere */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-medical-100 to-medical-200 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-medical-100 to-medical-200 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1} direction="left" className="text-center lg:text-left">
            <div className="inline-flex items-center bg-medical-50 px-3 py-1 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-medical-500 mr-2"></div>
              <span className="text-sm font-medium text-medical-700">AI-Powered Healthcare</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">MediCall AI</span>
              <br />
              <span className="text-gray-800">Emergency Medical Assistance</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Immediate medical assistance powered by AI. Connect with doctors, dispatch emergency services, and get accurate health information - all in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-medical-500 hover:bg-medical-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center group w-full sm:w-auto justify-center">
                <span>Get Started</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              
              <button className="bg-white hover:bg-gray-50 text-medical-600 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200 flex items-center w-full sm:w-auto justify-center">
                <span>Learn More</span>
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mb-2">
                  <Languages size={20} />
                </div>
                <p className="text-sm text-gray-700 font-medium">Multiple Languages</p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mb-2">
                  <Shield size={20} />
                </div>
                <p className="text-sm text-gray-700 font-medium">HIPAA Compliant</p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-10 h-10 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mb-2">
                  <Clock size={20} />
                </div>
                <p className="text-sm text-gray-700 font-medium">24/7 Availability</p>
              </div>
            </div>
          </FadeIn>
          
          <div className="relative">
            <PhoneInterface />
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/4 right-0 w-20 h-20 bg-medical-200 rounded-full blur-xl opacity-60 animate-float"></div>
            <div className="absolute -z-10 bottom-1/4 left-0 w-16 h-16 bg-medical-300 rounded-full blur-xl opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

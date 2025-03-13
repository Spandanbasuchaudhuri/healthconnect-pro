
import { Video, Mic, MicOff, Volume2, VolumeX, Phone } from "lucide-react";
import FadeIn from "./FadeIn";

const DoctorCall = () => {
  return (
    <FadeIn 
      delay={0.2} 
      direction="right"
      className="relative w-full max-w-[400px] aspect-video bg-gray-900 rounded-xl overflow-hidden mx-auto shadow-2xl"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-r from-gray-900 to-medical-900 opacity-90"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 border-2 border-gray-600">
            <span className="text-4xl">DR</span>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 ping-dot"></div>
              <span className="text-white text-sm">Connected to Dr. Sarah Johnson</span>
            </div>
            <div className="bg-medical-500 text-white text-xs px-2 py-1 rounded-full">
              LIVE
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex justify-between items-center">
            <div className="text-white text-xs">
              <p className="opacity-80">Secure connection</p>
              <p className="opacity-60 text-xs">End-to-end encrypted</p>
            </div>
            
            <div className="flex space-x-3">
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                <Mic size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                <Video size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <Phone size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 w-28 aspect-video bg-medical-900 rounded-lg overflow-hidden border border-medical-700">
          <div className="w-full h-full flex items-center justify-center text-center text-white text-xs">
            <span>Your camera</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default DoctorCall;


import { Phone, MessageCircle, Send } from "lucide-react";
import FadeIn from "./FadeIn";

const ChannelOptions = () => {
  return (
    <FadeIn delay={0.5} direction="left" className="w-full max-w-[400px] mx-auto">
      <div className="glass-card p-5">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Communication Channels</h3>
        
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center transition-all hover:border-medical-200 hover:shadow-md hover-scale">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-4 flex-shrink-0">
              <MessageCircle className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">WhatsApp</div>
              <p className="text-sm text-gray-600">Connect through the world's most popular messaging app</p>
            </div>
            <div className="flex-shrink-0 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
              <Send className="text-white" size={14} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center transition-all hover:border-medical-200 hover:shadow-md hover-scale">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-4 flex-shrink-0">
              <Send className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">Telegram</div>
              <p className="text-sm text-gray-600">Secure and fast communications with end-to-end encryption</p>
            </div>
            <div className="flex-shrink-0 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
              <Send className="text-white" size={14} />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200 flex items-center transition-all hover:border-medical-200 hover:shadow-md hover-scale">
            <div className="w-10 h-10 rounded-full bg-medical-500 flex items-center justify-center mr-4 flex-shrink-0">
              <Phone className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">Phone Call</div>
              <p className="text-sm text-gray-600">Direct line to medical professionals 24/7</p>
            </div>
            <div className="flex-shrink-0 bg-medical-500 w-8 h-8 rounded-full flex items-center justify-center">
              <Phone className="text-white" size={14} />
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-sm font-medium text-gray-800 mb-2">Privacy Guaranteed</div>
          <p className="text-xs text-gray-600">All communications are encrypted and compliant with HIPAA regulations. Your medical information remains confidential.</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default ChannelOptions;

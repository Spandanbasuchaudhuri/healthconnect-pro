
import { MapPin, Ambulance, Clock, Phone } from "lucide-react";
import FadeIn from "./FadeIn";

const EmergencyDispatch = () => {
  return (
    <FadeIn delay={0.3} direction="left" className="w-full max-w-[400px] mx-auto">
      <div className="glass-card p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg text-sm font-medium flex items-center">
          <div className="w-2 h-2 bg-white rounded-full animate-ping mr-2"></div>
          EMERGENCY
        </div>
        
        <div className="pt-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Emergency Response</h3>
          
          <div className="bg-white/70 rounded-lg p-4 mb-4 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-lg mr-3">
                <MapPin className="text-red-500" size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Patient Location Detected</div>
                <p className="text-sm text-gray-600">123 Main Street, Apt 4B, New York, NY 10001</p>
                <div className="text-xs text-medical-500 mt-1">GPS coordinates: 40.7128° N, 74.0060° W</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 rounded-lg p-4 mb-4 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-medical-100 p-2 rounded-lg mr-3">
                <Ambulance className="text-medical-500" size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Ambulance Dispatched</div>
                <p className="text-sm text-gray-600">Unit #427 from Memorial Hospital</p>
                <div className="flex items-center text-xs text-medical-500 mt-1">
                  <Clock size={12} className="mr-1" />
                  <span>ETA: 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="heartbeat-line mb-4"></div>
          
          <div className="bg-white/70 rounded-lg p-4 border border-gray-100">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <Phone className="text-green-500" size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Emergency Contact Notified</div>
                <p className="text-xs text-gray-600">Jane Smith (Sister)</p>
                <p className="text-xs text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors">
              Cancel Dispatch
            </button>
            <button className="bg-medical-500 hover:bg-medical-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors flex items-center">
              <Phone size={16} className="mr-2" />
              Call 911
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default EmergencyDispatch;

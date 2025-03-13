
import { useState } from "react";
import { CheckCircle, Circle, AlertCircle, ThermometerSnowflake, ThermometerSun, ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const symptoms = [
  { id: 1, name: "Headache", selected: true },
  { id: 2, name: "Fever", selected: true },
  { id: 3, name: "Cough", selected: false },
  { id: 4, name: "Fatigue", selected: true },
  { id: 5, name: "Nausea", selected: false },
  { id: 6, name: "Dizziness", selected: true },
];

const SymptomAnalyzer = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState(symptoms);

  const toggleSymptom = (id: number) => {
    setSelectedSymptoms(
      selectedSymptoms.map((symptom) =>
        symptom.id === id
          ? { ...symptom, selected: !symptom.selected }
          : symptom
      )
    );
  };

  return (
    <FadeIn delay={0.4} direction="right" className="w-full max-w-[400px] mx-auto">
      <div className="glass-card p-5">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Symptom Analyzer</h3>
        
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-700 mb-2">Select your symptoms:</div>
          <div className="space-y-2">
            {selectedSymptoms.map((symptom) => (
              <div
                key={symptom.id}
                className={`flex items-center p-3 rounded-lg transition-colors cursor-pointer ${
                  symptom.selected
                    ? "bg-medical-50 border border-medical-200"
                    : "bg-white border border-gray-200 hover:border-medical-200"
                }`}
                onClick={() => toggleSymptom(symptom.id)}
              >
                {symptom.selected ? (
                  <CheckCircle className="text-medical-500 mr-3" size={20} />
                ) : (
                  <Circle className="text-gray-300 mr-3" size={20} />
                )}
                <span className="text-gray-800">{symptom.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div className="flex items-start mb-2">
            <div className="bg-orange-100 p-1 rounded-lg mr-3">
              <AlertCircle className="text-orange-500" size={18} />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Possible Conditions</div>
            </div>
          </div>
          
          <div className="space-y-2 mt-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm">Common Cold</span>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                  <div className="h-full bg-green-500 w-[30%]"></div>
                </div>
                <span className="text-xs text-gray-500">30%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm">Migraine</span>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                  <div className="h-full bg-orange-500 w-[65%]"></div>
                </div>
                <span className="text-xs text-gray-500">65%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-sm">Flu</span>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                  <div className="h-full bg-red-500 w-[85%]"></div>
                </div>
                <span className="text-xs text-gray-500">85%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-lg mr-3">
              <ThermometerSun className="text-blue-500" size={18} />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Body Temperature</div>
              <div className="mt-2 flex items-center justify-between">
                <ThermometerSnowflake className="text-blue-400" size={16} />
                <div className="w-full mx-2 h-2 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 rounded-full relative">
                  <div className="absolute top-1/2 left-[70%] transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-medical-500 rounded-full"></div>
                </div>
                <ThermometerSun className="text-red-400" size={16} />
              </div>
              <div className="text-right text-xs text-gray-600 mt-1">38.5°C / 101.3°F</div>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-medical-500 hover:bg-medical-600 text-white py-3 rounded-lg shadow-md transition-colors flex items-center justify-center">
          <span>Get Full Analysis</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </FadeIn>
  );
};

export default SymptomAnalyzer;

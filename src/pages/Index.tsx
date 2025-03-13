
import { Heart, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import FadeIn from "../components/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      
      <div className="py-16 bg-white" id="how-it-works">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center bg-medical-50 px-3 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-medical-700">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Simple Steps to Get Medical Help</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              MediCall AI makes it easy to receive immediate medical assistance wherever you are.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="text-center p-6">
              <div className="w-16 h-16 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect with MediCall</h3>
              <p className="text-gray-600">Open the app, call our number, or message us through WhatsApp or Telegram.</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="text-center p-6">
              <div className="w-16 h-16 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Situation</h3>
              <p className="text-gray-600">Tell us about your symptoms or emergency. Our AI will analyze your input.</p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="text-center p-6">
              <div className="w-16 h-16 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Assistance</h3>
              <p className="text-gray-600">Get immediate AI recommendations, connect with a doctor, or have emergency services dispatched.</p>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <FeatureSection />
      
      <div className="py-20 bg-gradient-to-r from-medical-500 to-medical-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <Heart className="w-16 h-16 mx-auto mb-6 animate-heartbeat" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Better Healthcare?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Join thousands of users who trust MediCall AI for their medical assistance needs.
            </p>
            <button className="bg-white text-medical-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center mx-auto group">
              <span>Download MediCall AI</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </FadeIn>
        </div>
      </div>
      
      <div className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center bg-medical-50 px-3 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-medical-700">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Contact Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions about MediCall AI? Our team is here to help you.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={0.1} className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mx-auto mb-4">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@medicall.ai</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mx-auto mb-4">
                <Phone size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (800) MEDI-CALL</p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-medical-50 rounded-full flex items-center justify-center text-medical-500 mx-auto mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
              <p className="text-gray-600">123 Health Avenue, San Francisco, CA 94103</p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-medical-500 focus:border-medical-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-medical-500 focus:border-medical-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-medical-500 focus:border-medical-500"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-medical-500 focus:border-medical-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-medical-500 hover:bg-medical-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
      
      <footer className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-medical-500 mr-2" />
              <span className="text-xl font-bold gradient-text">MediCall AI</span>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} MediCall AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

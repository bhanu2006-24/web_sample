import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-80 bg-premium-navy flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/id/1048/1920/600" alt="About Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-premium-gold font-light">Redefining the art of travel.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg mx-auto text-slate-600">
          <h2 className="text-3xl font-serif font-bold text-premium-navy mb-6 text-center">Who We Are</h2>
          <p className="mb-8 text-center leading-relaxed">
            Krishna Travels was founded with a simple yet ambitious mission: to open up the world to everyone in the most premium, comfortable, and memorable way possible. We believe that travel is not just about moving from point A to point B, but about the stories you collect and the people you meet along the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Globe className="w-10 h-10 text-premium-gold mx-auto mb-4" />
              <h3 className="font-bold text-premium-navy mb-2">Global Reach</h3>
              <p className="text-sm">Connecting you to over 50+ countries with local expertise.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Users className="w-10 h-10 text-premium-gold mx-auto mb-4" />
              <h3 className="font-bold text-premium-navy mb-2">Expert Team</h3>
              <p className="text-sm">Our travel agents are seasoned explorers themselves.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Target className="w-10 h-10 text-premium-gold mx-auto mb-4" />
              <h3 className="font-bold text-premium-navy mb-2">Your Vision</h3>
              <p className="text-sm">We build itineraries completely around your desires.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-premium-navy mb-6 text-center">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-premium-navy text-white p-8 rounded-2xl shadow-xl">
             <div className="w-32 h-32 bg-slate-300 rounded-full overflow-hidden shrink-0 border-4 border-premium-gold">
               {/* Placeholder for Founder Image if available, else generic user */}
                <img src="https://ui-avatars.com/api/?name=Bhanu+Pratap&background=D4AF37&color=fff" alt="Bhanu Pratap Saini" className="w-full h-full object-cover" />
             </div>
             <div>
               <h3 className="text-2xl font-serif font-bold text-premium-gold mb-2">Bhanu Pratap Saini</h3>
               <p className="text-slate-300 italic mb-4">Founder & CEO</p>
               <p className="text-sm text-slate-200">
                 "I started Krishna Travels to bridge the gap between dream vacations and reality. My passion for technology and travel drives us to deliver seamless experiences."
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
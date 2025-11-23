import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO_DISPLAY } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold text-premium-navy">Get in Touch</h2>
          <p className="mt-4 text-lg text-slate-600">
            We'd love to hear from you. The quickest way to reach us is through our direct social channels below.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="md:flex">
            {/* Visual Side */}
            <div className="md:w-1/2 bg-premium-navy p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-premium-gold rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-6">Let's Plan Your Trip</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Ready to start your adventure? Contact our team directly via LinkedIn, Instagram, or Email for personalized itinerary planning and bookings.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <Mail className="w-4 h-4 text-premium-gold" />
                    </div>
                    {CONTACT_INFO_DISPLAY.email}
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      <Instagram className="w-4 h-4 text-premium-gold" />
                    </div>
                    @{CONTACT_INFO_DISPLAY.instagram}
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Connect with the developer</p>
                <h4 className="font-bold text-lg">{CONTACT_INFO_DISPLAY.linkedin}</h4>
              </div>
            </div>

            {/* Links Side (Replacing the broken form) */}
            <div className="md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-premium-navy mb-8">Direct Contact Channels</h3>
              
              <div className="space-y-4">
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-8 h-8 text-[#0077b5] group-hover:text-white transition-colors mr-4" />
                  <div className="flex-1">
                    <h4 className="font-bold">LinkedIn</h4>
                    <p className="text-sm text-slate-500 group-hover:text-blue-100">{CONTACT_INFO_DISPLAY.linkedin}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors mr-4" />
                  <div className="flex-1">
                    <h4 className="font-bold">Instagram</h4>
                    <p className="text-sm text-slate-500 group-hover:text-pink-100">@{CONTACT_INFO_DISPLAY.instagram}</p>
                  </div>
                   <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300"
                >
                  <Github className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors mr-4" />
                  <div className="flex-1">
                    <h4 className="font-bold">GitHub</h4>
                    <p className="text-sm text-slate-500 group-hover:text-gray-300">{CONTACT_INFO_DISPLAY.github}</p>
                  </div>
                   <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a 
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="group flex items-center p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-premium-gold hover:border-premium-gold hover:text-white transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-premium-gold group-hover:text-white transition-colors mr-4" />
                  <div className="flex-1">
                    <h4 className="font-bold">Email</h4>
                    <p className="text-sm text-slate-500 group-hover:text-yellow-100">{CONTACT_INFO_DISPLAY.email}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
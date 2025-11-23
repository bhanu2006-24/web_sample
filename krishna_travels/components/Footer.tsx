import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Instagram, Linkedin, Mail, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-premium-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-6 w-6 text-premium-gold" />
              <span className="font-serif text-xl font-bold">Krishna Travels</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting premium travel experiences for the modern explorer. We bring your dream destinations to life with unparalleled service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-premium-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="text-slate-300 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="text-slate-300 hover:text-white transition-colors">Packages</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-premium-gold">Contact</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white">{SOCIAL_LINKS.email}</a>
              </li>
              <li>New Delhi, India</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-premium-gold">Connect</h3>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-premium-gold hover:text-premium-navy transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-premium-gold hover:text-premium-navy transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-premium-gold hover:text-premium-navy transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Krishna Travels. All rights reserved. Designed by Bhanu Pratap Saini.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
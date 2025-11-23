import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, ShieldCheck, Heart, Clock } from 'lucide-react';
import { DESTINATIONS, PACKAGES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredDestinations = DESTINATIONS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/id/1015/1920/1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-navy/90 via-premium-navy/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            Discover the <span className="text-premium-gold">Extraordinary</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 font-light leading-relaxed">
            Embark on journeys that define luxury. From hidden gems to iconic landmarks,
            Krishna Travels curates experiences just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-premium-gold text-premium-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Explore Destinations
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-premium-navy transition-all duration-300"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-premium-navy">Safe Travel</h3>
              <p className="text-slate-600">Your safety is our priority. We partner with certified guides and hotels.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-premium-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-premium-navy">Curated for You</h3>
              <p className="text-slate-600">Tailor-made itineraries that match your interests, style, and budget.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-premium-navy">24/7 Support</h3>
              <p className="text-slate-600">We are always just a call away, no matter the time zone you are in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-navy mb-4">Trending Destinations</h2>
              <div className="h-1 w-20 bg-premium-gold"></div>
            </div>
            <Link to="/destinations" className="hidden md:flex items-center text-premium-navy font-bold hover:text-premium-gold transition-colors">
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <div key={dest.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-bold text-premium-navy">
                    <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" /> {dest.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-premium-navy group-hover:text-premium-gold transition-colors">{dest.name}</h3>
                    <span className="text-lg font-bold text-green-600">{dest.price}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{dest.description}</p>
                  <Link to="/contact" className="inline-block w-full text-center py-3 rounded-lg border border-premium-navy text-premium-navy font-bold hover:bg-premium-navy hover:text-white transition-colors">
                    Book This Trip
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/destinations" className="inline-flex items-center text-premium-navy font-bold hover:text-premium-gold transition-colors">
              View All Destinations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages Banner */}
      <section className="py-20 relative bg-premium-navy overflow-hidden">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-premium-gold rounded-full opacity-10 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
           <div className="md:w-1/2 mb-10 md:mb-0">
             <span className="text-premium-gold font-bold uppercase tracking-widest text-sm mb-2 block">Special Offers</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Explore Our Premium Packages</h2>
             <p className="text-slate-300 text-lg mb-8 max-w-lg">
               All-inclusive luxury packages designed to give you peace of mind and unforgettable memories.
             </p>
             <Link to="/packages" className="inline-block bg-white text-premium-navy px-8 py-3 rounded-full font-bold hover:bg-premium-gold hover:text-white transition-all duration-300">
               View Packages
             </Link>
           </div>
           <div className="md:w-1/2 flex space-x-4">
              <img src={PACKAGES[0].image} alt="Package 1" className="w-1/2 h-64 object-cover rounded-2xl shadow-2xl transform translate-y-8" />
              <img src={PACKAGES[1].image} alt="Package 2" className="w-1/2 h-64 object-cover rounded-2xl shadow-2xl transform -translate-y-8" />
           </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-navy mb-4">Traveler Stories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Hear from our community of explorers about their experiences with Krishna Travels.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-premium-gold rounded-full flex items-center justify-center text-4xl text-white font-serif font-bold">"</div>
                <p className="text-slate-600 italic mb-6 pt-4">{t.text}</p>
                <div className="flex items-center">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-bold text-premium-navy">{t.name}</h4>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
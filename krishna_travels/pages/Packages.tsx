import React from 'react';
import { PACKAGES } from '../constants';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <div className="pt-10 pb-20 bg-slate-50 min-h-screen">
      <div className="bg-white pb-16 pt-16 mb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-premium-gold font-bold uppercase tracking-wider text-sm">Curated Itineraries</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-premium-navy mt-2 mb-6">Exclusive Travel Packages</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything is taken care of. Flights, accommodation, and guided tours bundled into one perfect price.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {PACKAGES.map((pkg, index) => (
            <div key={pkg.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-3xl overflow-hidden shadow-xl transition-all hover:shadow-2xl`}>
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                {pkg.featured && (
                  <div className="absolute top-6 left-6 bg-premium-gold text-premium-navy px-4 py-1 font-bold rounded-full text-sm shadow-lg">
                    Best Seller
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center text-slate-500 mb-4 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  {pkg.duration}
                </div>
                <h3 className="text-3xl font-serif font-bold text-premium-navy mb-4">{pkg.title}</h3>
                <div className="mb-6">
                  <p className="text-slate-600 mb-2">Destinations covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((city) => (
                      <span key={city} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center mb-8 space-x-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" /> Hotels
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                     <CheckCircle className="w-4 h-4 text-green-500 mr-1" /> Transfers
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                     <CheckCircle className="w-4 h-4 text-green-500 mr-1" /> Guide
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-slate-400 text-sm block">Starting from</span>
                    <span className="text-3xl font-bold text-premium-navy">{pkg.price}</span>
                  </div>
                  <Link 
                    to="/contact" 
                    className="flex items-center bg-premium-navy text-white px-6 py-3 rounded-full font-bold hover:bg-premium-gold transition-colors"
                  >
                    Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
import React, { useState } from 'react';
import { DESTINATIONS } from '../constants';
import { Link } from 'react-router-dom';
import { MapPin, Star, Filter } from 'lucide-react';

const Destinations: React.FC = () => {
  const [filter, setFilter] = useState('All');

  // Simple logic to mimic filtering, in a real app this would filter by actual properties
  const filteredDestinations = filter === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter((_, i) => i % 2 === (filter === 'International' ? 0 : 1));

  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="bg-premium-navy py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Explore Destinations</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">From the icy peaks of Iceland to the tropical beaches of Bali, find your next adventure here.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center mb-4 md:mb-0">
             <Filter className="w-5 h-5 text-slate-400 mr-2" />
             <span className="text-slate-700 font-medium">Filter by:</span>
          </div>
          <div className="flex space-x-2">
            {['All', 'International', 'Domestic'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-premium-navy text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center text-sm font-medium mb-1">
                    <MapPin className="w-4 h-4 mr-1 text-premium-gold" /> {dest.name.split(',')[1] || 'International'}
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{dest.name.split(',')[0]}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-premium-navy">{dest.price}</span>
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current mr-1" /> {dest.rating}
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{dest.description}</p>
                <Link to="/contact" className="block w-full py-3 bg-slate-100 text-premium-navy font-bold text-center rounded-lg hover:bg-premium-gold hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
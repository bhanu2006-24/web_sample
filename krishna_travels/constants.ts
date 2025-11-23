import { Destination, Package, Testimonial, SocialLinks } from './types';

export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/bhanu2006-24",
  linkedin: "https://www.linkedin.com/in/bhanu-pratap-saini", // Assuming standard URL structure based on name provided
  instagram: "https://instagram.com/krishna_websites",
  email: "krishnawebsitess@gmail.com"
};

export const CONTACT_INFO_DISPLAY = {
  github: "bhanu2006-24",
  linkedin: "Bhanu Pratap Saini",
  instagram: "krishna_websites",
  email: "krishnawebsitess@gmail.com"
};

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://picsum.photos/id/1036/800/600",
    description: "Experience the white-washed buildings and stunning sunsets of the Aegean Sea.",
    price: "$1,200",
    rating: 4.9
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://picsum.photos/id/1039/800/600",
    description: "Discover tropical paradise, spiritual temples, and vibrant culture.",
    price: "$850",
    rating: 4.8
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "https://picsum.photos/id/1018/800/600",
    description: "Immerse yourself in cherry blossoms, ancient shrines, and tea ceremonies.",
    price: "$1,500",
    rating: 4.9
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: "https://picsum.photos/id/1015/800/600",
    description: "Trek the Inca Trail to the lost city in the clouds.",
    price: "$1,100",
    rating: 4.7
  },
  {
    id: 5,
    name: "Reykjavik, Iceland",
    image: "https://picsum.photos/id/1003/800/600",
    description: "Witness the Northern Lights and explore geothermal wonders.",
    price: "$1,800",
    rating: 4.8
  },
  {
    id: 6,
    name: "Maldives",
    image: "https://picsum.photos/id/1028/800/600",
    description: "Luxury overwater bungalows and crystal clear turquoise waters.",
    price: "$2,200",
    rating: 5.0
  }
];

export const PACKAGES: Package[] = [
  {
    id: 1,
    title: "European Dream",
    duration: "10 Days / 9 Nights",
    destinations: ["Paris", "Rome", "Venice", "Zurich"],
    price: "$2,499",
    image: "https://picsum.photos/id/1040/800/600",
    featured: true
  },
  {
    id: 2,
    title: "Asian Adventure",
    duration: "14 Days / 13 Nights",
    destinations: ["Bangkok", "Hanoi", "Siem Reap", "Phuket"],
    price: "$1,899",
    image: "https://picsum.photos/id/1047/800/600",
    featured: true
  },
  {
    id: 3,
    title: "Himalayan Escape",
    duration: "7 Days / 6 Nights",
    destinations: ["Manali", "Leh", "Ladakh"],
    price: "$999",
    image: "https://picsum.photos/id/1016/800/600",
    featured: false
  },
    {
    id: 4,
    title: "Desert Safari",
    duration: "5 Days / 4 Nights",
    destinations: ["Dubai", "Abu Dhabi"],
    price: "$1,299",
    image: "https://picsum.photos/id/1031/800/600",
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Enthusiast",
    text: "Krishna Travels planned the most incredible trip to Bali for us. Every detail was perfect!",
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Photographer",
    text: "The visuals and locations suggested were breathtaking. Truly a premium experience.",
    avatar: "https://picsum.photos/id/91/100/100"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Solo Traveler",
    text: "I felt safe and supported throughout my entire solo trip to Japan. Highly recommended!",
    avatar: "https://picsum.photos/id/65/100/100"
  }
];
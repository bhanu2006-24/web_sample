export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  rating: number;
}

export interface Package {
  id: number;
  title: string;
  duration: string;
  destinations: string[];
  price: string;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
}
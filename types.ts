export type StayType = 'beach' | 'adventure' | 'cultural' | 'hotel' | 'omra' | 'circuit' | 'organise' | 'a-la-carte' | 'bien-etre' | 'promo' | 'circuits' | 'vols';

// New types for detailed pricing inspired by screenshots
export interface PriceInfo {
  label: string; // e.g., 'Demi Double Personne'
  price: string; // e.g., '2590 DT' - Using string to accommodate currency symbol
}

export interface HotelPriceTable {
  hotelName: string; // e.g., 'Grand Hotel 3* ou similaire'
  prices: PriceInfo[];
}

export interface DatePriceTable {
  dateRange: string; // e.g., 'Du 16 Juin 2025 Au 20 Juin 2025'
  hotels: HotelPriceTable[];
}

export interface OptionalExcursion {
  description: string;
  price: string; // e.g., '170 DT'
}

// New types for Omra view
export interface Tariff {
    departure: string;
    pack: string;
}
export interface HotelInfo {
    name: string;
    location: string;
    description: string;
    imageUrl: string;
}
export interface RoomPrice {
    roomType: string;
    price: string;
}
// End of new types for trips

// New types for hotels
export interface HotelAdvantage {
    title: string;
    description: string;
}

export interface HotelRatingBreakdown {
    [key: string]: number; // e.g., 'Propreté de l'hôtel': 95
}

export interface HotelLocation {
    address: string;
    lat: number;
    lng: number;
}

export interface NearbyHotel {
    id: number;
    name: string;
}

export interface FAQ {
    question: string;
    answer: string;
}
// End of new types for hotels

export interface Stay {
  id: number;
  title: string;
  destination: string;
  price: number; // This will be the "starting from" price
  originalPrice?: number;
  duration: number; // in days
  description: string;
  longDescription: string;
  imageUrl: string;
  gallery: string[];
  type: StayType;
  rating: number;
  reviews: Review[];
  program: { day: number; title: string; description: string }[];
  included: string[];
  excluded: string[];
  practicalInfo: {
    departureDates?: string[]; // Kept for simpler data structures, but new system is preferred
    guideLanguage: string;
    comfortLevel: string;
  };
  // New fields for detailed trip view inspired by screenshots
  optionalExcursions?: OptionalExcursion[];
  pricingTables?: DatePriceTable[];
  allDepartureDates?: string[];

  // Hotel-specific properties
  advantages?: HotelAdvantage[];
  amenities?: string[];
  mainAmenities?: string[];
  specialOffer?: string;
  faq?: FAQ[];
  ratingBreakdown?: HotelRatingBreakdown;
  location?: HotelLocation;
  nearbyHotels?: NearbyHotel[];

  // Omra-specific properties
  tariffs?: Tariff[];
  hotelsInfo?: HotelInfo[];
  roomPricing?: RoomPrice[];
  notes?: string[];
  carnetDeVoyage?: HotelInfo[];
}

export interface Review {
  id: number;
  author: string;
  rating: number; // 1-5
  comment: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  tags: string[];
  author: string;
  date: string;
}

export interface Partner {
    id: number;
    name: string;
    logoUrl: string;
}

// New types for Flight Results page
export interface FlightLegDetails {
  airline: string;
  airlineLogo: string;
  departureAirport: string; // e.g., 'TUN'
  departureTime: string; // e.g., '06:40'
  arrivalAirport: string; // e.g., 'ORY'
  arrivalTime: string; // e.g., '09:05'
  duration: string; // e.g., '02h25m'
  stops: number;
}

export interface Flight {
  id: number;
  price: number;
  departureLeg: FlightLegDetails;
  returnLeg: FlightLegDetails;
  conditions: string[];
  cabinClass: 'economy' | 'premium' | 'business';
}
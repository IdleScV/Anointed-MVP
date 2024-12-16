export interface TripLeader {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  contact?: {
    email?: string;
    phone?: string;
  };
}

export interface Trip {
  id: number;
  title: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  type: string;
  spots: number;
  spotsLeft: number;
  cost: number;
  leader: TripLeader;
  activities: string[];
  requirements: string[];
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
}
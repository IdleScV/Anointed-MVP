import { useState, useMemo } from 'react';
import { Trip } from '../types/trip';

const mockTrips: Trip[] = [
  {
    id: 1,
    title: "Medical Mission to Honduras",
    location: "Tegucigalpa, Honduras",
    duration: "2 weeks",
    startDate: "2024-06-15",
    endDate: "2024-06-29",
    description: "Join our medical team providing essential healthcare services to underserved communities in Honduras. We'll be setting up mobile clinics and offering basic medical care, dental services, and health education.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    type: "Medical",
    spots: 20,
    spotsLeft: 8,
    cost: 2500,
    leader: {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "Dr. Johnson has led medical missions for over 10 years, specializing in rural healthcare delivery.",
      contact: {
        email: "sarah.johnson@example.com",
        phone: "+1 (555) 123-4567"
      },
      qualifications: [
        "MD in Family Medicine",
        "10+ years of field experience",
        "Fluent in Spanish"
      ]
    },
    activities: [
      "Mobile Medical Clinics",
      "Dental Services",
      "Health Education Workshops",
      "Community Outreach",
      "Medical Supply Distribution",
      "Emergency Medical Training for Locals"
    ],
    requirements: [
      "Medical certification (for healthcare providers)",
      "Valid passport",
      "Basic Spanish language skills",
      "Good physical health",
      "Flexibility and adaptability",
      "Background check (for medical roles)"
    ],
    included: [
      "Accommodation",
      "Local transportation",
      "Meals",
      "Medical supplies",
      "Travel insurance",
      "Cultural excursions"
    ],
    notIncluded: [
      "International flights",
      "Personal expenses",
      "Visa fees",
      "Vaccinations",
      "Optional adventure activities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Arrive in Tegucigalpa, transfer to accommodation, team orientation and briefing.",
        activities: ["Airport pickup", "Team meeting", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Clinic Setup",
        description: "Set up medical clinic in local community center, organize supplies.",
        activities: ["Equipment setup", "Supply inventory", "Community meeting"]
      },
      {
        day: 3,
        title: "Health Education Workshops",
        description: "Conduct workshops focusing on basic hygiene and disease prevention.",
        activities: ["Interactive workshops", "Q&A sessions", "Resource distribution"]
      },
      {
        day: 14,
        title: "Departure and Farewell",
        description: "Conclude the mission, pack up equipment, and share final goodbyes.",
        activities: ["Packing", "Team debrief", "Farewell dinner"]
      }
    ]
  },
  {
    id: 2,
    title: "Environmental Conservation in Costa Rica",
    location: "Monteverde, Costa Rica",
    duration: "1 week",
    startDate: "2024-07-01",
    endDate: "2024-07-08",
    description: "Participate in reforestation efforts, wildlife monitoring, and environmental education in one of the most biodiverse regions in the world.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800",
    type: "Environmental",
    spots: 15,
    spotsLeft: 10,
    cost: 1200,
    leader: {
      id: 2,
      name: "Carlos Ramirez",
      role: "Conservation Specialist",
      image: "https://images.unsplash.com/photo-1603415526960-fbdb1445b36f?auto=format&fit=crop&q=80&w=400",
      bio: "Carlos is a passionate conservationist dedicated to preserving Costa Rica's unique ecosystems through education and action.",
      contact: {
        email: "carlos.ramirez@example.com",
        phone: "+506 8888-1234"
      },
      qualifications: [
        "MSc in Environmental Science",
        "5+ years of conservation project management",
        "Experienced wildlife tracker"
      ]
    },
    activities: [
      "Tree Planting",
      "Wildlife Monitoring",
      "Environmental Education for Local Schools",
      "Trail Maintenance",
      "Eco-Tourism Workshops"
    ],
    requirements: [
      "Good physical fitness",
      "Comfortable working outdoors",
      "Interest in environmental conservation",
      "Valid passport",
      "Basic understanding of ecology (preferred)"
    ],
    included: [
      "Accommodation in eco-lodges",
      "Meals",
      "Local transportation",
      "Field equipment",
      "Guided eco-tours"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Vaccinations",
      "Optional adventure tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Orientation",
        description: "Welcome to Monteverde, settle in and learn about the week's activities.",
        activities: ["Airport pickup", "Orientation", "Eco-lodge tour"]
      },
      {
        day: 2,
        title: "Reforestation Efforts",
        description: "Begin planting native tree species in deforested areas.",
        activities: ["Tree planting", "Soil preparation", "Community collaboration"]
      },
      {
        day: 5,
        title: "Wildlife Monitoring",
        description: "Track and document local wildlife to aid in conservation research.",
        activities: ["Bird watching", "Camera trap setup", "Species cataloging"]
      },
      {
        day: 7,
        title: "Departure and Farewell",
        description: "Wrap up activities and celebrate the team's efforts.",
        activities: ["Final project review", "Group lunch", "Airport transfers"]
      }
    ]
  }
];


export const useTrips = () => {
  const [selectedType, setSelectedType] = useState('All Types');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrips = useMemo(() => {
    let filtered = mockTrips;

    if (searchQuery) {
      filtered = filtered.filter(trip =>
        trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedType !== 'All Types') {
      filtered = filtered.filter(trip => trip.type === selectedType);
    }

    return filtered;
  }, [selectedType, searchQuery]);

  const getTripById = (id: number) => {
    return mockTrips.find(trip => trip.id === id);
  };

  return {
    trips: filteredTrips,
    selectedType,
    setSelectedType,
    searchQuery,
    setSearchQuery,
    getTripById
  };
};
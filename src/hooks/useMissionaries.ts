import { useState, useMemo } from 'react';
import { Missionary } from '../types/missionary';

const mockMissionaries: Missionary[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    region: "Africa",
    location: "Kenya",
    description: "I am passionate about empowering communities through education and healthcare initiatives. Working alongside local leaders, we've established programs that provide essential medical care and educational resources to underserved areas. Our team focuses on sustainable development, ensuring that local communities can continue to thrive long after our initial involvement.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 1200,
    supporters: 85
  },
  {
    id: 2,
    name: "David Chen",
    region: "Asia",
    location: "Thailand",
    description: "Working with local communities to provide clean water access and sustainable agriculture training. Our projects have helped establish community gardens and water purification systems, improving the quality of life for hundreds of families.",
    image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 850,
    supporters: 62
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    region: "Latin America",
    location: "Guatemala",
    description: "Focused on women's empowerment through vocational training and microfinance initiatives. We've helped establish small businesses and provide educational opportunities for young women in rural communities.",
    image: "https://images.unsplash.com/photo-1548193977-dd029ba97c70?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 600,
    supporters: 45
  },
  {
    id: 4,
    name: "John Smith",
    region: "Europe",
    location: "Romania",
    description: "Working with orphanages and youth programs to provide education, mentorship, and life skills training. Our team has developed comprehensive programs that help young people transition successfully into adulthood.",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 450,
    supporters: 38
  },
  {
    id: 5,
    name: "Aisha Mohammed",
    region: "Middle East",
    location: "Jordan",
    description: "Supporting refugee communities through education and job training programs. We provide language classes, vocational training, and trauma counseling to help families rebuild their lives.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 750,
    supporters: 55
  },
  {
    id: 6,
    name: "Michael Wilson",
    region: "Oceania",
    location: "Papua New Guinea",
    description: "Partnering with indigenous communities to preserve cultural heritage while providing access to modern healthcare and education. Our projects focus on sustainable development that respects local traditions.",
    image: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 300,
    supporters: 28
  },
  {
    id: 7,
    name: "Grace Kimani",
    region: "Africa",
    location: "Uganda",
    description: "Leading initiatives in agricultural development and food security. We work with local farmers to implement sustainable farming practices and establish market connections for their produce.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 920,
    supporters: 71
  },
  {
    id: 8,
    name: "Thomas Lee",
    region: "Asia",
    location: "Cambodia",
    description: "Focusing on education and technology access in rural areas. Our team has established computer labs and coding programs, preparing young people for the digital economy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 550,
    supporters: 42
  },
  {
    id: 9,
    name: "Isabella Santos",
    region: "Latin America",
    location: "Peru",
    description: "Working in remote Andean communities to improve access to healthcare and education. We've established mobile medical clinics and distance learning programs for isolated villages.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    peopleImpacted: 680,
    supporters: 49
  }
];

export const useMissionaries = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const missionaries = useMemo(() => {
    if (selectedRegion === 'All Regions') {
      return mockMissionaries;
    }
    return mockMissionaries.filter(
      (missionary) => missionary.region === selectedRegion
    );
  }, [selectedRegion]);

  const getMissionaryById = (id: number) => {
    return mockMissionaries.find(missionary => missionary.id === id);
  };

  return {
    missionaries,
    selectedRegion,
    setSelectedRegion,
    getMissionaryById
  };
};
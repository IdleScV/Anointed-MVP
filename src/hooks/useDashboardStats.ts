import { useState, useEffect } from 'react';
import { DashboardStats, StatCard } from '../types/stats';
import { Users, BookOpen, Plane, Heart } from 'lucide-react';

const mockStats: DashboardStats = {
  missionaries: {
    total: 24,
    active: 18,
    regions: {
      'Africa': 8,
      'Asia': 6,
      'Europe': 3,
      'Latin America': 4,
      'Middle East': 3
    },
    totalImpacted: 12500
  },
  courses: {
    total: 45,
    active: 38,
    totalStudents: 1250,
    averageRating: 4.8,
    totalRevenue: 124000
  },
  trips: {
    upcoming: 8,
    total: 32,
    participants: 256,
    destinations: {
      'Kenya': 3,
      'Thailand': 2,
      'Brazil': 2,
      'Romania': 1
    }
  },
  donations: {
    monthly: 12400,
    total: 156000,
    donors: 450,
    averageDonation: 275
  }
};

export const useDashboardStats = () => {
  const [stats, setStats] = useState<DashboardStats>(mockStats);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // const response = await api.getStats();
        // setStats(response.data);
        setStats(mockStats);
        setError(null);
      } catch (err) {
        setError('Failed to load dashboard statistics');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const getStatCards = (): StatCard[] => [
    {
      label: 'Active Missionaries',
      value: stats.missionaries.active,
      change: {
        value: 12,
        trend: 'up'
      },
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      label: 'Active Courses',
      value: stats.courses.active,
      change: {
        value: 8,
        trend: 'up'
      },
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      label: 'Upcoming Trips',
      value: stats.trips.upcoming,
      change: {
        value: 2,
        trend: 'up'
      },
      icon: Plane,
      color: 'bg-purple-500'
    },
    {
      label: 'Monthly Donations',
      value: `$${(stats.donations.monthly / 1000).toFixed(1)}k`,
      change: {
        value: 15,
        trend: 'up'
      },
      icon: Heart,
      color: 'bg-pink-500'
    }
  ];

  const getMissionaryStats = () => ({
    total: stats.missionaries.total,
    active: stats.missionaries.active,
    regions: stats.missionaries.regions,
    totalImpacted: stats.missionaries.totalImpacted
  });

  const getCourseStats = () => ({
    total: stats.courses.total,
    active: stats.courses.active,
    totalStudents: stats.courses.totalStudents,
    averageRating: stats.courses.averageRating,
    totalRevenue: stats.courses.totalRevenue
  });

  const getTripStats = () => ({
    upcoming: stats.trips.upcoming,
    total: stats.trips.total,
    participants: stats.trips.participants,
    destinations: stats.trips.destinations
  });

  const getDonationStats = () => ({
    monthly: stats.donations.monthly,
    total: stats.donations.total,
    donors: stats.donations.donors,
    averageDonation: stats.donations.averageDonation
  });

  return {
    stats,
    isLoading,
    error,
    getStatCards,
    getMissionaryStats,
    getCourseStats,
    getTripStats,
    getDonationStats
  };
};
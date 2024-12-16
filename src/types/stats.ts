export interface DashboardStats {
  missionaries: {
    total: number;
    active: number;
    regions: Record<string, number>;
    totalImpacted: number;
  };
  courses: {
    total: number;
    active: number;
    totalStudents: number;
    averageRating: number;
    totalRevenue: number;
  };
  trips: {
    upcoming: number;
    total: number;
    participants: number;
    destinations: Record<string, number>;
  };
  donations: {
    monthly: number;
    total: number;
    donors: number;
    averageDonation: number;
  };
}

export interface StatCard {
  label: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down';
  };
  icon: string;
  color: string;
}
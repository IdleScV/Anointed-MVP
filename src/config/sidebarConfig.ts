import {
  LayoutDashboard,
  BookOpen,
  Plane,
  Home,
  Settings,
  LogOut
} from 'lucide-react';

export const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: BookOpen,
    label: 'Courses',
    path: '/dashboard/courses'
  },
  {
    icon: Plane,
    label: 'Mission Trips',
    path: '/dashboard/trips'
  },
  {
    icon: Home,
    label: 'Home',
    path: '/'
  },
  {
    icon: Settings,
    label: 'Settings',
    path: '/dashboard/settings'
  },
  {
    icon: LogOut,
    label: 'Logout',
    path: '/logout'
  }
];
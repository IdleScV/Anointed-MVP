import {
  LayoutDashboard,
  BookOpen,
  Receipt,
  Wallet,
  Settings,
  User,
  LogOut,
  HelpCircle
} from 'lucide-react';

export const expertSidebarItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/expert-dashboard'
  },
  {
    icon: BookOpen,
    label: 'Courses',
    path: '/expert-dashboard/courses'
  },
  {
    icon: Receipt,
    label: 'Transactions',
    path: '/expert-dashboard/transactions'
  },
  {
    icon: Wallet,
    label: 'Wallet',
    path: '/expert-dashboard/wallet'
  },
  {
    icon: Settings,
    label: 'Settings',
    path: '/expert-dashboard/settings'
  },
  {
    icon: User,
    label: 'Account',
    path: '/expert-dashboard/account'
  },
  {
    icon: LogOut,
    label: 'Logout',
    path: '/logout'
  },
  {
    icon: HelpCircle,
    label: 'Help & Information',
    path: '/expert-dashboard/help'
  }
];
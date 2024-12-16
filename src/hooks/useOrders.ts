import { useState, useMemo } from 'react';
import { Order, OrderStats, OrderFilters, OrderStatus } from '../types/order';

const mockOrders: Order[] = [
  {
    id: 1,
    studentId: 1,
    studentName: "John Smith",
    studentAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    courseId: 1,
    courseName: "Biblical Leadership",
    amount: 129.99,
    status: "completed",
    paymentMethod: "credit_card",
    createdAt: "2024-03-18T10:30:00Z",
    updatedAt: "2024-03-18T10:35:00Z",
    transactionId: "txn_1234567890"
  },
  {
    id: 2,
    studentId: 2,
    studentName: "Lisa Chen",
    studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    courseId: 2,
    courseName: "Ministry Foundations",
    amount: 99.99,
    status: "pending",
    paymentMethod: "paypal",
    createdAt: "2024-03-17T15:20:00Z",
    updatedAt: "2024-03-17T15:20:00Z",
    transactionId: "txn_0987654321"
  },
  {
    id: 3,
    studentId: 3,
    studentName: "David Wilson",
    studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    courseId: 3,
    courseName: "Cross-Cultural Communication",
    amount: 149.99,
    status: "completed",
    paymentMethod: "credit_card",
    createdAt: "2024-03-16T09:15:00Z",
    updatedAt: "2024-03-16T09:20:00Z",
    transactionId: "txn_5432167890"
  }
];

export const useOrders = () => {
  const [filters, setFilters] = useState<OrderFilters>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = useMemo(() => {
    return mockOrders.filter(order => {
      const matchesSearch = 
        order.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = !filters.status || order.status === filters.status;
      const matchesDateRange = (!filters.startDate || new Date(order.createdAt) >= new Date(filters.startDate)) &&
                              (!filters.endDate || new Date(order.createdAt) <= new Date(filters.endDate));
      const matchesAmount = (!filters.minAmount || order.amount >= filters.minAmount) &&
                          (!filters.maxAmount || order.amount <= filters.maxAmount);

      return matchesSearch && matchesStatus && matchesDateRange && matchesAmount;
    });
  }, [searchQuery, filters]);

  const getOrderStats = (): OrderStats => {
    const completedOrders = mockOrders.filter(order => order.status === 'completed');
    const totalRevenue = completedOrders.reduce((sum, order) => sum + order.amount, 0);

    return {
      totalOrders: mockOrders.length,
      totalRevenue,
      averageOrderValue: totalRevenue / completedOrders.length,
      completionRate: (completedOrders.length / mockOrders.length) * 100
    };
  };

  const getRecentOrders = (limit: number = 5): Order[] => {
    return [...mockOrders]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  };

  const getOrdersByStatus = (status: OrderStatus): Order[] => {
    return mockOrders.filter(order => order.status === status);
  };

  const getOrderById = (id: number): Order | undefined => {
    return mockOrders.find(order => order.id === id);
  };

  return {
    orders: filteredOrders,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    getOrderStats,
    getRecentOrders,
    getOrdersByStatus,
    getOrderById
  };
};
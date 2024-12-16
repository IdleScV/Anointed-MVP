export type OrderStatus = 'pending' | 'completed' | 'cancelled' | 'refunded';
export type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer';

export interface Order {
  id: number;
  studentId: number;
  studentName: string;
  studentAvatar?: string;
  courseId: number;
  courseName: string;
  amount: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  createdAt: string;
  updatedAt: string;
  transactionId: string;
}

export interface OrderStats {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  completionRate: number;
}

export interface OrderFilters {
  status?: OrderStatus;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
}
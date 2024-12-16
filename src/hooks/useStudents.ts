import { useState, useMemo } from 'react';
import { Student, StudentProgress, StudentStats } from '../types/student';

const mockStudents: Student[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    course: "Biblical Leadership",
    progress: 75,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    enrollmentDate: "2024-02-15",
    lastActive: "2024-03-18",
    email: "sarah.j@example.com",
    status: "active"
  },
  {
    id: 2,
    name: "Michael Chen",
    course: "Cross-Cultural Communication",
    progress: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    enrollmentDate: "2024-02-20",
    lastActive: "2024-03-17",
    email: "michael.c@example.com",
    status: "active"
  },
  {
    id: 3,
    name: "Emma Wilson",
    course: "Ministry Foundations",
    progress: 90,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    enrollmentDate: "2024-01-10",
    lastActive: "2024-03-18",
    email: "emma.w@example.com",
    status: "active"
  }
];

const mockStudentProgress: Record<number, StudentProgress[]> = {
  1: [
    {
      courseId: 1,
      courseName: "Biblical Leadership",
      progress: 75,
      lastAccessed: "2 days ago",
      status: "in_progress"
    },
    {
      courseId: 2,
      courseName: "Pastoral Care",
      progress: 100,
      lastAccessed: "1 week ago",
      status: "completed"
    }
  ]
};

export const useStudents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'completed'>('all');

  const filteredStudents = useMemo(() => {
    return mockStudents.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const getStudentProgress = (studentId: number): StudentProgress[] => {
    return mockStudentProgress[studentId] || [];
  };

  const getStudentStats = (studentId: number): StudentStats => {
    const progress = getStudentProgress(studentId);
    const totalCourses = progress.length;
    const completedCourses = progress.filter(p => p.status === 'completed').length;
    const averageProgress = progress.reduce((acc, curr) => acc + curr.progress, 0) / totalCourses;
    
    const student = mockStudents.find(s => s.id === studentId);
    
    return {
      totalCourses,
      completedCourses,
      averageProgress,
      lastActiveDate: student?.lastActive || ''
    };
  };

  const getRecentStudents = (limit: number = 5): Student[] => {
    return [...mockStudents]
      .sort((a, b) => new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime())
      .slice(0, limit);
  };

  const getActiveStudents = (): Student[] => {
    return mockStudents.filter(student => student.status === 'active');
  };

  return {
    students: filteredStudents,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    getStudentProgress,
    getStudentStats,
    getRecentStudents,
    getActiveStudents
  };
};
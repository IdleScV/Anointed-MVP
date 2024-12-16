import { useState, useMemo } from 'react';
import { BlogPost } from '../types/blog';

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Walking in Faith: A Guide to Modern Christian Living",
    excerpt: "Discover practical ways to live out your faith in today's complex world.",
    content: "Full article content here...",
    author: {
      name: "Rev. David Wilson",
      role: "Senior Pastor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    category: "Christian Living",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-15",
    readTime: "5 min read",
    tags: ["Faith", "Modern Life", "Discipleship"]
  },
  {
    id: 2,
    title: "The Impact of Prayer in Mission Work",
    excerpt: "Understanding the transformative power of prayer in global missions.",
    content: "Full article content here...",
    author: {
      name: "Dr. Sarah Chen",
      role: "Missions Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    category: "Missions",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-12",
    readTime: "7 min read",
    tags: ["Prayer", "Missions", "Ministry"]
  },
  {
    id: 3,
    title: "Biblical Leadership in the Digital Age",
    excerpt: "Exploring how to lead effectively while staying true to biblical principles.",
    content: "Full article content here...",
    author: {
      name: "Pastor Michael Thompson",
      role: "Leadership Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    date: "2024-03-10",
    readTime: "6 min read",
    tags: ["Leadership", "Technology", "Ministry"]
  }
];

export const useBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = useMemo(() => {
    if (selectedCategory === 'All') {
      return mockPosts;
    }
    return mockPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  const getPostById = (id: number) => {
    return mockPosts.find(post => post.id === id);
  };

  return {
    posts,
    selectedCategory,
    setSelectedCategory,
    getPostById
  };
};
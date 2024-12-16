import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { useTheme } from '../../hooks/useTheme';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const theme = useTheme();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <span className={`absolute top-3 right-3 ${theme.colors.accent.bg.DEFAULT} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-600">{post.author.role}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            <span>{post.tags[0]}</span>
          </div>
        </div>
        <Link 
          to={`/blog/${post.id}`}
          className={`block w-full ${theme.colors.primary.bg.DEFAULT} text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
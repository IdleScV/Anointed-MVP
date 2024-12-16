import React from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import BlogFilter from '../components/blog/BlogFilter';
import { useBlog } from '../hooks/useBlog';

const BlogPage = () => {
  const { posts, selectedCategory, setSelectedCategory } = useBlog();

  return (
    <div>
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
};

export default BlogPage;
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  category: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}
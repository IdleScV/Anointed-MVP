export type InstructorExpertise = 
  | 'Biblical Studies'
  | 'Hebrew'
  | 'Greek'
  | 'Old Testament'
  | 'New Testament'
  | 'Theology'
  | 'Leadership'
  | 'Ministry'
  | 'Missions'
  | 'Church Planting'
  | 'Pastoral Care'
  | 'Christian Ethics'
  | 'Church History'
  | 'Counseling'
  | 'Youth Ministry'
  | 'Worship'
  | 'Evangelism'
  | 'Discipleship';

export interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  courses: number;
  students: number;
  rating: number;
  expertise: InstructorExpertise[];
  experience: number;
  education: string[];
  certifications: string[];
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}
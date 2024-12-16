import { useState, useMemo } from 'react';
import { Instructor, InstructorExpertise } from '../types/instructor';
const mockInstructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Biblical Studies Professor",
    bio: "Dr. Johnson has over 15 years of experience teaching Biblical studies and theology. She specializes in Old Testament interpretation and Hebrew language studies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    courses: 12,
    students: 2500,
    rating: 4.9,
    expertise: ['Biblical Studies', 'Hebrew', 'Old Testament', 'Theology'],
    experience: 15,
    education: [
      "Ph.D. in Biblical Studies, Oxford University",
      "M.Div., Fuller Theological Seminary",
      "B.A. in Theology, Wheaton College"
    ],
    certifications: [
      "Advanced Biblical Hebrew Certificate",
      "Ancient Near Eastern Studies Certificate"
    ],
    socialMedia: {
      twitter: "https://twitter.com/drsjohnson",
      linkedin: "https://linkedin.com/in/drsjohnson"
    }
  },
  {
    id: 2,
    name: "Pastor Michael Chen",
    title: "Leadership & Ministry Expert",
    bio: "Pastor Chen combines practical ministry experience with academic excellence, helping leaders develop both spiritually and professionally.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    courses: 8,
    students: 1800,
    rating: 4.8,
    expertise: ['Leadership', 'Ministry', 'Church Planting', 'Pastoral Care'],
    experience: 12,
    education: [
      "D.Min. in Leadership, Dallas Theological Seminary",
      "M.Div., Trinity Evangelical Divinity School",
      "B.S. in Business Administration, UC Berkeley"
    ],
    certifications: [
      "Certified Leadership Coach",
      "Church Planting Certificate"
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    title: "New Testament Scholar",
    bio: "Dr. Carter specializes in the Greek language and its application to New Testament studies. She has published multiple works on Pauline theology.",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=800",
    courses: 10,
    students: 2000,
    rating: 4.7,
    expertise: ['New Testament', 'Greek', 'Theology'],
    experience: 14,
    education: [
      "Ph.D. in New Testament Studies, Cambridge University",
      "M.A. in Biblical Languages, Gordon-Conwell Theological Seminary",
      "B.A. in Religious Studies, Baylor University"
    ],
    certifications: [
      "Advanced Greek Studies Certificate"
    ]
  },
  {
    id: 4,
    name: "Rev. Daniel Morales",
    title: "Missions and Evangelism Specialist",
    bio: "Rev. Morales has over two decades of experience leading missions teams globally and mentoring leaders in cross-cultural evangelism.",
    image: "https://images.unsplash.com/photo-1520975915941-09aa9bd7aef2?auto=format&fit=crop&q=80&w=800",
    courses: 6,
    students: 1500,
    rating: 4.6,
    expertise: ['Missions', 'Evangelism', 'Discipleship'],
    experience: 20,
    education: [
      "M.Div. in Missions, Liberty University",
      "B.A. in Sociology, University of Texas"
    ],
    certifications: [
      "Certified Cross-Cultural Trainer"
    ]
  },
  {
    id: 5,
    name: "Dr. Rachel Nguyen",
    title: "Counseling and Pastoral Care Specialist",
    bio: "Dr. Nguyen integrates biblical principles with psychological insights to help equip counselors and church leaders for effective pastoral care.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    courses: 15,
    students: 3000,
    rating: 4.9,
    expertise: ['Counseling', 'Pastoral Care', 'Christian Ethics'],
    experience: 18,
    education: [
      "Ph.D. in Counseling Psychology, Biola University",
      "M.Div., Golden Gate Baptist Theological Seminary",
      "B.A. in Psychology, UCLA"
    ],
    certifications: [
      "Licensed Pastoral Counselor"
    ]
  },
  {
    id: 6,
    name: "Dr. Thomas Lee",
    title: "Church History Expert",
    bio: "Dr. Lee brings history to life with his engaging lectures on early church development, reformations, and their impact on modern theology.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    courses: 9,
    students: 2200,
    rating: 4.8,
    expertise: ['Church History', 'Theology', 'Leadership'],
    experience: 25,
    education: [
      "Ph.D. in Church History, Princeton Theological Seminary",
      "M.A. in Historical Theology, Duke University",
      "B.A. in History, Harvard University"
    ],
    certifications: [
      "Historical Theology Specialist Certificate"
    ]
  },
  {
    id: 7,
    name: "Dr. Grace Patel",
    title: "Worship and Youth Ministry Leader",
    bio: "Dr. Patel combines her passion for worship arts with practical strategies for engaging youth in meaningful ministry experiences.",
    image: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?auto=format&fit=crop&q=80&w=800",
    courses: 11,
    students: 2600,
    rating: 4.8,
    expertise: ['Worship', 'Youth Ministry', 'Discipleship'],
    experience: 13,
    education: [
      "Ph.D. in Worship Studies, Regent University",
      "M.A. in Youth Ministry, Bethel Seminary",
      "B.A. in Music, Juilliard"
    ],
    certifications: [
      "Certified Worship Leader"
    ]
  },
  {
    id: 8,
    name: "Rev. Samuel Green",
    title: "Christian Ethics Educator",
    bio: "Rev. Green is a thought leader in Christian ethics, addressing contemporary issues with a biblical perspective.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800",
    courses: 7,
    students: 1700,
    rating: 4.7,
    expertise: ['Christian Ethics', 'Pastoral Care', 'Theology'],
    experience: 16,
    education: [
      "M.Div. in Ethics, Yale Divinity School",
      "B.A. in Philosophy, University of Chicago"
    ],
    certifications: [
      "Ethics and Leadership Certificate"
    ]
  }
];

export const useInstructors = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | InstructorExpertise>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInstructors = useMemo(() => {
    let filtered = mockInstructors;

    if (searchQuery) {
      filtered = filtered.filter(instructor =>
        instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instructor.expertise.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(instructor =>
        instructor.expertise.includes(selectedCategory)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const getInstructorById = (id: number) => {
    return mockInstructors.find(instructor => instructor.id === id);
  };

  return {
    instructors: filteredInstructors,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    getInstructorById
  };
};
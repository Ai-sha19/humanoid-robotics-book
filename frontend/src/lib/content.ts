// Content metadata structure for the textbook

export type Chapter = {
  id: number;
  slug: string;
  title: string;
  moduleId: number;
  moduleTitle: string;
  order: number;
  wordCount: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description?: string;
  estimatedReadingTime: number; // in minutes
};

export type Module = {
  id: number;
  title: string;
  description: string;
  order: number;
  totalChapters: number;
};

export type ChapterTranslation = {
  chapterId: number;
  language: string;
  title: string;
  content: string;
  isApproved: boolean;
};

// Mock data for initial implementation
export const mockModules: Module[] = [
  {
    id: 1,
    title: 'Foundations of Physical AI',
    description: 'Introduction to Physical AI concepts and principles',
    order: 1,
    totalChapters: 2
  },
  {
    id: 2,
    title: 'Humanoid Robotics Fundamentals',
    description: 'Core concepts in humanoid robot design and control',
    order: 2,
    totalChapters: 2
  },
  {
    id: 3,
    title: 'Advanced Control Systems',
    description: 'Advanced techniques for humanoid robot control',
    order: 3,
    totalChapters: 1
  },
  {
    id: 4,
    title: 'Real-world Applications',
    description: 'Practical applications of Physical AI and humanoid robots',
    order: 4,
    totalChapters: 1
  }
];

export const mockChapters: Chapter[] = [
  {
    id: 1,
    slug: 'introduction-to-physical-ai',
    title: 'Introduction to Physical AI',
    moduleId: 1,
    moduleTitle: 'Foundations of Physical AI',
    order: 1,
    wordCount: 2500,
    difficulty: 'beginner',
    description: 'Overview of Physical AI concepts',
    estimatedReadingTime: 10
  },
  {
    id: 2,
    slug: 'robotics-fundamentals',
    title: 'Robotics Fundamentals',
    moduleId: 1,
    moduleTitle: 'Foundations of Physical AI',
    order: 2,
    wordCount: 3200,
    difficulty: 'beginner',
    description: 'Basic robotics concepts',
    estimatedReadingTime: 13
  },
  {
    id: 3,
    slug: 'humanoid-control-systems',
    title: 'Humanoid Control Systems',
    moduleId: 2,
    moduleTitle: 'Humanoid Robotics Fundamentals',
    order: 1,
    wordCount: 4100,
    difficulty: 'intermediate',
    description: 'Control systems for humanoid robots',
    estimatedReadingTime: 16
  },
  {
    id: 4,
    slug: 'machine-learning-for-robotics',
    title: 'Machine Learning for Robotics',
    moduleId: 2,
    moduleTitle: 'Humanoid Robotics Fundamentals',
    order: 2,
    wordCount: 3800,
    difficulty: 'intermediate',
    description: 'ML applications in robotics',
    estimatedReadingTime: 15
  },
  {
    id: 5,
    slug: 'advanced-humanoid-locomotion',
    title: 'Advanced Humanoid Locomotion',
    moduleId: 3,
    moduleTitle: 'Advanced Control Systems',
    order: 1,
    wordCount: 4500,
    difficulty: 'advanced',
    description: 'Advanced locomotion techniques',
    estimatedReadingTime: 18
  },
  {
    id: 6,
    slug: 'real-world-applications',
    title: 'Real-world Applications',
    moduleId: 4,
    moduleTitle: 'Real-world Applications',
    order: 1,
    wordCount: 3600,
    difficulty: 'intermediate',
    description: 'Practical applications of Physical AI',
    estimatedReadingTime: 14
  }
];
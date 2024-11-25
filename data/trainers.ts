export interface Trainer {
  id: string
  name: string
  role: string
  image: string
  bio: string
  specialties: string[]
  experience: string
  certifications: string[]
  socialMedia: {
    instagram?: string
    twitter?: string
    linkedin?: string
  }
  schedule: {
    [key: string]: string[]
  }
}

export const trainers: Trainer[] = [
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Head Trainer',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    bio: 'With over a decade of experience in fitness training, John specializes in strength training and functional fitness. His passion lies in helping clients achieve their personal best.',
    specialties: ['Strength Training', 'Functional Fitness', 'HIIT', 'Nutrition Planning'],
    experience: '12 years',
    certifications: [
      'NASM Certified Personal Trainer',
      'CrossFit Level 2 Trainer',
      'Precision Nutrition Coach'
    ],
    socialMedia: {
      instagram: 'johnsmith_fitness',
      twitter: 'johnsmith_fit',
      linkedin: 'john-smith-fitness'
    },
    schedule: {
      Monday: ['6:00 AM - 12:00 PM', '4:00 PM - 8:00 PM'],
      Tuesday: ['7:00 AM - 1:00 PM', '3:00 PM - 7:00 PM'],
      Wednesday: ['6:00 AM - 12:00 PM', '4:00 PM - 8:00 PM'],
      Thursday: ['7:00 AM - 1:00 PM', '3:00 PM - 7:00 PM'],
      Friday: ['6:00 AM - 12:00 PM', '4:00 PM - 8:00 PM'],
      Saturday: ['8:00 AM - 2:00 PM'],
      Sunday: ['Rest Day']
    }
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Yoga & Wellness Coach',
    image: 'https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?q=80&w=1974&auto=format&fit=crop',
    bio: 'Sarah brings mindfulness and wellness together in her holistic approach to fitness. Her yoga and meditation classes help clients find balance in their busy lives.',
    specialties: ['Yoga', 'Meditation', 'Flexibility Training', 'Stress Management'],
    experience: '8 years',
    certifications: [
      'RYT-500 Yoga Instructor',
      'Mindfulness Meditation Teacher',
      'Wellness Coach Certification'
    ],
    socialMedia: {
      instagram: 'sarah_wellness',
      linkedin: 'sarah-johnson-wellness'
    },
    schedule: {
      Monday: ['9:00 AM - 2:00 PM', '5:00 PM - 8:00 PM'],
      Tuesday: ['8:00 AM - 1:00 PM', '4:00 PM - 7:00 PM'],
      Wednesday: ['9:00 AM - 2:00 PM', '5:00 PM - 8:00 PM'],
      Thursday: ['8:00 AM - 1:00 PM', '4:00 PM - 7:00 PM'],
      Friday: ['9:00 AM - 2:00 PM'],
      Saturday: ['10:00 AM - 3:00 PM'],
      Sunday: ['Rest Day']
    }
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    role: 'Performance Specialist',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1974&auto=format&fit=crop',
    bio: 'Michael specializes in sports performance and rehabilitation. His evidence-based approach helps athletes and fitness enthusiasts reach their peak performance.',
    specialties: ['Sports Performance', 'Injury Prevention', 'Movement Analysis', 'Strength & Conditioning'],
    experience: '10 years',
    certifications: [
      'CSCS Certification',
      'Performance Enhancement Specialist',
      'Corrective Exercise Specialist'
    ],
    socialMedia: {
      instagram: 'chen_performance',
      twitter: 'michaelchen_fit',
      linkedin: 'michael-chen-performance'
    },
    schedule: {
      Monday: ['7:00 AM - 1:00 PM', '3:00 PM - 7:00 PM'],
      Tuesday: ['8:00 AM - 2:00 PM', '4:00 PM - 8:00 PM'],
      Wednesday: ['7:00 AM - 1:00 PM', '3:00 PM - 7:00 PM'],
      Thursday: ['8:00 AM - 2:00 PM', '4:00 PM - 8:00 PM'],
      Friday: ['7:00 AM - 1:00 PM', '3:00 PM - 7:00 PM'],
      Saturday: ['9:00 AM - 2:00 PM'],
      Sunday: ['Rest Day']
    }
  },
  {
    id: 'emma-davis',
    name: 'Emma Davis',
    role: 'Dance & Cardio Specialist',
    image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1974&auto=format&fit=crop',
    bio: 'Emma brings energy and rhythm to every session. Her dance-based workouts make fitness fun while delivering serious results.',
    specialties: ['Dance Fitness', 'Cardio Training', 'Group Classes', 'Weight Loss'],
    experience: '7 years',
    certifications: [
      'ACE Group Fitness Instructor',
      'Zumba® Certified Instructor',
      'AFAA Personal Trainer'
    ],
    socialMedia: {
      instagram: 'emma_dance_fit',
      twitter: 'emmadavis_fit'
    },
    schedule: {
      Monday: ['8:00 AM - 1:00 PM', '4:00 PM - 8:00 PM'],
      Tuesday: ['9:00 AM - 2:00 PM', '5:00 PM - 8:00 PM'],
      Wednesday: ['8:00 AM - 1:00 PM', '4:00 PM - 8:00 PM'],
      Thursday: ['9:00 AM - 2:00 PM', '5:00 PM - 8:00 PM'],
      Friday: ['8:00 AM - 2:00 PM'],
      Saturday: ['10:00 AM - 3:00 PM'],
      Sunday: ['Rest Day']
    }
  },
  {
    id: 'marcus-thompson',
    name: 'Marcus Thompson',
    role: 'Boxing & MMA Coach',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1970&auto=format&fit=crop',
    bio: 'Marcus combines traditional boxing techniques with modern fitness methods to create challenging and effective workouts.',
    specialties: ['Boxing', 'MMA Training', 'Self Defense', 'Conditioning'],
    experience: '15 years',
    certifications: [
      'USA Boxing Coach',
      'MMA Conditioning Specialist',
      'First Aid & CPR Certified'
    ],
    socialMedia: {
      instagram: 'marcus_boxing',
      twitter: 'marcusthompson_mma',
      linkedin: 'marcus-thompson-boxing'
    },
    schedule: {
      Monday: ['7:00 AM - 12:00 PM', '4:00 PM - 9:00 PM'],
      Tuesday: ['7:00 AM - 12:00 PM', '4:00 PM - 9:00 PM'],
      Wednesday: ['7:00 AM - 12:00 PM', '4:00 PM - 9:00 PM'],
      Thursday: ['7:00 AM - 12:00 PM', '4:00 PM - 9:00 PM'],
      Friday: ['7:00 AM - 12:00 PM', '4:00 PM - 8:00 PM'],
      Saturday: ['9:00 AM - 2:00 PM'],
      Sunday: ['Rest Day']
    }
  },
  {
    id: 'sophia-rodriguez',
    name: 'Sophia Rodriguez',
    role: 'Nutrition & Wellness Expert',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    bio: 'Sophia helps clients transform their lives through proper nutrition and sustainable lifestyle changes.',
    specialties: ['Nutrition Planning', 'Weight Management', 'Meal Prep', 'Lifestyle Coaching'],
    experience: '9 years',
    certifications: [
      'Certified Nutritionist',
      'Precision Nutrition Level 2',
      'Wellness Coach Certification'
    ],
    socialMedia: {
      instagram: 'sophia_nutrition',
      linkedin: 'sophia-rodriguez-nutrition'
    },
    schedule: {
      Monday: ['10:00 AM - 6:00 PM'],
      Tuesday: ['10:00 AM - 6:00 PM'],
      Wednesday: ['10:00 AM - 6:00 PM'],
      Thursday: ['10:00 AM - 6:00 PM'],
      Friday: ['10:00 AM - 4:00 PM'],
      Saturday: ['By Appointment'],
      Sunday: ['Rest Day']
    }
  }
]

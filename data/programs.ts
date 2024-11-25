export interface Program {
  id: string
  title: string
  description: string
  image: string
  features: string[]
  longDescription: string
  schedule: {
    [key: string]: string[]
  }
  pricing: {
    monthly: number
    quarterly: number
    yearly: number
  }
  requirements: string[]
  benefits: string[]
  instructors: string[]
  equipment: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const programs: Program[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our comprehensive weight training program.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070',
    features: [
      'Personal trainer guidance',
      'Custom workout plans',
      'Nutrition advice',
      'Progress tracking',
      'Access to premium equipment'
    ],
    longDescription: 'Our Strength Training program is designed to help you build muscle, increase strength, and improve overall fitness. Whether you are a beginner or an experienced lifter, our certified trainers will create a personalized program tailored to your goals.\n\nThe program includes a mix of compound exercises and isolation movements, ensuring balanced muscle development and optimal strength gains. You will learn proper form and technique while progressively increasing weights and complexity.',
    schedule: {
      Monday: ['6:00 AM - 9:00 PM'],
      Tuesday: ['6:00 AM - 9:00 PM'],
      Wednesday: ['6:00 AM - 9:00 PM'],
      Thursday: ['6:00 AM - 9:00 PM'],
      Friday: ['6:00 AM - 8:00 PM'],
      Saturday: ['8:00 AM - 6:00 PM'],
      Sunday: ['8:00 AM - 4:00 PM']
    },
    pricing: {
      monthly: 99,
      quarterly: 269,
      yearly: 999
    },
    requirements: [
      'Basic fitness level',
      'Proper workout attire',
      'Water bottle',
      'Towel'
    ],
    benefits: [
      'Increased muscle mass',
      'Improved strength',
      'Better posture',
      'Enhanced metabolism',
      'Reduced risk of injury',
      'Increased bone density'
    ],
    instructors: [
      'John Smith',
      'Michael Chen',
      'Marcus Thompson'
    ],
    equipment: [
      'Free weights',
      'Weight machines',
      'Squat racks',
      'Benches',
      'Cable machines',
      'Olympic platforms'
    ],
    faqs: [
      {
        question: 'Is this program suitable for beginners?',
        answer: 'Yes, our program is designed for all fitness levels. Our trainers will adjust the workouts based on your experience and capabilities.'
      },
      {
        question: 'How often should I train?',
        answer: 'We recommend 3-4 sessions per week for optimal results, with rest days in between for proper recovery.'
      },
      {
        question: 'Will I get a personalized workout plan?',
        answer: 'Yes, each member receives a customized workout plan based on their goals, fitness level, and schedule.'
      }
    ]
  },
  {
    id: 'cardio-fitness',
    title: 'Cardio Fitness',
    description: 'Improve your endurance and heart health with our high-energy cardio sessions.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070',
    features: [
      'Group classes',
      'Heart rate monitoring',
      'Progress tracking',
      'Personalized goals',
      'Variety of equipment'
    ],
    longDescription: 'Our Cardio Fitness program is designed to improve your cardiovascular health, boost endurance, and help you achieve your weight management goals. Through a variety of high-energy workouts and classes, you will enhance your stamina while burning calories effectively.\n\nClasses include a mix of HIIT, steady-state cardio, and interval training, keeping your workouts engaging and effective. Our certified instructors will help you maintain proper form and intensity throughout each session.',
    schedule: {
      Monday: ['7:00 AM - 8:00 PM'],
      Tuesday: ['7:00 AM - 8:00 PM'],
      Wednesday: ['7:00 AM - 8:00 PM'],
      Thursday: ['7:00 AM - 8:00 PM'],
      Friday: ['7:00 AM - 7:00 PM'],
      Saturday: ['8:00 AM - 5:00 PM'],
      Sunday: ['8:00 AM - 3:00 PM']
    },
    pricing: {
      monthly: 89,
      quarterly: 239,
      yearly: 899
    },
    requirements: [
      'Any fitness level',
      'Athletic shoes',
      'Workout clothes',
      'Water bottle',
      'Towel'
    ],
    benefits: [
      'Improved cardiovascular health',
      'Increased endurance',
      'Weight management',
      'Reduced stress',
      'Better sleep quality',
      'Enhanced mood'
    ],
    instructors: [
      'Emma Davis',
      'Sarah Johnson'
    ],
    equipment: [
      'Treadmills',
      'Ellipticals',
      'Stationary bikes',
      'Rowing machines',
      'Stair climbers',
      'Jump ropes'
    ],
    faqs: [
      {
        question: 'How long are the cardio sessions?',
        answer: 'Classes typically run for 45-60 minutes, including warm-up and cool-down periods.'
      },
      {
        question: 'Do I need to be fit to start?',
        answer: 'No, our program accommodates all fitness levels. We will help you build endurance gradually.'
      },
      {
        question: 'What should I eat before a session?',
        answer: 'We recommend a light meal 2-3 hours before, or a small snack 30 minutes before class.'
      }
    ]
  },
  {
    id: 'yoga-flexibility',
    title: 'Yoga & Flexibility',
    description: 'Enhance flexibility and find inner peace with our expert-led yoga classes.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020',
    features: [
      'Expert instructors',
      'All skill levels',
      'Meditation sessions',
      'Stress relief',
      'Peaceful environment'
    ],
    longDescription: 'Our Yoga & Flexibility program combines traditional yoga practices with modern flexibility training to improve your range of motion, reduce stress, and enhance overall well-being. Whether you are new to yoga or an experienced practitioner, our classes offer a peaceful environment to develop your practice.\n\nClasses include various yoga styles such as Hatha, Vinyasa, and Yin, along with dedicated flexibility training sessions. Our experienced instructors provide modifications and adjustments to ensure safe and effective practice.',
    schedule: {
      Monday: ['8:00 AM - 7:00 PM'],
      Tuesday: ['8:00 AM - 7:00 PM'],
      Wednesday: ['8:00 AM - 7:00 PM'],
      Thursday: ['8:00 AM - 7:00 PM'],
      Friday: ['8:00 AM - 6:00 PM'],
      Saturday: ['9:00 AM - 4:00 PM'],
      Sunday: ['9:00 AM - 2:00 PM']
    },
    pricing: {
      monthly: 79,
      quarterly: 219,
      yearly: 799
    },
    requirements: [
      'Yoga mat (rentals available)',
      'Comfortable clothing',
      'Water bottle',
      'Small towel'
    ],
    benefits: [
      'Improved flexibility',
      'Better posture',
      'Reduced stress',
      'Enhanced mindfulness',
      'Increased strength',
      'Better balance'
    ],
    instructors: [
      'Sarah Johnson',
      'Sophia Rodriguez'
    ],
    equipment: [
      'Yoga mats',
      'Blocks',
      'Straps',
      'Bolsters',
      'Blankets',
      'Meditation cushions'
    ],
    faqs: [
      {
        question: 'Do I need to bring my own mat?',
        answer: 'While we recommend having your own mat, we offer mat rentals for a small fee.'
      },
      {
        question: 'What type of yoga is best for beginners?',
        answer: 'We recommend starting with our Hatha or Gentle Flow classes to learn the basics.'
      },
      {
        question: 'How often should I practice?',
        answer: 'Two to three times per week is recommended for beginners, but you can practice daily if you wish.'
      }
    ]
  }
]

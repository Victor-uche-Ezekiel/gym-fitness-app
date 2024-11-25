export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  description: string;
  features: string[];
  isPopular?: boolean;
  savings?: number;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29.99,
    billingPeriod: 'monthly',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Access to gym facilities',
      'Basic equipment usage',
      'Locker room access',
      'Free WiFi',
      'Water fountain access',
      '2 Guest passes per month'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 49.99,
    billingPeriod: 'monthly',
    description: 'Ideal for fitness enthusiasts who want more',
    isPopular: true,
    features: [
      'All Basic features',
      'Group fitness classes',
      'Personal trainer consultation',
      'Nutrition guidance',
      'Access to swimming pool',
      'Sauna & spa access',
      'Towel service',
      '4 Guest passes per month'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 79.99,
    billingPeriod: 'monthly',
    description: 'The ultimate fitness experience',
    features: [
      'All Premium features',
      'Unlimited personal training',
      'Priority class booking',
      'Exclusive member events',
      'Massage therapy sessions',
      'Private locker',
      'Valet parking',
      'Unlimited guest passes'
    ]
  },
  {
    id: 'basic-yearly',
    name: 'Basic Yearly',
    price: 299.99,
    billingPeriod: 'yearly',
    description: 'Perfect for beginners starting their fitness journey',
    savings: 59.89,
    features: [
      'Access to gym facilities',
      'Basic equipment usage',
      'Locker room access',
      'Free WiFi',
      'Water fountain access',
      '2 Guest passes per month'
    ]
  },
  {
    id: 'premium-yearly',
    name: 'Premium Yearly',
    price: 499.99,
    billingPeriod: 'yearly',
    description: 'Ideal for fitness enthusiasts who want more',
    isPopular: true,
    savings: 99.89,
    features: [
      'All Basic features',
      'Group fitness classes',
      'Personal trainer consultation',
      'Nutrition guidance',
      'Access to swimming pool',
      'Sauna & spa access',
      'Towel service',
      '4 Guest passes per month'
    ]
  },
  {
    id: 'elite-yearly',
    name: 'Elite Yearly',
    price: 799.99,
    billingPeriod: 'yearly',
    description: 'The ultimate fitness experience',
    savings: 159.89,
    features: [
      'All Premium features',
      'Unlimited personal training',
      'Priority class booking',
      'Exclusive member events',
      'Massage therapy sessions',
      'Private locker',
      'Valet parking',
      'Unlimited guest passes'
    ]
  }
];

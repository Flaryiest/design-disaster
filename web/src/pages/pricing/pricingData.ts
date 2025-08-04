export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  buttonText: string;
  buttonType: 'primary' | 'secondary' | 'enterprise';
  features: Feature[];
  isFeatured?: boolean;
  isEnterprise?: boolean;
  badge?: string;
}

export interface Feature {
  text: string;
  icon: 'check' | 'plus';
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'All essential features to get you started.',
    monthlyPrice: 0,
    annualPrice: 0,
    buttonText: 'Get Started Free',
    buttonType: 'secondary',
    features: [
      {
        text: '5 AI responses per day',
        icon: 'check'
      },
      {
        text: 'Basic homework assistance',
        icon: 'check'
      },
      {
        text: 'Standard response speed',
        icon: 'check'
      },
      {
        text: 'Community support',
        icon: 'check'
      },
      {
        text: 'Basic document uploads',
        icon: 'check'
      }
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Enhanced features for dedicated learners.',
    monthlyPrice: 5,
    annualPrice: 50, // $4.17/month when billed annually
    buttonText: 'Start Premium',
    buttonType: 'primary',
    isFeatured: true,
    badge: 'Most Popular',
    features: [
      {
        text: '50 AI responses per day',
        icon: 'check'
      },
      {
        text: 'Advanced homework help with explanations',
        icon: 'check'
      },
      {
        text: 'Faster response times',
        icon: 'check',
        badge: '≤5 sec'
      },
      {
        text: 'Priority email support',
        icon: 'check'
      },
      {
        text: 'Multiple document formats supported',
        icon: 'check'
      },
      {
        text: 'Plus everything in Free',
        icon: 'plus'
      }
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Unlimited access for power users.',
    monthlyPrice: 20,
    annualPrice: 200, // $16.67/month when billed annually
    buttonText: 'Go Pro',
    buttonType: 'secondary',
    features: [
      {
        text: 'Unlimited AI responses',
        icon: 'check'
      },
      {
        text: 'Access to most advanced AI models',
        icon: 'check'
      },
      {
        text: 'Instant responses',
        icon: 'check',
        badge: '≤1 sec'
      },
      {
        text: 'Personalized study recommendations',
        icon: 'check'
      },
      {
        text: 'Custom learning paths and goals',
        icon: 'check'
      },
      {
        text: 'Advanced analytics and progress tracking',
        icon: 'check'
      },
      {
        text: '24/7 priority support',
        icon: 'check'
      },
      {
        text: 'Plus everything in Premium',
        icon: 'plus'
      }
    ]
  }
];

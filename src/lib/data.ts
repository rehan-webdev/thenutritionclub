import type { IconName } from "./ui";

export const clinic = {
  name: "The Nutrition Club",
  tagline: "Clinical Nutrition & Lifestyle Care",
  phone: "+92 300 982 45120",
  email: "hello@thenutritionclub.com",
  address: "3rd Floor, Wellness Square, Gulberg III, Lahore 54660",
  hours: "Mon – Sat · 8:00 AM – 8:00 PM",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Dietitians", href: "#team" },
  { label: "Plans", href: "#plans" },
  { label: "Insights", href: "#insights" },
];

export const heroStats = [
  { value: "12K+", label: "Members coached" },
  { value: "94%", label: "Reach their goal" },
  { value: "18", label: "Certified dietitians" },
  { value: "4.9", label: "Average rating" },
];

export const highlights: { icon: IconName; title: string; copy: string }[] = [
  { icon: "Flask", title: "Lab-backed diagnosis", copy: "Blood work, body composition & metabolic testing before any plan." },
  { icon: "Apple", title: "Food you already love", copy: "Regional, home-style menus — no imported superfoods required." },
  { icon: "Chat", title: "Daily dietitian chat", copy: "Message your dietitian any day; replies within 4 working hours." },
  { icon: "Shield", title: "No crash diets, ever", copy: "Evidence-based protocols reviewed by our clinical board." },
];

export const programs: {
  icon: IconName;
  title: string;
  copy: string;
  points: string[];
  duration: string;
  from: string;
}[] = [
  {
    icon: "Scale",
    title: "Weight Management",
    copy: "Sustainable fat loss or healthy weight gain built around your metabolism, not a template.",
    points: ["Body composition tracking", "Metabolic rate testing", "Habit coaching"],
    duration: "12 weeks",
    from: "PKR 14,999",
  },
  {
    icon: "Heart",
    title: "Diabetes & Heart Care",
    copy: "Glycemic and lipid control through therapeutic nutrition, coordinated with your physician.",
    points: ["CGM data review", "Sodium & lipid plan", "Medication-aware menus"],
    duration: "16 weeks",
    from: "PKR 16,999",
  },
  {
    icon: "Stomach",
    title: "Gut Health & IBS",
    copy: "Low-FODMAP reintroduction, microbiome support and bloating relief that actually lasts.",
    points: ["Trigger elimination", "Gut symptom diary", "Probiotic guidance"],
    duration: "10 weeks",
    from: "PKR 13,999",
  },
  {
    icon: "Activity",
    title: "Sports Nutrition",
    copy: "Fuel strategy, hydration and recovery macros for athletes and serious gym-goers.",
    points: ["Training-day macros", "Supplement audit", "Race-day fuelling"],
    duration: "8 weeks",
    from: "PKR 18,999",
  },
  {
    icon: "Leaf",
    title: "PCOS & Hormonal Health",
    copy: "Insulin-sensitising nutrition and cycle-aware plans for PCOS, thyroid and fertility.",
    points: ["Insulin resistance plan", "Cycle-phase meals", "Fertility prep"],
    duration: "16 weeks",
    from: "PKR 17,999",
  },
  {
    icon: "Baby",
    title: "Mother & Child",
    copy: "Prenatal, postnatal and paediatric nutrition — from first trimester to fussy eaters.",
    points: ["Trimester-wise plans", "Lactation support", "Kid-friendly menus"],
    duration: "Ongoing",
    from: "PKR 12,999",
  },
  {
    icon: "Flask",
    title: "Clinical & Renal Nutrition",
    copy: "Therapeutic diets for kidney, liver, oncology and post-surgery recovery patients.",
    points: ["Protein & potassium control", "Tube-feed planning", "Recovery nutrition"],
    duration: "Custom",
    from: "PKR 20,999",
  },
  {
    icon: "Building",
    title: "Corporate Wellness",
    copy: "Team health screenings, cafeteria audits and group workshops for happier offices.",
    points: ["On-site screening", "Canteen redesign", "Live workshops"],
    duration: "Quarterly",
    from: "Custom",
  },
];

export const steps = [
  {
    no: "01",
    title: "Free discovery call",
    copy: "A 15-minute call to understand your history, goals, lifestyle and medical background.",
  },
  {
    no: "02",
    title: "Full body assessment",
    copy: "BIA body composition, blood report review and a 3-day food-pattern analysis.",
  },
  {
    no: "03",
    title: "Your personal blueprint",
    copy: "A dietitian-designed plan with recipes, grocery lists and eating-out playbooks.",
  },
  {
    no: "04",
    title: "Weekly reviews & tweaks",
    copy: "Progress check-ins, chat support and plan adjustments until the habit sticks.",
  },
];

export const team = [
  {
    name: "Dr. Ayesha Khan",
    role: "Chief Clinical Dietitian",
    creds: "PhD Nutrition · RD · 14 yrs",
    focus: ["Metabolic health", "Diabetes reversal"],
    img: "https://images.pexels.com/photos/12889997/pexels-photo-12889997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
  {
    name: "Hamza Malik",
    role: "Sports Nutritionist",
    creds: "MSc Sports Nutrition · 9 yrs",
    focus: ["Performance", "Body recomposition"],
    img: "https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
  {
    name: "Dr. Sana Ahmed",
    role: "Gut & Hormone Specialist",
    creds: "MD · Integrative Nutrition · 11 yrs",
    focus: ["PCOS", "IBS & FODMAP"],
    img: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
  {
    name: "Maryam Shah",
    role: "Paediatric Dietitian",
    creds: "RD · Child Nutrition · 8 yrs",
    focus: ["Kids & teens", "Prenatal care"],
    img: "https://images.pexels.com/photos/20002955/pexels-photo-20002955.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  },
];

export const plans = [
  {
    name: "Kickstart",
    blurb: "A focused reset for anyone starting their nutrition journey.",
    monthly: 24999,
    quarterly: 62999,
    features: [
      "1 dietitian consultation / month",
      "Personalised 4-week meal plan",
      "Grocery & recipe library",
      "WhatsApp support (Mon–Fri)",
      "Monthly progress report",
    ],
    highlight: false,
  },
  {
    name: "Transform",
    blurb: "Our most-loved plan — full clinical support with weekly reviews.",
    monthly: 44999,
    quarterly: 114999,
    features: [
      "Weekly 1-on-1 video consults",
      "BIA body composition every month",
      "Blood report interpretation",
      "Daily chat with your dietitian",
      "Workout & sleep guidance",
      "Eating-out & travel playbooks",
    ],
    highlight: true,
  },
  {
    name: "Clinical Pro",
    blurb: "Medically supervised care for chronic and complex conditions.",
    monthly: 79999,
    quarterly: 209999,
    features: [
      "Dedicated senior dietitian + MD review",
      "Unlimited consults & plan changes",
      "CGM / lab coordination",
      "Family meal planning included",
      "Quarterly in-clinic assessment",
      "Priority same-day responses",
    ],
    highlight: false,
  },
];

export const results = [
  { metric: "-18 kg", label: "Average loss in 6 months", sub: "Transform members, 2025" },
  { metric: "-1.9%", label: "Average HbA1c drop", sub: "Diabetes care cohort" },
  { metric: "82%", label: "Reported less bloating", sub: "Within first 4 weeks" },
  { metric: "9/10", label: "Would recommend us", sub: "Post-program survey" },
];

export const testimonials = [
  {
    quote:
      "I came in pre-diabetic with an HbA1c of 6.4. Eight months later it's 5.3 and I eat rice every single day. They rebuilt my plate, not my personality.",
    name: "Hira Siddiqui",
    meta: "Marketing lead · Lost 14 kg",
    img: "https://images.pexels.com/photos/37722825/pexels-photo-37722825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
  {
    quote:
      "As a marathoner I'd tried four coaches. Hamza was the first to look at my blood work before touching my macros. Personal best at Lahore this year.",
    name: "Bilal Khan",
    meta: "Endurance athlete · 3:12 PB",
    img: "https://images.pexels.com/photos/15019490/pexels-photo-15019490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
  {
    quote:
      "PCOS made me feel like my body was working against me. Dr. Sana's cycle-based plan brought my periods back in four months, without any crash dieting.",
    name: "Fatima Sheikh",
    meta: "Architect · PCOS program",
    img: "https://images.pexels.com/photos/8852029/pexels-photo-8852029.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
  {
    quote:
      "My son is the fussiest eater alive. Maryam turned mealtimes from a war zone into something we actually enjoy. He asks for saag now. Actual magic.",
    name: "Ali Raza",
    meta: "Parent · Mother & Child program",
    img: "https://images.pexels.com/photos/27544052/pexels-photo-27544052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300",
    rating: 5,
  },
];

export const posts = [
  {
    tag: "Weight Loss",
    title: "Why the scale lies: 5 better ways to measure progress",
    date: "12 Feb 2026",
    read: "6 min read",
    img: "https://images.pexels.com/photos/5966137/pexels-photo-5966137.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=560&w=840",
  },
  {
    tag: "Gut Health",
    title: "A dietitian's guide to fixing bloating in 14 days",
    date: "04 Feb 2026",
    read: "8 min read",
    img: "https://images.pexels.com/photos/28286236/pexels-photo-28286236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=560&w=840",
  },
  {
    tag: "Everyday Nutrition",
    title: "Protein for vegetarians: hitting 90g without powders",
    date: "27 Jan 2026",
    read: "5 min read",
    img: "https://images.pexels.com/photos/11058247/pexels-photo-11058247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=560&w=840",
  },
];

export const faqs = [
  {
    q: "Do I need to visit the clinic in person?",
    a: "Not at all. Around 70% of our members are fully online — consultations happen over secure video, and body-composition data can be logged from any smart scale. If you're in Lahore, you're welcome to use our in-clinic BIA and metabolic testing at no extra cost on the Transform and Clinical Pro plans.",
  },
  {
    q: "Will I have to give up rice, roti or my favourite foods?",
    a: "No. Our entire philosophy is built on the food already in your kitchen. We adjust portions, pairings and timing rather than banning food groups. Members regularly eat biryani, naan and dessert while still hitting their goals.",
  },
  {
    q: "How soon will I see results?",
    a: "Most members notice better energy, digestion and sleep within 2 weeks. Visible body-composition change typically appears between weeks 4 and 6. Clinical markers such as HbA1c or lipid profile are re-tested at the 3-month mark.",
  },
  {
    q: "Do you coordinate with my doctor?",
    a: "Yes, and we prefer to. Share your prescriptions and recent reports during onboarding and our clinical team will build a plan that respects your medication, dosage timing and any restrictions your physician has set.",
  },
  {
    q: "What if the plan isn't working for me?",
    a: "Plans are reviewed every week and rewritten as often as needed — there is no extra charge for revisions. If you complete 90 days of a program with full adherence and see no measurable progress, we extend your plan free until you do.",
  },
  {
    q: "Do you accept insurance or offer EMI?",
    a: "Several corporate health plans reimburse clinical nutrition therapy and we provide itemised invoices for claims. No-cost EMI is available on quarterly and annual packages through all major credit cards.",
  },
];

export const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
  "07:30 PM",
];

export const marqueeItems = [
  "Pakistan Nutrition & Dietetic Society",
  "Certified Diabetes Educators",
  "ISSN Sports Nutrition",
  "Monash FODMAP Trained",
  "PNAC Partner Labs",
  "Pakistan Paediatric Nutrition",
];

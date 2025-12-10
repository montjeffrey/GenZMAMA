export const BLOG_POSTS = [
    {
        id: 1,
        title: "5 Messy Play Ideas",
        category: "Activities",
        excerpt: "Get messy without the stress. Here are our favorite sensory bins.",
        content: "Sensory play is crucial for brain development! Here are 5 easy ways to get messy: 1. Mud Kitchen... 2. Rainbow Spaghetti... 3. Foam Party...",
        image: "/assets/placeholder-1.jpg",
        color: "terracotta"
    },
    {
        id: 2,
        title: "Toddler Meal Prep Hacks",
        category: "Nutrition",
        excerpt: "How to survive the picky eater phase with a smile.",
        content: "Picky eating is normal. Try these hacks: Use cookie cutters for sandwiches, serve 'rainbow' plates...",
        image: "/assets/placeholder-2.jpg",
        color: "forest"
    },
    {
        id: 3,
        title: "Sleep Training 101",
        category: "Parenting Tips",
        excerpt: "Gentle methods that actually work for sensitive sleepers.",
        content: "Sleep is elusive. Here's our gentle approach...",
        image: "/assets/placeholder-3.jpg",
        color: "brown"
    },
    {
        id: 4,
        title: "Best Wooden Toys 2024",
        category: "Product Reviews",
        excerpt: "Sustainable, durable, and fun. Our top picks.",
        content: "Plastic is out, wood is in. Here are the most durable toys...",
        image: "/assets/placeholder-1.jpg",
        color: "beige"
    },
    {
        id: 5,
        title: "Rainy Day Crafts",
        category: "Activities",
        excerpt: "Keep them entertained indoors with simple supplies.",
        content: "Raining again? Grab some paper plates and glue...",
        image: "/assets/placeholder-2.jpg",
        color: "terracotta"
    },
    {
        id: 6,
        title: "Self-Care for Mamas",
        category: "Parenting Tips",
        excerpt: "Because you can't pour from an empty cup.",
        content: "You matter too! 5 minute yoga, hot coffee...",
        image: "/assets/placeholder-3.jpg",
        color: "forest"
    }
];

export const CATEGORIES = ["All", "Parenting Tips", "Activities", "Nutrition", "Product Reviews"];

export type Review = {
    id: number;
    type: "polaroid" | "sticky";
    name: string;
    name_short?: string;
    role: string;
    content: string;
    date: string;
    rotation: number;
    color?: string;
};

export const REVIEWS: Review[] = [
    {
        id: 1,
        type: "polaroid",
        name: "Sarah M.",
        name_short: "Sarah",
        role: "Toddler Mom",
        content: "Mrs. A is literally a lifesaver. My daughter begs to go to her house. It's not just childcare, it's a whole vibe.",
        date: "Oct 2023",
        rotation: -2,
    },
    {
        id: 2,
        type: "sticky",
        name: "Jessica T.",
        name_short: "Jessica",
        role: "Working Mom",
        content: "Finally, someone who gets it. No judgment, just pure love and fun. The updates she sends are hilarious and so reassuring.",
        date: "Nov 2023",
        color: "bg-yellow-100",
        rotation: 3,
    },
    {
        id: 3,
        type: "polaroid",
        name: "Emily R.",
        name_short: "Emily",
        role: "Boy Mom",
        content: "The creative activities are next level. My son comes home with the coolest art projects (that are actually fridge-worthy).",
        date: "Sept 2023",
        rotation: 2,
    },
    {
        id: 4,
        type: "sticky",
        name: "Michelle K.",
        name_short: "Michelle",
        role: "Nurse & Mom",
        content: "Flexible, reliable, and honestly just the coolest person. I trust her completely with my twins.",
        date: "Dec 2023",
        color: "bg-pink-100",
        rotation: -4,
    },
    {
        id: 5,
        type: "polaroid",
        name: "Amanda L.",
        name_short: "Amanda",
        role: "First-time Mom",
        content: "I was so nervous leaving my baby, but Mrs. A made the transition so easy. She's basically family now.",
        date: "Jan 2024",
        rotation: 1,
    },
];

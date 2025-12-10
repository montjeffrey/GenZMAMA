
const fs = require('fs');

// Data from src/lib/data.ts
const BLOG_POSTS = [
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
];

const REVIEWS = [
    {
        id: 1,
        type: "polaroid",
        name: "Sarah M.",
        role: "Toddler Mom",
        content: "Mrs. A is literally a lifesaver. My daughter begs to go to her house. It's not just childcare, it's a whole vibe.",
        date: "Oct 2023",
        rotation: -2,
    },
    {
        id: 2,
        type: "sticky",
        name: "Jessica T.",
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
        role: "Boy Mom",
        content: "The creative activities are next level. My son comes home with the coolest art projects (that are actually fridge-worthy).",
        date: "Sept 2023",
        rotation: 2,
    },
    {
        id: 4,
        type: "sticky",
        name: "Michelle K.",
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
        role: "First-time Mom",
        content: "I was so nervous leaving my baby, but Mrs. A made the transition so easy. She's basically family now.",
        date: "Jan 2024",
        rotation: 1,
    },
];

const ndjson = [];

// Process Reviews
REVIEWS.forEach(review => {
    ndjson.push(JSON.stringify({
        _type: 'review',
        _id: `imported-review-${review.id}`,
        parentName: review.name,
        role: review.role,
        text: review.content,
        rating: 5,
        layoutType: review.type,
        stickyColor: review.color,
        rotation: review.rotation,
        date: review.date
    }));
});

// Process Posts
BLOG_POSTS.forEach(post => {
    ndjson.push(JSON.stringify({
        _type: 'post',
        _id: `imported-post-${post.id}`,
        title: post.title,
        slug: { _type: 'slug', current: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') },
        category: post.category,
        excerpt: post.excerpt,
        themeColor: post.color,
        publishedAt: new Date().toISOString(),
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [
                    { _type: 'span', text: post.content }
                ]
            }
        ]
    }));
});

fs.writeFileSync('seed.ndjson', ndjson.join('\n'));
console.log('Generated seed.ndjson');

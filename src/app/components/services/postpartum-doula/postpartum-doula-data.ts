export const postpartumDoulaContent = {
    hero: {
        title: "Your Village, Delivered.",
        promise: "Because bringing home a baby is a massive transition, and you shouldn't have to do it alone. Expert, compassionate postpartum doula care to nourish your body, calm your mind, and help your whole family thrive.",
        cta: "Find Your Village",
    },
    empathy: {
        title: "We Get It. The Fourth Trimester is Beautiful... and Brutal.",
        content: "Google can't fold your laundry, and a perfectly curated Instagram feed won't hold the baby so you can shower. A postpartum doula isn't a luxury reserved for celebrities—it's an investment in your physical recovery, your mental health, and your bond with your newborn. We provide the judgment-free, evidence-based support that modern parents actually need.",
        callout: {
            title: "Wait, is a Doula different from a Night Nanny?",
            description: "While night nannies focus solely on newborn sleep, postpartum doulas \"mother the mother\"—providing physical recovery support, emotional guidance, lactation/feeding support, and household management."
        }
    },
    included: {
        title: "What We Mean When We Say Support",
        subtitle: "More than just babysitting. Comprehensive care for the whole family.",
        items: [
            {
                id: "feeding",
                label: "Feeding Support",
                content: "Judgment-free guidance for chest/breastfeeding, pumping, or formula.",
                whyItMatters: "Ensures baby stays fed and you feel confident.",
            },
            {
                id: "recovery",
                label: "Parental Recovery",
                content: "Ensuring you eat, sleep, shower, and heal physically and emotionally.",
                whyItMatters: "You can't pour from an empty cup.",
            },
            {
                id: "newborn",
                label: "Newborn Care & Education",
                content: "Decoding cries, soothing techniques, and mastering the swaddle.",
                whyItMatters: "Builds your confidence as a new parent.",
            },
            {
                id: "household",
                label: "Household Harmony",
                content: "Light tidying, baby laundry, and meal prep so your home feels like a sanctuary, not a stressor.",
                whyItMatters: "Removes the mental load of chores.",
            }
        ]
    },
    packages: {
        title: "Choose Your Level of Support",
        core: {
            title: "Core Packages",
            subtitle: "Consistent, dependable support to anchor your transition into parenthood.",
            options: [
                {
                    id: "nurture-best",
                    name: "Nurture Best Package",
                    price: "2,400",
                    originalPrice: "2,700",
                    paymentPlan: "$400/week",
                    description: "The perfect balance of daytime relief and guaranteed restorative rest.",
                    features: ["1 daytime shift (3 hours) weekly", "1 overnight shift (6 hours) weekly", "6 weeks of consecutive support"]
                },
                {
                    id: "bloom-bond",
                    name: "Bloom & Bond Package",
                    isPopular: true,
                    price: "5,400",
                    originalPrice: "6,000",
                    paymentPlan: "$900/week",
                    description: "Comprehensive, bi-weekly reinforcements to fully support your recovery during the crucial first 6 weeks.",
                    features: ["2 daytime shifts (4 hours each) weekly", "2 overnight shifts (6 hours each) weekly", "6 weeks of consecutive support"]
                },
                {
                    id: "golden-hour",
                    name: "Golden Hour Concierge",
                    price: "6,300",
                    rateNote: "Unmatched value at $42/hr",
                    paymentPlan: "$800/week for 8 weeks",
                    description: "The ultimate luxury of peace of mind. Total wrap-around support for families who want a fully guided first month.",
                    features: ["3 overnights (12 hours each) weekly", "2 daytime shifts (4 hours each) weekly", "1 month of comprehensive care"]
                }
            ]
        },
        specialty: {
            title: "Specialty Services & Add-Ons",
            subtitle: "Targeted support for those specific moments when you need just a little extra help.",
            options: [
                {
                    id: "first-48",
                    name: "First 48 Hours",
                    price: "2,800",
                    timeRange: "Weekend Only",
                    description: "The Ultimate Homecoming. Premium, high-touch weekend support focused exclusively on the sensitive transition from hospital to home, establishing routines when you need it most.",
                    features: ["Continuous weekend availability", "Hospital-to-home transition management", "Nursery organization & flow setup", "First bath & feeding support"]
                },
                {
                    id: "newborn-class",
                    name: "Newborn Education Class",
                    price: "500",
                    timeRange: "Groups Welcome",
                    description: "Everything you need to know before bringing baby home.",
                    features: ["Newborn care basics", "Bottle sterilization & prep", "Diapering & soothing", "Reflux & common concerns"]
                },
                {
                    id: "meal-prep",
                    name: "1 Week Healthy Meal Prep",
                    price: "400",
                    description: "Nourishment for the parents handling everything else.",
                    features: ["Customized menu planning", "Grocery shopping included", "Nutrient-dense, healing meals", "Kitchen left spotless"]
                },
                {
                    id: "photo-session",
                    name: "Family Mini Photo Session",
                    price: "350",
                    description: "Capture the blur of the newborn days without the stress of a formal studio session.",
                    features: ["In-home lifestyle session", "Gentle pacing for baby", "High-res digital gallery", "Printing rights"]
                },
                {
                    id: "breast-milk-soap",
                    name: "Breast Milk Soap",
                    price: "100",
                    description: "A beautiful, soothing keepsake for sensitive newborn skin.",
                    features: ["Custom small-batch rendering", "Ultra-gentle ingredients", "Perfect for baby eczema"]
                }
            ]
        }
    },
    process: {
        title: "How To Get Support",
        steps: [
            {
                id: "discovery",
                label: "Discovery Call",
                description: "Let's chat. No pressure, just a vibe check to see what your family needs."
            },
            {
                id: "plan",
                label: "Custom Support Plan",
                description: "We build a schedule that protects your sleep and maximizes your ease."
            },
            {
                id: "support",
                label: "The Village Arrives",
                description: "We step in to do the heavy lifting, so you can focus on bonding."
            }
        ]
    },
    faqs: {
        title: "Frequently Asked Questions",
        items: [
            {
                id: "awkward",
                question: "Is it awkward having someone in my house?",
                answer: "Not at all! We are trained to blend into your home environment. Like an experienced auntie or sister, we know when to step in and handle things, and when to step back and give your family privacy."
            },
            {
                id: "cleaning",
                question: "Do I need to clean before you get here?",
                answer: "Absolutely not! We are there to help you, not judge you. In fact, part of our job is to help tackle those dishes and laundry piles so you don't have to."
            },
            {
                id: "payment",
                question: "How do payment plans work?",
                answer: "Every family deserves a village. We offer flexible, interest-free payment plans (like weekly billing) so you can focus on healing, not stressing about a lump sum."
            }
        ]
    }
};

export const sleepConsultingContent = {
    hero: {
        title: "Ready to finally get some sleep?",
        promise: "Gentle, effective sleep solutions for modern parents. No judgment, no one-size-fits-all rules—just evidence-based support so your whole family can thrive.",
        cta: "Let's Get You Sleeping",
    },
    empathy: {
        title: "We Get It. You're Exhausted.",
        content: "The coffee isn't cutting it anymore. You're exhausted, overwhelmed by conflicting Google advice, and just want to know you're doing the right thing. You haven't failed. Sleep is a learned skill, and sometimes you need a coach in your corner.",
    },
    packages: {
        title: "Choose Your Level of Support",
        virtual: {
            title: "Virtual Coaching & Plans",
            subtitle: "The DIY approach with a Pro in your pocket. Perfect for parents ready to implement a plan, with the reassurance of a coach just a text away.",
            options: [
                {
                    id: "initial-consult",
                    name: "Initial Consult",
                    price: 100,
                    description: "A 45-minute deep dive to troubleshoot one specific issue.",
                    features: ["45-minute phone call or video chat", "Actionable advice to implement immediately"]
                },
                {
                    id: "newborn-bundle",
                    name: "Newborn Sleep Bundle",
                    ageRange: "0-6 Months",
                    price: 280,
                    description: "Establish healthy sleep habits from the start.",
                    features: ["Comprehensive Sleep Ebook", "Sample daily schedule", "1 30-minute phone call to discuss sleep needs", "Unlimited text messaging support"]
                },
                {
                    id: "infant-package",
                    name: "6-18 Months Package",
                    ageRange: "6-18 Months",
                    price: 280,
                    description: "Navigate regressions, transitions, and establish independent sleep.",
                    features: ["Comprehensive Sleep Ebook", "Sample daily schedule", "1 30-minute phone call to discuss sleep needs", "Unlimited text messaging support"]
                },
                {
                    id: "toddler-package",
                    name: "Toddler Package",
                    ageRange: "18+ Months",
                    price: 360,
                    description: "Tackle stall tactics, boundary testing, and potty training.",
                    features: ["Comprehensive Sleep Ebook", "Potty Training Guide", "Sample daily schedule", "1 30-minute phone call to discuss sleep needs", "Confidence building strategies", "Unlimited text messaging support"]
                }
            ]
        },
        inHome: {
            title: "Hands-On Support",
            subtitle: "When exhausted isn't a strong enough word, and you need physical, hands-on reinforcements. We'll take the wheel.",
            options: [
                {
                    id: "bedtime-support",
                    name: "In-Person Bedtime Support",
                    timeRange: "6:00 PM - 10:00 PM",
                    price: 320,
                    description: "Sometimes you need backup. I'll come to your home, review your sleep environment, and physically help you hold your boundaries during the toughest hours of the day.",
                    features: ["In-home nursery review", "Hands-on bedtime routine support", "Real-time boundary coaching", "Review of daytime schedule"]
                },
                {
                    id: "overnight-support",
                    name: "Overnight Support",
                    timeRange: "8-12 Hours",
                    price: 840,
                    description: "The ultimate reset. We take over the entire night—soothing, feeding, and conditioning healthy sleep habits—so you can remember what 8 uninterrupted hours feel like.",
                    features: ["Complete overnight infant care", "Feeding & diapering", "Sleep conditioning", "Detailed sleep and feed logging", "Light baby-related chores"]
                }
            ]
        }
    },
    process: {
        title: "How It Works",
        steps: [
            {
                id: "discovery",
                label: "Discovery & Assessment",
                description: "We review your intake form and identify the roadblocks keeping your family awake."
            },
            {
                id: "plan",
                label: "Custom Plan Creation",
                description: "We build a strategy tailored to your parenting style and baby's unique temperament."
            },
            {
                id: "support",
                label: "Ongoing Support",
                description: "You implement the plan with us cheering you on via text, or we come to your house and do the heavy lifting."
            }
        ]
    }
};

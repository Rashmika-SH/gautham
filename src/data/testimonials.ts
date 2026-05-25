export interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        location: 'Melbourne, Australia',
        rating: 5,
        text: 'Working with Astrologer Shiva Anagh has been a transformative experience, guiding me through life\'s twists and turns with profound wisdom and clarity. His deep understanding of astrology combined with his compassionate demeanor creates a safe space for exploration and growth. Each session with Astrologer Shiva Anagh feels like a journey of self-discovery, as he skillfully unveils the cosmic forces at play in my life, offering practical insights and actionable advice that resonate deeply.',
        date: '2024-11-15'
    },
    {
        id: 2,
        name: 'James Anderson',
        location: 'Brisbane, Australia',
        rating: 5,
        text: 'Astrologer Shiva Anagh\'s dedication to his craft is evident in the meticulous attention to detail he brings to every consultation. His ability to decipher astrological charts with precision and empathy has provided me with invaluable guidance during times of uncertainty, empowering me to make informed decisions aligned with my highest purpose. I wholeheartedly endorse Astrologer Shiva Anagh to anyone seeking profound astrological insights and transformative guidance on their life\'s path.',
        date: '2024-10-28'
    },
    {
        id: 3,
        name: 'Emily Chen',
        location: 'Sydney, Australia',
        rating: 5,
        text: 'I was skeptical about astrology until I met Astrologer Shiva Anagh. His accurate predictions and practical remedies have completely changed my perspective. He helped me overcome a difficult period in my career and personal life. His guidance is not just about predictions, but about empowering you to take control of your destiny.',
        date: '2024-09-12'
    },
    {
        id: 4,
        name: 'Michael Roberts',
        location: 'Melbourne, Australia',
        rating: 5,
        text: 'Astrologer Shiva Anagh removed black magic that was affecting my family for years. Other astrologers couldn\'t help us, but his expertise and genuine care made all the difference. Our lives have completely transformed, and we are finally at peace. I highly recommend his services to anyone facing similar issues.',
        date: '2024-08-20'
    }
];

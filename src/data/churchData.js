import churchLogo from '../assets/church-logo.jpeg';
import gkmiLogo from '../assets/Logo_GKMI.jpg';

export const churchData = {
  // 1. Church Identity
  identity: {
    name: 'GKMI Karunia',
    formalName: 'Gereja Kristen Muria Indonesia (GKMI) Karunia',
    tagline: 'A Place to Worship, Grow, and Belong.',
    city: 'Bekasi, Jawa Barat',
    address: 'Jl. KH Agus Salim 1, RT 002/RW 008, East Bekasi, Bekasi, West Java 17112',
    phone: '+62 21 8809986',
    formattedPhone: '+62 21 880 9986',
    email: 'info@gkmikarunia.org',
    whatsapp: '+6281234567890',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=GKMI+Karunia,+Jl.+KH+Agus+Salim+1,+Bekasi',
    logo: gkmiLogo,
    buildingEmblem: churchLogo,
    establishedYear: '1985', // easily editable
  },

  // 2. Navigation
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Ministries', href: '#ministries' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Events', href: '#events' },
    { name: 'Pastor', href: '#pastor' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ],

  // 3. Hero Section
  hero: {
    badge: 'Welcome to GKMI Karunia • East Bekasi',
    title: 'Welcome to GKMI Karunia',
    subtitle: 'A place to worship, grow in faith, and walk together as a community.',
    primaryCta: 'Plan Your Visit',
    secondaryCta: 'Explore Our Church',
    serviceHighlight: {
      label: 'Sunday Worship',
      time: '09:00 AM',
      location: 'Main Sanctuary',
    },
    // Authentic local church asset from Assets/images.jpeg
    bgImage: churchLogo,
  },

  // 4. Welcome Section
  welcome: {
    eyebrow: 'You Have a Place Here',
    title: 'A Church Family Where You Belong',
    content:
      'Whether you are discovering faith for the first time, looking for a church family, or seeking a deeper relationship with God, GKMI Karunia welcomes you with open hearts. We believe church is not just a building, but a warm, grace-filled family walking together in love and truth.',
    ctaText: 'Discover GKMI Karunia',
    ctaLink: '#about',
    featuredVerse: {
      text: 'For where two or three gather in my name, there am I with them.',
      reference: 'Matthew 18:20',
    },
    image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=1200&q=85',
  },

  // 5. About GKMI Karunia & Core Values
  about: {
    eyebrow: 'About Our Community',
    title: 'Growing Together in Faith',
    description:
      'GKMI Karunia is an evangelical Mennonite church rooted in East Bekasi, dedicated to living out the gospel through heartfelt worship, holistic community care, and steadfast biblical discipleship. We invite people of all generations and backgrounds to experience the renewing grace of Jesus Christ.',
    values: [
      {
        id: 'faith',
        title: 'Faith',
        description: 'Growing deeper in our relationship with God through sincere worship, prayer, and devotion to His Holy Word.',
        icon: 'Cross',
      },
      {
        id: 'community',
        title: 'Community',
        description: 'Building meaningful relationships, bearing one another’s burdens, and walking life’s seasons side by side.',
        icon: 'Users',
      },
      {
        id: 'service',
        title: 'Service',
        description: 'Serving God and others with love, compassion, and purpose to bring blessing to Bekasi and beyond.',
        icon: 'HeartHandshake',
      },
    ],
  },

  // 6. Service Times
  services: {
    eyebrow: 'Service Times',
    title: 'Join Us This Week',
    subtitle: 'Our doors and hearts are open every week. Come and worship with us in person or connect with our community.',
    notice: 'Schedule is subject to seasonal changes and special services. Please reach out if you have questions.',
    schedule: [
      {
        id: 'sunday-worship',
        name: 'Sunday Worship',
        time: '09:00 AM',
        location: 'Main Sanctuary',
        description: 'A sacred time of blended contemporary and reflective worship, pastoral prayer, and inspiring biblical preaching.',
        language: 'Bahasa Indonesia',
        badge: 'Main Service',
        recommended: true,
      },
      {
        id: 'sunday-school',
        name: 'Sunday School',
        time: '09:00 AM',
        location: 'Church Education',
        description: 'Age-appropriate biblical lessons, interactive stories, and creative crafts for toddlers to pre-teens.',
        language: 'Bahasa Indonesia',
        badge: 'Children & Teens',
        recommended: false,
      },
      {
        id: 'prayer-meeting',
        name: 'Prayer Meeting',
        time: '07:00 PM',
        location: 'Church Hall',
        description: 'Midweek gathering for corporate intercession, thanksgiving, and communal prayer requests.',
        language: 'Every Wednesday',
        badge: 'Midweek',
        recommended: false,
      },
    ],
    ctaText: 'View Service Schedule',
  },

  // 7. Ministries
  ministries: {
    eyebrow: 'Find Your Place',
    title: 'Ministries for Every Season of Life',
    subtitle: 'There is a place for everyone to grow, serve, and belong. Explore how you can get connected.',
    list: [
      {
        id: 'kids',
        title: 'Kids Ministry',
        shortDescription: 'Nurturing young hearts to know and love God through biblical teachings, songs, and joy-filled fellowship.',
        image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
        ageGroup: 'Ages 3 - 12',
      },
      {
        id: 'youth',
        title: 'Youth Ministry',
        shortDescription: 'Empowering teenagers to discover their true identity in Christ through authentic peer friendships and mentorship.',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
        ageGroup: 'Ages 13 - 18',
      },
      {
        id: 'young-adults',
        title: 'Young Adults',
        shortDescription: 'A supportive community of university students and professionals navigating life, vocation, and calling together.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        ageGroup: 'Ages 19 - 35',
      },
      {
        id: 'worship',
        title: 'Worship Ministry',
        shortDescription: 'Leading congregation into reverent adoration of God through music, audiovisual arts, and creative expressions.',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
        ageGroup: 'All Musicians & Vocalists',
      },
      {
        id: 'prayer',
        title: 'Prayer Ministry',
        shortDescription: 'Dedicated intercessors faithfully praying for our families, church life, the city of Bekasi, and the nation.',
        image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80',
        ageGroup: 'Open to All',
      },
      {
        id: 'community-outreach',
        title: 'Community & Outreach',
        shortDescription: 'Extending Christ’s hands and compassion to East Bekasi through tangible assistance and neighborly service.',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
        ageGroup: 'All Church Family',
      },
    ],
  },

  // 8. Sermons
  sermons: {
    eyebrow: 'Messages That Inspire',
    title: 'Spiritual Encouragement for Daily Life',
    subtitle: 'Catch up on recent teachings and biblical messages to nurture your spiritual journey wherever you are.',
    featured: {
      id: 'sermon-1',
      title: 'Walking by Faith',
      speaker: 'Pastor [NAME]',
      date: 'Sunday, Nov 22, 2026',
      category: 'Faith & Spiritual Growth',
      series: 'Unshakable Foundations',
      scripture: '2 Corinthians 5:7',
      duration: '42 mins',
      thumbnail: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80',
      description: 'Living in a world driven by sight often challenges our trust in God. Discover how genuine biblical faith anchors our everyday decisions.',
    },
    list: [
      {
        id: 'sermon-2',
        title: 'Grace Upon Grace',
        speaker: 'Pastor [NAME]',
        date: 'Sunday, Nov 15, 2026',
        category: 'Grace & Restoration',
        series: 'The Fullness of Christ',
        scripture: 'John 1:16',
        duration: '38 mins',
        thumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80',
        description: 'How the boundless grace of Jesus gives us fresh beginnings each morning, releasing us from guilt into joyful obedience.',
      },
      {
        id: 'sermon-3',
        title: 'The Heart of Community',
        speaker: 'Pastor [NAME]',
        date: 'Sunday, Nov 08, 2026',
        category: 'Community Life',
        series: 'Belonging Together',
        scripture: 'Hebrews 10:24-25',
        duration: '45 mins',
        thumbnail: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=800&q=80',
        description: 'God did not design us to walk the Christian journey alone. Understand the power of genuine Christian brotherhood and sisterhood.',
      },
      {
        id: 'sermon-4',
        title: 'Rooted in Prayer',
        speaker: 'Pastor [NAME]',
        date: 'Sunday, Nov 01, 2026',
        category: 'Spiritual Disciplines',
        series: 'Unshakable Foundations',
        scripture: 'Philippians 4:6-7',
        duration: '40 mins',
        thumbnail: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80',
        description: 'Replacing anxiety with prayer and supplication with thanksgiving, allowing God’s supernatural peace to guard our hearts.',
      },
    ],
  },

  // 9. Upcoming Events
  events: {
    eyebrow: "What's Happening",
    title: 'Gatherings & Upcoming Events',
    subtitle: 'Stay connected with special celebrations, seasonal gatherings, and community events at GKMI Karunia.',
    list: [
      {
        id: 'event-1',
        title: 'Advent & Christmas Praise Celebration',
        date: 'DEC 13',
        year: '2026',
        time: '06:00 PM - 08:30 PM',
        location: 'Main Sanctuary',
        description: 'An evening of choral worship, candle lighting, and joyful celebration anticipating the birth of our Savior Jesus Christ.',
        category: 'Special Service',
      },
      {
        id: 'event-2',
        title: 'Family Thanksgiving Fellowship',
        date: 'DEC 06',
        year: '2026',
        time: '11:30 AM - 02:00 PM',
        location: 'Church Fellowship Hall',
        description: 'A warm post-service communal lunch, fellowship, and testimony sharing celebrating God’s faithfulness throughout the year.',
        category: 'Fellowship',
      },
      {
        id: 'event-3',
        title: 'Youth & Young Adult Encounter Night',
        date: 'NOV 28',
        year: '2026',
        time: '05:00 PM - 07:30 PM',
        location: 'Church Hall',
        description: 'An inspiring acoustic worship night, interactive group discussion, and dinner for youth and young professionals.',
        category: 'Youth',
      },
      {
        id: 'event-4',
        title: 'Community Outreach & Neighborhood Care',
        date: 'DEC 19',
        year: '2026',
        time: '08:00 AM - 12:00 PM',
        location: 'East Bekasi Neighborhood',
        description: 'Sharing food packages, health check-ups, and neighborly love with families around East Bekasi.',
        category: 'Outreach',
      },
    ],
  },

  // 10. Pastor / Leadership
  pastor: {
    eyebrow: 'Meet Our Pastor',
    name: 'Pastor [NAME]',
    role: 'Lead Pastor',
    church: 'GKMI Karunia',
    quote: 'Together, we grow in faith, serve with love, and live with purpose.',
    bio: [
      'Pastor [NAME] serves as the Lead Pastor of GKMI Karunia with a deep dedication to pastoral care, expository biblical teaching, and intentional generational discipleship.',
      'With a genuine heart for families and the greater community of East Bekasi, Pastor [NAME] strives to cultivate an atmosphere where grace abounds, authentic relationships flourish, and believers are equipped to live out the gospel in their workplaces, schools, and homes.',
      'Alongside church leaders and elders, Pastor [NAME] welcomes you warmly to experience the life-changing community at GKMI Karunia.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
  },

  // 11. Testimonials / Stories of Faith
  testimonials: {
    eyebrow: 'Stories of Faith',
    title: 'Voices of Our Church Family',
    subtitle: 'Real stories of lives touched, faith deepened, and hearts finding a home at GKMI Karunia.',
    list: [
      {
        id: 'testi-1',
        quote: 'GKMI Karunia has become a place where my family can grow together in faith, friendship, and service. The love we received here helped anchor our lives in God.',
        name: '[Member Name]',
        role: 'Congregation Member since 2018',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      {
        id: 'testi-2',
        quote: 'From the very first Sunday I stepped in, I felt the warmth and sincerity of this church family. It is rare to find a community where you are truly known and loved as you are.',
        name: '[Member Name]',
        role: 'Young Adult Ministry',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
      {
        id: 'testi-3',
        quote: 'A Christ-centered church where the truth of God’s Word is taught with clarity and lived out in everyday compassion. My children eagerly look forward to Sunday School every week.',
        name: '[Member Name]',
        role: 'Family Ministry & Educator',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      },
    ],
  },

  // 12. Gallery
  gallery: {
    eyebrow: 'Our Community Life',
    title: 'Moments of Fellowship & Praise',
    subtitle: 'A glimpse into our worship gatherings, ministry events, and moments of service in Bekasi.',
    categories: ['All', 'Worship', 'Community', 'Youth', 'Events', 'Outreach'],
    items: [
      {
        id: 'gal-1',
        title: 'Sunday Morning Praise',
        category: 'Worship',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
        caption: 'Congregational singing and adoration in the Main Sanctuary.',
      },
      {
        id: 'gal-2',
        title: 'GKMI Karunia Church Emblem',
        category: 'Community',
        image: churchLogo,
        caption: 'The historic emblem and architectural depiction of GKMI Karunia.',
      },
      {
        id: 'gal-3',
        title: 'Youth Fellowship Circle',
        category: 'Youth',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
        caption: 'Deep conversations, prayer, and shared laughter in youth gathering.',
      },
      {
        id: 'gal-4',
        title: 'Neighborhood Food Outreach',
        category: 'Outreach',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
        caption: 'Serving practical needs and sharing kindness with local residents.',
      },
      {
        id: 'gal-5',
        title: 'Annual Church Celebration',
        category: 'Events',
        image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
        caption: 'Celebration of God’s guidance and anniversary fellowship.',
      },
      {
        id: 'gal-6',
        title: 'Pastoral Care & Prayer',
        category: 'Worship',
        image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1000&q=80',
        caption: 'Laying on of hands and interceding for families.',
      },
    ],
  },

  // 13. Plan Your Visit
  planVisit: {
    headline: 'Come As You Are.',
    subheadline: 'We would love to welcome you to GKMI Karunia.',
    address: 'Jl. KH Agus Salim 1, RT 002/RW 008, East Bekasi, Bekasi, West Java 17112',
    phone: '+62 21 8809986',
    ctaText: 'Get Directions',
    faqs: [
      {
        question: 'What should I wear?',
        answer: 'Please come as you feel comfortable! You will see people in casual attire, smart casual, as well as traditional Indonesian batik. What matters most is having an open heart to worship God together.',
      },
      {
        question: 'Where can I park?',
        answer: 'We provide dedicated parking for both cars and motorcycles right at the church complex. Our friendly usher team will be on hand to guide you as you arrive.',
      },
      {
        question: 'Is there a program for children?',
        answer: 'Yes! Our Sunday School runs concurrently with the Sunday Worship service at 09:00 AM, staffed by caring, background-screened volunteer teachers.',
      },
      {
        question: 'How long does the service last?',
        answer: 'Our Sunday Worship service lasts approximately 75 to 90 minutes, featuring contemporary worship songs, heartfelt corporate prayer, and an inspiring biblical sermon.',
      },
    ],
  },

  // 14. CTA Section
  cta: {
    headline: 'There Is a Place for You Here.',
    subheadline: 'Come worship with us, grow in faith, and be part of the GKMI Karunia family.',
    primaryButton: 'Plan Your Visit',
    secondaryButton: 'Contact Us',
    bgImage: churchLogo,
  },

  // 15. Contact Section
  contact: {
    title: "We'd Love to Hear From You",
    subtitle: 'Have a question, need prayer, or want to connect with our pastoral team? Reach out to us anytime.',
    officeHours: 'Tuesday - Saturday: 09:00 AM - 04:00 PM • Sunday: 08:00 AM - 01:00 PM',
  },

  // 16. Footer
  footer: {
    brandDescription: 'A Christ-centered church community growing together in faith, grace, and love in East Bekasi.',
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About GKMI Karunia', href: '#about' },
      { name: 'Service Times', href: '#services' },
      { name: 'Ministries', href: '#ministries' },
      { name: 'Latest Sermons', href: '#sermons' },
      { name: 'Upcoming Events', href: '#events' },
      { name: 'Photo Gallery', href: '#gallery' },
      { name: 'Contact & Directions', href: '#contact' },
    ],
    socialMedia: [
      { name: 'Instagram', href: 'https://instagram.com/gkmikarunia', icon: 'Instagram' },
      { name: 'Facebook', href: 'https://facebook.com/gkmikarunia', icon: 'Facebook' },
      { name: 'YouTube', href: 'https://youtube.com/@gkmikarunia', icon: 'Youtube' },
    ],
    copyright: '© 2026 GKMI Karunia. All Rights Reserved.',
  },
};

/**
 * COASTAL SPICE - BUSINESS DATA CONFIGURATION
 * -------------------------------------------------------------
 * This central configuration file powers the entire website.
 * To adapt this template for any other local business (Gym, Salon, 
 * Cafe, Photography, Tuition Center, etc.), update the fields below.
 */

export const businessData = {
  // Brand Identity
  brand: {
    name: "Coastal Spice",
    shortName: "Coastal Spice",
    category: "AUTHENTIC COASTAL CUISINE",
    tagline: "Authentic Coastal Flavours, Made Fresh",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    rating: "4.9",
    totalReviews: "1,000+",
    established: "2019",
  },

  // Contact & Location Details (Clearly Fictional Demo Info)
  contact: {
    phone: "+91 98765 43210",
    phoneRaw: "+919876543210",
    whatsapp: "+91 98765 43210",
    whatsappNumber: "919876543210", // Used for wa.me link
    whatsappPrefillText: "Hello Coastal Spice! I would like to reserve a table / have an inquiry.",
    email: "reservations@coastalspicedemo.com",
    address: {
      line1: "Plot 42, Beach Road Promenade",
      line2: "Opp. Rushikonda Beach Viewpoint",
      area: "Rushikonda",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      pincode: "530045",
      landmark: "Near Coastal Bay Viewpoint",
    },
    googleMapsUrl: "https://maps.google.com/?q=Rushikonda+Beach+Visakhapatnam",
    directionsUrl: "https://maps.google.com/?q=Rushikonda+Beach+Visakhapatnam",
  },

  // Operating Schedule
  hours: {
    days: "Monday – Sunday",
    timings: "11:00 AM – 11:00 PM",
    lunchHours: "11:00 AM – 04:00 PM",
    dinnerHours: "07:00 PM – 11:00 PM",
    note: "Kitchen last order at 10:30 PM",
    isOpenToday: true,
  },

  // Hero Section
  hero: {
    badge: "AUTHENTIC COASTAL CUISINE",
    headline: "Taste the Coast. Experience the Difference.",
    subheadline: "Fresh ingredients, bold coastal flavours, and unforgettable meals crafted for every occasion.",
    trustBadge: "4.9/5 • Loved by 1,000+ guests",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },

  // About Section
  about: {
    sectionSubtitle: "OUR STORY & CRAFT",
    heading: "A Taste of the Coast",
    storyParagraph1: "Born from a love for the flavours of India's coastline, Coastal Spice brings traditional recipes together with a modern dining experience.",
    storyParagraph2: "We source our seafood directly from local coastal harbors each morning, pairing them with heritage spice blends ground fresh in our kitchen. From slow-cooked village curries to sizzling clay-pot roasts, every dish is an homage to coastal tradition.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80",
    chefBadge: "Master Chef Certified Recipes",
    highlights: [
      {
        id: 1,
        title: "Fresh Ingredients",
        desc: "Wild-caught seafood & daily sourced farm produce.",
      },
      {
        id: 2,
        title: "Authentic Recipes",
        desc: "Handed down through coastal Andhra culinary masters.",
      },
      {
        id: 3,
        title: "Made With Care",
        desc: "Slow-cooked in clay pots with zero artificial additives.",
      },
    ],
    ctaText: "Discover Our Story",
  },

  // Signature Dishes (Section 4)
  signatureDishes: [
    {
      id: "dish-1",
      name: "Coastal Prawn Curry",
      category: "Chef's Signature",
      spicyLevel: 3,
      price: "₹480",
      description: "Jumbo fresh prawns simmered in rich coconut cream, kokum, and freshly roasted coastal ground spices.",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=700&q=80",
      badge: "Bestseller",
    },
    {
      id: "dish-2",
      name: "Andhra Chicken Fry",
      category: "Coastal Roast",
      spicyLevel: 4,
      price: "₹390",
      description: "Tender country chicken tossed with caramelized shallots, curry leaves, crushed Guntur chillies and pepper.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
      badge: "Must Try",
    },
    {
      id: "dish-3",
      name: "Nellore Fish Pulusu",
      category: "Heritage Special",
      spicyLevel: 3,
      price: "₹450",
      description: "Tangy and fiery fish curry made with fresh Seer fish, raw mango, tamarind pulp, and fenugreek tadka.",
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=700&q=80",
      badge: "Traditional",
    },
    {
      id: "dish-4",
      name: "Gongura Mutton",
      category: "Classic Andhra",
      spicyLevel: 4,
      price: "₹520",
      description: "Succulent baby mutton cubes slow-braised with tangy sorrel leaves (Gongura) and secret aromatic spices.",
      image: "https://images.unsplash.com/photo-1545247181-516773ca838b?auto=format&fit=crop&w=700&q=80",
      badge: "House Favorite",
    },
  ],

  // Why Choose Us (Section 5)
  whyChooseUs: [
    {
      id: 1,
      title: "Fresh Every Day",
      description: "Fresh ingredients sourced daily from local coastal fishermen and organic farmers.",
      icon: "Fish",
    },
    {
      id: 2,
      title: "Authentic Flavours",
      description: "Traditional recipes with genuine coastal flavours, hand-ground masala, and clay-pot cooking.",
      icon: "Flame",
    },
    {
      id: 3,
      title: "Warm Hospitality",
      description: "A comfortable, vibrant experience for families, couples, and friendly get-togethers.",
      icon: "HeartHandshake",
    },
    {
      id: 4,
      title: "Perfect For Every Occasion",
      description: "Casual dinners, milestone celebrations, weekend family feasts, and special gatherings.",
      icon: "Sparkles",
    },
  ],

  // Menu Preview & Full Menu (Section 6)
  menuCategories: ["Starters", "Main Course", "Seafood", "Desserts", "Beverages"],
  menuItems: [
    {
      id: "m-1",
      category: "Starters",
      name: "Vizag Royyala Vepudu (Prawn Roast)",
      description: "Tawa tossed fresh prawns with crushed garlic, green chillies, and curry leaves.",
      price: "₹420",
      isVeg: false,
      isSpecial: true,
    },
    {
      id: "m-2",
      category: "Starters",
      name: "Crispy Crispy Squid Pepper Fry",
      description: "Fresh tender squid rings dusted in spicy coastal batter and fried golden crisp.",
      price: "₹380",
      isVeg: false,
      isSpecial: false,
    },
    {
      id: "m-3",
      category: "Starters",
      name: "Coastal Paneer Ghee Roast",
      description: "Cottage cheese chunks roasted in aromatic Byadgi chilli ghee paste.",
      price: "₹340",
      isVeg: true,
      isSpecial: true,
    },
    {
      id: "m-4",
      category: "Main Course",
      name: "Coastal Spice Dum Biryani",
      description: "Fragrant aged basmati rice layered with spiced marinated meat and saffron steam.",
      price: "₹410",
      isVeg: false,
      isSpecial: true,
    },
    {
      id: "m-5",
      category: "Main Course",
      name: "Kodi Kura with Malabar Parotta",
      description: "Homestyle spicy chicken gravy paired with 2 fluffy, flaky layered parottas.",
      price: "₹360",
      isVeg: false,
      isSpecial: false,
    },
    {
      id: "m-6",
      category: "Main Course",
      name: "Gutti Vankaya Kura",
      description: "Stuffed baby brinjals cooked in a rich roasted peanut, sesame, and coconut gravy.",
      price: "₹290",
      isVeg: true,
      isSpecial: false,
    },
    {
      id: "m-7",
      category: "Seafood",
      name: "Vanjaram Fish Tawa Fry",
      description: "Seer fish steak marinated in red coastal paste and pan-fried on cast iron.",
      price: "₹460",
      isVeg: false,
      isSpecial: true,
    },
    {
      id: "m-8",
      category: "Seafood",
      name: "Crab Roast Sukka",
      description: "Whole fresh mud crab coated with toasted dry coconut and fiery peppery spices.",
      price: "₹540",
      isVeg: false,
      isSpecial: true,
    },
    {
      id: "m-9",
      category: "Desserts",
      name: "Elaneer Payasam (Tender Coconut Kheer)",
      description: "Chilled delicate dessert made with fresh tender coconut pulp, condensed milk & cardamom.",
      price: "₹180",
      isVeg: true,
      isSpecial: true,
    },
    {
      id: "m-10",
      category: "Desserts",
      name: "Baked Gulab Jamun with Rabri",
      description: "Warm saffron-infused jamuns served over a bed of slow-reduced pistachio rabri.",
      price: "₹210",
      isVeg: true,
      isSpecial: false,
    },
    {
      id: "m-11",
      category: "Beverages",
      name: "Kokum Ginger Cooler",
      description: "Refreshing tangy coastal kokum nectar with crushed mint, roasted cumin, and ice.",
      price: "₹140",
      isVeg: true,
      isSpecial: true,
    },
    {
      id: "m-12",
      category: "Beverages",
      name: "Vizag Filter Kaapi & Tender Coconut Shake",
      description: "Signature cold shake blended with fresh coconut cream and dark filter brew.",
      price: "₹160",
      isVeg: true,
      isSpecial: false,
    },
  ],

  // Gallery (Section 7)
  gallery: [
    {
      id: "g-1",
      title: "Coastal Prawn Curry Platter",
      category: "Dishes",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
      caption: "Freshly prepared coastal prawn delicacy with aromatic jasmine rice.",
    },
    {
      id: "g-2",
      title: "Warm Beachside Dining Room",
      category: "Ambience",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      caption: "Spacious seating designed for intimate family dinners and friends.",
    },
    {
      id: "g-3",
      title: "Handcrafted Clay Pot Cooking",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
      caption: "Slow cooking in traditional earthenware to lock in authentic flavours.",
    },
    {
      id: "g-4",
      title: "Tawa Crispy Seer Fish Fry",
      category: "Dishes",
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=900&q=80",
      caption: "Cast-iron roasted catch of the day with lemon and onion relish.",
    },
    {
      id: "g-5",
      title: "Signature Refreshing Cocktails",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80",
      caption: "Handcrafted coastal coolers and mocktails infused with fresh herbs.",
    },
    {
      id: "g-6",
      title: "Sunset Patio View",
      category: "Ambience",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      caption: "Evening seaside ambience with ambient warm illumination.",
    },
    {
      id: "g-7",
      title: "Aromatic Spice Blends",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
      caption: "Freshly roasted and ground coastal Andhra spice blends.",
    },
    {
      id: "g-8",
      title: "Gourmet Dessert Presentation",
      category: "Dishes",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
      caption: "Tender coconut kheer and artisanal warm sweets.",
    },
  ],

  // Testimonials (Section 8)
  testimonials: [
    {
      id: "t-1",
      name: "Ananya R.",
      role: "Vizag Food Enthusiast",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      review: "The Nellore Fish Pulusu here is hands down the best I have tasted in Vizag! The balance of tangy tamarind and spicy masala is pure perfection. Ambience is lovely for family dinners.",
      date: "Visited last week",
      verified: true,
    },
    {
      id: "t-2",
      name: "Rahul K.",
      role: "Local Food Blogger",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      review: "Incredible seafood freshness! The Coastal Prawn Curry with hot parottas was simply unforgettable. Great staff hospitality and fast service even during busy weekend hours.",
      date: "Visited 2 weeks ago",
      verified: true,
    },
    {
      id: "t-3",
      name: "Priya S.",
      role: "Corporate Team Lead",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      review: "We hosted an 18-person team dinner here. The table reservation via WhatsApp was smooth, seating was comfortable, and everyone praised the Andhra Chicken Fry & Gongura Mutton!",
      date: "Visited last month",
      verified: true,
    },
  ],

  // Social Links
  socials: [
    { name: "Instagram", url: "https://instagram.com/coastalspice.demo", icon: "Instagram" },
    { name: "Facebook", url: "https://facebook.com/coastalspice.demo", icon: "Facebook" },
    { name: "YouTube", url: "https://youtube.com/@coastalspice.demo", icon: "Youtube" },
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Dishes", href: "#dishes" },
    { name: "Why Us", href: "#why-us" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Hours & Location", href: "#hours-location" },
    { name: "Contact", href: "#contact" },
  ],
};

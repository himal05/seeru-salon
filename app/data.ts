export const business = {
  name: "Aabha by Sirjana",
  eyebrow: "Beauty salon & academy",
  phone: "9864460351",
  whatsapp: "9864460351",
  email: "hello@[SALON-DOMAIN].com",
  address: "Kuleshwor, Kalanki, Kathmandu",
  hours: "Daily · 8:00 AM – 8:00 PM",
  socials: { instagram: "#", facebook: "#", tiktok: "#", youtube: "#" },
};

export const images = {
  hero: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2000&q=85",
  about: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1400&q=85",
  bridal: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=85",
};

export const serviceCategories = [
  { slug: "professional-makeup", title: "Professional Makeup", icon: "Sparkles", image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80", price: "Rs. [2,500]", duration: "60–90 min", desc: "Personalised, camera-ready artistry from soft natural looks to polished glamour.", items: ["Bridal Makeup", "Engagement Makeup", "Party Makeup", "Day & Evening Makeup", "Natural & Glam Makeup", "Makeup Lessons"] },
  { slug: "hair-services", title: "Hair Services", icon: "Scissors", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80", price: "Rs. [1,200]", duration: "45–180 min", desc: "Precision cuts, colour and restorative treatments tailored to your hair and lifestyle.", items: ["Ladies, Men’s & Kids Haircut", "Styling & Blow Dry", "Colour, Highlights & Balayage", "Keratin & Smoothening", "Hair Spa & Repair", "Extensions & Updos"] },
  { slug: "bridal-services", title: "Bridal Services", icon: "Gem", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80", price: "Rs. [15,000]", duration: "2–4 hrs", desc: "A calm, considered bridal journey for every celebration and every camera angle.", items: ["Bridal Makeup & Hair", "Engagement & Mehendi Looks", "Reception Look", "Bridal Nails", "Skin Preparation", "Pre-Bridal & Full Packages"] },
  { slug: "nail-care", title: "Nail Care", icon: "Hand", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80", price: "Rs. [800]", duration: "30–90 min", desc: "Meticulous manicures, extensions and modern nail art in a hygienic setting.", items: ["Manicure & Pedicure", "File & Polish", "Gel Nails", "Extensions", "Nail Art", "Bridal Nails"] },
  { slug: "skin-facial", title: "Skin & Facial", icon: "Flower2", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80", price: "Rs. [1,800]", duration: "45–90 min", desc: "Thoughtful treatments that restore hydration, clarity and your natural glow.", items: ["Basic & Deep Cleansing Facial", "Hydrating Facial", "Brightening & Anti-Aging", "Acne Care", "Fruit & Gold Facial", "Skin Consultation"] },
  { slug: "lashes-brows", title: "Lashes & Brows", icon: "Eye", image: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1000&q=80", price: "Rs. [600]", duration: "20–120 min", desc: "Expert shaping, tinting and extensions designed to flatter your features.", items: ["Lash Extensions", "Lash Lift & Tint", "Brow Tint", "Brow Shaping", "Threading", "Brow Styling"] },
  { slug: "hair-removal", title: "Hair Removal", icon: "WandSparkles", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=80", price: "Rs. [500]", duration: "15–90 min", desc: "Comfort-focused waxing, threading and advanced hair-removal consultations.", items: ["Facial & Full Body Wax", "Arms, Legs & Underarm", "Bikini Wax", "Threading", "IPL Consultation", "Electrolysis Consultation"] },
  { slug: "spa-wellness", title: "Spa & Wellness", icon: "Leaf", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80", price: "Rs. [1,500]", duration: "30–120 min", desc: "Quiet rituals for hair, hands, feet and body—created for genuine restoration.", items: ["Hair Spa", "Head Massage", "Relaxation Therapy", "Foot & Hand Care", "Body Care", "Regenerating Treatments"] },
];

export const priceMenu = [
  { category: "Hair", name: "Haircut & Signature Finish", desc: "Consultation-led cut with wash and finish.", duration: "45–60 min", price: "Rs. [2,000]", badge: "POPULAR" },
  { category: "Hair", name: "Dimensional Colour", desc: "Bespoke colour placement with toning and care.", duration: "2–4 hrs", price: "Rs. [6,500]", badge: "TRENDING" },
  { category: "Makeup", name: "Signature Glam", desc: "Long-wear complexion, eyes and lashes.", duration: "75 min", price: "Rs. [4,500]", badge: "BEST SELLER" },
  { category: "Bridal", name: "Bridal Makeup & Hair", desc: "Complete wedding-day artistry with consultation.", duration: "3 hrs", price: "Rs. [18,000]", badge: "SPECIAL" },
  { category: "Nails", name: "Gel Manicure", desc: "Nail shaping, cuticle care and durable colour.", duration: "60 min", price: "Rs. [1,800]", badge: "POPULAR" },
  { category: "Skin", name: "Glow Renewal Facial", desc: "Deep cleanse, massage, mask and hydration.", duration: "75 min", price: "Rs. [3,500]", badge: "NEW" },
  { category: "Hair Removal", name: "Full Body Wax", desc: "Professional hair removal with aftercare.", duration: "90 min", price: "Rs. [4,000]", badge: "" },
  { category: "Spa", name: "Restorative Hair Spa", desc: "Scalp ritual and intensive repair treatment.", duration: "60 min", price: "Rs. [2,500]", badge: "HOT" },
  { category: "Lashes & Brows", name: "Classic Lash Set", desc: "Natural-looking individual lash extensions.", duration: "120 min", price: "Rs. [4,500]", badge: "NEW" },
];

export const courses = [
  ["Professional Makeup Course", "12 weeks", "Beginner to pro"], ["Hair Styling Course", "10 weeks", "All levels"], ["Bridal Makeup Course", "6 weeks", "Intermediate"], ["Nail Art Course", "4 weeks", "Beginner"], ["Beauty Therapy Course", "16 weeks", "Beginner"], ["Advanced Hair Color", "5 weeks", "Professional"],
];

export const locations = [
  { name: "Kathmandu Studio", address: "[FULL KATHMANDU ADDRESS]", phone: "[BRANCH PHONE]", hours: "[OPENING HOURS]" },
  { name: "Lalitpur Studio", address: "[FULL LALITPUR ADDRESS]", phone: "[BRANCH PHONE]", hours: "[OPENING HOURS]" },
  { name: "Pokhara Studio", address: "[FULL POKHARA ADDRESS]", phone: "[BRANCH PHONE]", hours: "[OPENING HOURS]" },
];

export const testimonials = [
  { name: "पूजा श्रेष्ठ", service: "Haircut & Styling", quote: "Aabha by Sirjana मा मेरो experience एकदमै राम्रो रह्यो। Staff हरू धेरै friendly र professional हुनुहुन्छ। Haircut र styling मेरो face shape अनुसार एकदमै राम्रो गरिदिनुभयो। अबदेखि मेरो favorite salon यही हो।" },
  { name: "सुमिना अधिकारी", service: "Bridal Makeup", quote: "Bridal makeup को लागि मैले Aabha by Sirjana रोजेकी थिएँ र result साँच्चै सुन्दर आयो। Makeup natural, elegant र long-lasting थियो। मेरो special day अझै special बनाइदिनुभएकोमा धेरै धन्यवाद।" },
  { name: "रचना भण्डारी", service: "Hair Spa", quote: "Salon को environment धेरै clean, peaceful र premium लाग्यो। Hair spa पछि मेरो hair एकदम soft र shiny भयो। Service र hospitality दुवै मन पर्यो। Highly recommended!" },
  { name: "अञ्जली कार्की", service: "Hair Colour & Styling", quote: "मैले hair color र styling गराएको थिएँ। Sirjana ma’am ले मेरो skin tone र hair type अनुसार color suggest गर्नुभयो र final look expectation भन्दा पनि राम्रो आयो। एकदमै satisfied छु।" },
  { name: "निशा थापा", service: "Facial & Eyebrows", quote: "पहिलो पटक आएको भए पनि staff ले एकदम comfortable feel गराउनुभयो। Facial र eyebrow service निकै राम्रो थियो। Hygiene मा पनि राम्रो ध्यान दिएको देखियो। फेरि अवश्य आउनेछु।" },
  { name: "सरिता गौतम", service: "Party Makeup", quote: "Aabha by Sirjana मा service मात्र होइन, customer care पनि excellent छ। मेरो party makeup धेरै natural र classy बनाइदिनुभयो। सबैले makeup को compliment गर्नुभयो। Thank you so much!" },
];

export const faqs = [
  ["Do I need to book an appointment?", "Appointments are recommended, especially for colour, bridal and weekend visits. Walk-ins are welcome when space is available."],
  ["Can I choose my beauty expert?", "Yes. Select your preferred expert in the booking form or mention them when you call or message us."],
  ["How early should I book bridal makeup?", "We suggest enquiring 3–6 months ahead for peak wedding dates, with a consultation and trial booked beforehand."],
  ["Do you provide makeup trials?", "Yes. Trials are available for bridal and special-event makeup and can be added to selected packages."],
  ["Which payment methods do you accept?", "We accept [CASH / CARD / QR / WALLET]. Final payment details can be updated here."],
  ["Are academy courses certified?", "Certificate availability is listed for each course. Contact the academy team for current intakes and accreditation details."],
];

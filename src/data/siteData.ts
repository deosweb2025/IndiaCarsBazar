import heroCar1 from '../assets/images/hero-car-1.jpg';
import heroCar2 from '../assets/images/hero-car-2.jpg';
import heroCar3 from '../assets/images/hero-car-3.jpg';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  image: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  documentsRequired: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Certified Fleet' | 'Showroom' | 'Key Deliveries' | 'Diagnostic Inspection';
  imageUrl: string;
  caption: string;
  featured?: boolean;
}

export interface HeroSlide {
  id: number;
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  subtitle: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export const siteData = {
  company: {
    name: "Indiacarbazar",
    legalName: "Indiacarbazar Motors & Services",
    brandShort: "India Car Bazar",
    domain: "www.indiacarbazar.com",
    url: "https://www.indiacarbazar.com",
    tagline: "The Best Way for Selling & Buying an Used Car",
    slogan: "Verified Pre-Owned Automotive Hub",
    description: "Welcome to Indiacarbazar — India's premier multi-brand certified pre-owned dealership and comprehensive automotive service hub. We deliver verified used car sales & purchases, car registration, comprehensive insurance, low-EMI car finance, and end-to-end RTO documentation under one roof.",
    establishedYear: "2012",
    helpline: "9073344500",
    helplineFormatted: "+91 90733 44500",
    whatsappNumber: "919073344500",
    email: "info@indiacarbazar.com",
    address: {
      street: "Main Multi-Brand Showroom, Eastern Bypass Corridor",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700107",
      country: "India",
      landmark: "Near Major RTO Hub & Metro Interchange"
    },
    timings: "Monday - Sunday: 9:30 AM to 8:30 PM",
    socialLinks: {
      whatsapp: "https://wa.me/919073344500?text=Hello%20Indiacarbazar%2C%20I%20am%20looking%20for%20assistance%20with%20a%20pre-owned%20car.",
      facebook: "https://facebook.com/indiacarbazar",
      instagram: "https://instagram.com/indiacarbazar",
      youtube: "https://youtube.com/@indiacarbazar"
    }
  },

  // STRICTLY 5 NAV ITEMS as requested by client
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ],

  // 3 GENERATED BESPOKE CINEMATIC HERO SLIDES
  heroSlides: [
    {
      id: 1,
      badge: "Performance & Verified Fleet",
      titlePart1: "The Best Way For",
      titleHighlight: "Selling & Buying",
      titlePart2: "Pre-Owned Cars in India",
      subtitle: "Experience seamless transparent transactions, 150+ point diagnostic inspections, instant spot payout, and certified transfer indemnity.",
      image: heroCar1,
      primaryCtaText: "Explore Certified Cars",
      primaryCtaLink: "/gallery",
      secondaryCtaText: "Our Services",
      secondaryCtaLink: "/services"
    },
    {
      id: 2,
      badge: "Multi-Brand Luxury Showroom",
      titlePart1: "Hassle-Free",
      titleHighlight: "Car Registration",
      titlePart2: "& All Motor Vehicle Works",
      subtitle: "Eliminate RTO queues. We arrange ownership transfers, state NOCs, road tax renewals, and all legal formalities with full indemnity.",
      image: heroCar2,
      primaryCtaText: "Check RTO Services",
      primaryCtaLink: "/services/car-registration",
      secondaryCtaText: "Call 9073344500",
      secondaryCtaLink: "tel:9073344500"
    },
    {
      id: 3,
      badge: "Lowest Interest Rates & Rapid Sanction",
      titlePart1: "Certified",
      titleHighlight: "Car Loans & Insurance",
      titlePart2: "With Key Handover",
      subtitle: "Get low EMI car financing up to 90% valuation, instant motor insurance renewals, and zero-depreciation coverage with cashless garage support.",
      image: heroCar3,
      primaryCtaText: "Apply For Car Loan",
      primaryCtaLink: "/services/car-loan",
      secondaryCtaText: "WhatsApp Us",
      secondaryCtaLink: "https://wa.me/919073344500"
    }
  ] as HeroSlide[],

  // Key stats & trust metrics
  keyStats: [
    { label: "Certified Cars In Stock", value: "500+", suffix: "Multi-Brand" },
    { label: "Delighted Car Owners", value: "3,500+", suffix: "Verified" },
    { label: "RTO & Legal Clearance", value: "100%", suffix: "Guaranteed" },
    { label: "Inspection Checkpoints", value: "150+", suffix: "Points" }
  ],

  // SERVICES - All 6 key services with deep routing
  services: [
    {
      id: "used-car-sale-purchase",
      slug: "used-car-sale-purchase",
      title: "Used Car Buying & Selling",
      shortDesc: "The premier way to buy or sell second-hand vehicles with zero middlemen, scientific valuation, and instant digital payout.",
      fullDesc: "Indiacarbazar is the premier marketplace for buying and selling quality tested pre-owned vehicles. Whether you want to upgrade your car or sell your existing vehicle at genuine market valuation, our transparent evaluation and fair pricing ensure maximum value without intermediaries.",
      badge: "Core Service",
      iconName: "Car",
      image: "/images/service-buying-selling.jpg",
      features: [
        "150+ point rigorous mechanical, structural and electrical inspection",
        "Non-accidental and non-meter-tampered legal certification",
        "Instant spot evaluation and immediate digital bank transfer",
        "Zero brokerage and zero hidden dealership cuts",
        "Comprehensive 6-month engine & transmission warranty packages"
      ],
      process: [
        { step: "01", title: "Select or Submit Vehicle", desc: "Browse our showroom inventory or submit your car details online or over phone." },
        { step: "02", title: "Free Multi-Point Diagnostic", desc: "Our automotive engineers evaluate engine, chassis, suspension, OBD, and paint depth." },
        { step: "03", title: "Transparent Pricing", desc: "Receive the best fair-market price offer backed by real-time market indices." },
        { step: "04", title: "Instant Payment & Handover", desc: "Immediate fund transfer and full legal indemnity handover." }
      ],
      documentsRequired: [
        "Original Vehicle RC (Registration Certificate)",
        "Valid Insurance Policy Copy",
        "PUC (Pollution Under Control) Certificate",
        "Owner PAN Card and Aadhaar Copy",
        "Form 29 & Form 30 (Provided by us for signing)"
      ],
      benefits: [
        "No dealing with endless random callers or unreliable buyers",
        "Guaranteed ownership transfer with legal indemnity",
        "Free door-step vehicle evaluation in select zones"
      ],
      faqs: [
        {
          question: "How long does it take to sell my car at Indiacarbazar?",
          answer: "In most cases, evaluation and payout are completed within 1 to 2 hours once documents are verified."
        },
        {
          question: "Can I test drive cars before purchasing?",
          answer: "Absolutely! We encourage thorough test drives and allow your trusted mechanic to inspect any car in our lot."
        }
      ]
    },
    {
      id: "car-registration",
      slug: "car-registration",
      title: "Car Registration & RTO Works",
      shortDesc: "Complete handling of RTO Car Registration, name transfer, state re-registration, high security plates, and road tax.",
      fullDesc: "Navigating Regional Transport Offices (RTO) can be cumbersome and time-consuming. Indiacarbazar arranges all motor vehicle related official work, including permanent registration, RC endorse transfer, fitness renewal, and address changes across all local and national jurisdictions.",
      badge: "Official Paperwork",
      iconName: "FileCheck",
      image: "/images/service-rto.jpg",
      features: [
        "End-to-end RTO ownership transfer assistance",
        "Inter-state and intra-state vehicle re-registration",
        "Fitness certificate (FC) renewals for commercial & private cars",
        "HSRP (High Security Registration Plate) booking and fitment",
        "Hypothecation addition and hypothecation cancellation (HP clearance)"
      ],
      process: [
        { step: "01", title: "Document Collection", desc: "We collect or assist in compiling all relevant RTO documents." },
        { step: "02", title: "RTO Verification", desc: "Our liaison specialists verify chassis prints, engine punch, and clearances." },
        { step: "03", title: "Government Fee Payment", desc: "All official fees and road taxes are deposited with legitimate receipts." },
        { step: "04", title: "Smart RC Delivery", desc: "Track status online and receive your physical smart RC directly." }
      ],
      documentsRequired: [
        "Original RC Book or Smart Card",
        "Valid Vehicle Insurance & PUC",
        "Signed Form 29 & 30 with seller & buyer signatures",
        "Identity & Address proofs of both parties",
        "Original Sale Receipt / Invoice"
      ],
      benefits: [
        "Avoid long queues and agent confusion at RTO offices",
        "Full tracking and real-time SMS updates",
        "100% legal compliance protecting you from future liabilities"
      ],
      faqs: [
        {
          question: "How much time does RTO name transfer usually take?",
          answer: "Depending on the RTO authority, standard processing takes between 15 to 30 working days. We provide interim acknowledgment receipts."
        },
        {
          question: "Do you handle other state cars moving into West Bengal?",
          answer: "Yes, we handle inter-state NOC validation, local road tax computation, and issuance of local registration marks."
        }
      ]
    },
    {
      id: "car-insurance",
      slug: "car-insurance",
      title: "Car Insurance & Instant Renewal",
      shortDesc: "Comprehensive and third-party motor vehicle insurance with cashless garage networks and best NCB savings.",
      fullDesc: "Safeguard your vehicle against accidental damage, theft, flood, and third-party liabilities. Indiacarbazar partners with premier insurance providers to deliver instant policy issuance, maximum No Claim Bonus (NCB) transfer, and zero-depreciation add-on covers tailored to your car's model and age.",
      badge: "Complete Protection",
      iconName: "ShieldCheck",
      image: "/images/service-insurance.jpg",
      features: [
        "Instant zero-inspection policy renewal for expired insurance",
        "Zero depreciation (Bumper-to-Bumper) add-on packages",
        "Engine protect, consumable, and return-to-invoice covers",
        "Tie-up with 4,500+ cashless garage networks across India",
        "Dedicated claims assistance helpline: 9073344500"
      ],
      process: [
        { step: "01", title: "Share RC & Old Policy", desc: "Send photo of vehicle RC and expired or current insurance." },
        { step: "02", title: "Compare Top Quotes", desc: "Review customized quotes with maximum NCB discount benefits." },
        { step: "03", title: "Instant Payment", desc: "Secure online payment directly to the insurance underwriter." },
        { step: "04", title: "Immediate Policy Issuance", desc: "Instant digital copy delivered via WhatsApp and email." }
      ],
      documentsRequired: [
        "Vehicle RC front and back copy",
        "Previous insurance policy copy (if available)",
        "Odometer reading & current condition photos (if break-in case)"
      ],
      benefits: [
        "Save up to 40% on car insurance premium renewals",
        "Priority survey and cashless claim approval guidance",
        "Transparent IDV (Insured Declared Value) recommendations"
      ],
      faqs: [
        {
          question: "My insurance expired 6 months ago. Can I still renew it?",
          answer: "Yes! We specialize in break-in renewals with rapid self-inspection or instant surveyor clearance."
        },
        {
          question: "Can I transfer my 50% NCB from my old sold car to my new car?",
          answer: "Yes, we will help you procure the NCB Reserving Letter to transfer your full bonus discount."
        }
      ]
    },
    {
      id: "car-loan",
      slug: "car-loan",
      title: "Car Loan & Easy Finance",
      shortDesc: "Flexible used car financing with competitive interest rates, minimal paperwork, and repayment tenure up to 7 years.",
      fullDesc: "Don't let budget constraints delay your dream car. Indiacarbazar collaborates with leading national banks and NBFCs to offer customized car loans for pre-owned cars. Enjoy high LTV (up to 90% funding of car valuation), rapid sanction, and flexible repayment tenures.",
      badge: "Flexible EMI",
      iconName: "Banknote",
      image: "/images/service-loan.jpg",
      features: [
        "Loan funding up to 90% of certified vehicle market value",
        "Interest rates starting from attractive competitive slabs",
        "Flexible repayment tenure from 12 to 84 months",
        "Minimal documentation for salaried and self-employed applicants",
        "Fast-track sanction within 24 to 48 hours"
      ],
      process: [
        { step: "01", title: "Eligibility Check", desc: "Quick evaluation based on income and credit score." },
        { step: "02", title: "Document Submission", desc: "Collection of salary slips/ITR and bank statements." },
        { step: "03", title: "Vehicle Valuation & Approval", desc: "Official valuation report submitted to the funding institution." },
        { step: "04", title: "Disbursal & Delivery", desc: "Loan disbursed and car delivered to you with complete key handover." }
      ],
      documentsRequired: [
        "Salary Slips (3 months) or ITR (last 2 years)",
        "Bank Account Statement (last 6 months)",
        "KYC Proofs (PAN Card & Aadhaar / Passport)",
        "Proof of Residence and Utility Bill",
        "Vehicle Quotation from Indiacarbazar"
      ],
      benefits: [
        "Low EMIs tailored to your monthly cash flow",
        "No hidden processing surcharges",
        "Assistance for first-time vehicle loan borrowers"
      ],
      faqs: [
        {
          question: "Can I get a loan on a 7-year-old used car?",
          answer: "Yes, banks finance cars up to 10-12 years of overall lifespan at the end of the loan tenure."
        },
        {
          question: "Is down payment mandatory?",
          answer: "Down payment depends on your credit profile and car value. In select high-grade profiles, up to 90% LTV is approved."
        }
      ]
    },
    {
      id: "ownership-transfer-rto",
      slug: "ownership-transfer-rto",
      title: "Ownership Transfer & NOC Jobs",
      shortDesc: "Full legal transfer of vehicle title, state NOC generation, hypothecation clearance, and legal indemnity protection.",
      fullDesc: "Ensure complete legal protection when transferring car ownership. We arrange all motor vehicle related jobs including state No Objection Certificates (NOC), hypothecation removals (Form 35), duplicate RC generation, and official postal delivery.",
      badge: "Legal Security",
      iconName: "Stamp",
      image: "/images/service-transfer.jpg",
      features: [
        "Police clearance and national crime bureau check verification",
        "NOC procurement for moving vehicles between states or districts",
        "Loan clearance (Hypothecation endorsement removal / Form 35)",
        "Duplicate RC processing in case of loss or theft",
        "Official seller indemnity certificate protecting from e-challans"
      ],
      process: [
        { step: "01", title: "Clearance Verification", desc: "Check vehicle records for pending traffic challans and tax status." },
        { step: "02", title: "Form Preparation", desc: "Complete drafting of statutory transfer documentation." },
        { step: "03", title: "Liaison Submission", desc: "Filing and biometric/signature verification at relevant RTO." },
        { step: "04", title: "Final Endorsement", desc: "Delivery of fresh RC reflecting the new owner's details." }
      ],
      documentsRequired: [
        "Original Registration Certificate (RC)",
        "Bank NOC and Form 35 (if loan was active)",
        "Form 28 (Triplicate with pencil chassis prints for NOC)",
        "Valid Insurance and Pollution Certificate",
        "Buyer & Seller Identity Documentation"
      ],
      benefits: [
        "Zero chances of getting unauthorized traffic fines after selling",
        "Completely legal & bonded procedure",
        "Specialized handling for company-owned and commercial vehicles"
      ],
      faqs: [
        {
          question: "What happens if a buyer doesn't transfer the RC?",
          answer: "When you sell through Indiacarbazar, we issue a formal Legal Sale Indemnity Certificate and assume full liability until transfer is finalized."
        },
        {
          question: "How do I get an NOC for moving my car to another state?",
          answer: "We prepare Form 28 along with police verification and submit to the home RTO for issuing the interstate NOC."
        }
      ]
    },
    {
      id: "car-inspection-valuation",
      slug: "car-inspection-valuation",
      title: "150+ Point Vehicle Inspection & Valuation",
      shortDesc: "Detailed technical inspection covering engine, chassis, transmission, electricals, OBD diagnostic scan, and genuine pricing.",
      fullDesc: "Know the true condition of any second-hand car before you commit. Our veteran mechanics perform rigorous 150+ point diagnostic checks using specialized OBD scanners, digital paint depth gauges, and road test evaluations to uncover hidden flaws and calculate realistic market valuations.",
      badge: "Certified Quality",
      iconName: "SearchCheck",
      image: "/images/service-inspection.jpg",
      features: [
        "Computerized OBD diagnostic engine & electronics scan",
        "Paint depth gauge check for concealed accidental bodywork",
        "Suspension, steering, brakes, and underbody hoist inspection",
        "Odometer fraud & tamper detection analysis",
        "Comprehensive digital health report with high-res photos"
      ],
      process: [
        { step: "01", title: "Schedule Slot", desc: "Book at our hub or request mobile inspection at your location." },
        { step: "02", title: "60-Minute Deep Scan", desc: "Comprehensive physical, electronic, and road test verification." },
        { step: "03", title: "Valuation Calculation", desc: "Mathematical appraisal based on mileage, condition, and market demand." },
        { step: "04", title: "Comprehensive Report", desc: "Instant digital inspection report with star ratings and fair price." }
      ],
      documentsRequired: [
        "Vehicle available for physical inspection",
        "Vehicle RC copy for chassis number cross-matching",
        "Service history book (if available)"
      ],
      benefits: [
        "Avoid buying flooded, flood-damaged, or heavily accidental cars",
        "Leverage inspection insights for realistic negotiations",
        "100% unbiased certified technical diagnosis"
      ],
      faqs: [
        {
          question: "Can I bring a car I found online for you to inspect?",
          answer: "Yes! Bring any car to Indiacarbazar and our technicians will conduct a full independent pre-purchase inspection."
        },
        {
          question: "Do you detect odometer tampering?",
          answer: "Yes, our electronic scanner checks ECU logs against cluster readings to identify rollbacks."
        }
      ]
    }
  ] as ServiceItem[],

  // GALLERY - Exclusively using real dealership inventory, showroom & deliveries from public/images/fleet
  gallery: [
    {
      id: "gal-1",
      title: "Maruti Suzuki XL7 Alpha Hybrid MPV",
      category: "Showroom",
      imageUrl: "/images/fleet/fleet-xl7.jpg",
      caption: "Premium 7-seater crossover MPV in pristine showroom condition with smart hybrid technology, verified low mileage, and 100% legal RTO indemnity.",
      featured: true
    },
    {
      id: "gal-2",
      title: "Hyundai Creta SX(O) Executive Edition",
      category: "Certified Fleet",
      imageUrl: "/images/fleet/fleet-creta.jpg",
      caption: "Single-owner, verified non-accidental premium compact SUV with panoramic sunroof, ready for immediate transfer.",
      featured: true
    },
    {
      id: "gal-3",
      title: "MG Hector Sharp Pro Internet SUV",
      category: "Showroom",
      imageUrl: "/images/fleet/fleet-hector.jpg",
      caption: "Top-end luxury internet SUV featuring digital cockpit, panoramic glass roof, and verified 100% legal RTO indemnity.",
      featured: true
    },
    {
      id: "gal-4",
      title: "Toyota Innova Crysta 2.4 ZX Luxury MPV",
      category: "Certified Fleet",
      imageUrl: "/images/fleet/fleet-innova.jpg",
      caption: "Executive 7-seater touring MPV verified for structural integrity, genuine mileage, and non-accidental pedigree.",
      featured: true
    },
    {
      id: "gal-5",
      title: "Maruti Suzuki Dzire ZXi Compact Sedan",
      category: "Key Deliveries",
      imageUrl: "/images/fleet/fleet-dzire.jpg",
      caption: "Fuel-efficient executive sedan delivered with instant smart RC transfer, valid insurance, and certified indemnity.",
      featured: true
    },
    {
      id: "gal-6",
      title: "Tata Punch Creative Dual-Tone SUV",
      category: "Diagnostic Inspection",
      imageUrl: "/images/fleet/fleet-punch.jpg",
      caption: "5-Star GNCAP safety rated micro-SUV with comprehensive 150+ OBD computer inspection and chassis clearance.",
      featured: true
    },
    {
      id: "gal-7",
      title: "Maruti Suzuki Swift ZXi Sport Hatchback",
      category: "Certified Fleet",
      imageUrl: "/images/fleet/fleet-swift.jpg",
      caption: "Agile, certified pre-owned sports hatchback with verified low odometer reading and full mechanical warranty.",
      featured: false
    },
    {
      id: "gal-8",
      title: "Maruti Suzuki Ertiga ZXi Smart Hybrid",
      category: "Key Deliveries",
      imageUrl: "/images/fleet/fleet-ertiga.jpg",
      caption: "Spacious 7-seater family MPV with low-EMI bank finance approval, zero down payment options, and 24-hr disbursal.",
      featured: false
    },
    {
      id: "gal-9",
      title: "Maruti Suzuki WagonR ZXi 1.2L Tallboy",
      category: "Certified Fleet",
      imageUrl: "/images/fleet/fleet-wagonr.jpg",
      caption: "Reliable city commuter with certified engine warranty, zero accidental history, and instant insurance coverage.",
      featured: false
    },
    {
      id: "gal-10",
      title: "Mahindra XUV300 W8 Dual-Tone Turbo SUV",
      category: "Certified Fleet",
      imageUrl: "/images/fleet/fleet-xuv300.jpg",
      caption: "5-Star GNCAP certified compact SUV with dual-zone climate control, sunroof, all-wheel disc brakes, and complete service verification.",
      featured: true
    },
    {
      id: "gal-11",
      title: "Maruti Suzuki Brezza ZXi Showroom Edition",
      category: "Showroom",
      imageUrl: "/images/fleet/fleet-brezza.jpg",
      caption: "Flagship urban SUV displayed in our showroom with electric sunroof, SmartPlay Pro+ infotainment, and verified 100% legal RTO indemnity.",
      featured: true
    },
    {
      id: "gal-12",
      title: "Maruti Suzuki Fronx 1.0L Turbo Alpha",
      category: "Showroom",
      imageUrl: "/images/fleet/fleet-fronx.jpg",
      caption: "Contemporary coupe-crossover in showroom condition featuring 360-degree surround camera, heads-up display, and 150+ point diagnostic certificate.",
      featured: true
    },
    {
      id: "gal-13",
      title: "Maruti Suzuki S-Presso VXi+ Mini-SUV",
      category: "Certified Fleet",
      imageUrl: "/images/fleet/fleet-spresso.jpg",
      caption: "High ground-clearance urban mini-SUV with verified low kilometers, touchscreen infotainment, and instant ownership transfer.",
      featured: false
    },
    {
      id: "gal-14",
      title: "Maruti Suzuki Celerio VXi City Commuter",
      category: "Certified Fleet",
      imageUrl: "/images/fleet/fleet-celerio.jpg",
      caption: "Ultra-efficient commuter hatchback with smooth AMT transmission, single-owner history, and zero accidental repairs.",
      featured: false
    },
    {
      id: "gal-15",
      title: "Hyundai Exter SX(O) Connect Smart SUV",
      category: "Key Deliveries",
      imageUrl: "/images/fleet/fleet-exter.jpg",
      caption: "Urban micro-SUV with electric sunroof, dual dashcam, diamond-cut alloys, single-owner verification, and instant key delivery.",
      featured: true
    }
  ] as GalleryItem[],

  // Why choose us points
  whyChooseUs: [
    {
      id: "1",
      title: "The Best 2nd Hand Market Deals",
      desc: "Carefully vetted selection of pre-owned cars across all segments, ensuring you get true value for every rupee spent.",
      icon: "Sparkles"
    },
    {
      id: "2",
      title: "Complete RTO & Paperwork Handling",
      desc: "From smart card RC transfer to interstate NOCs and hypothecation removals, we manage all paperwork end-to-end.",
      icon: "ShieldCheck"
    },
    {
      id: "3",
      title: "Car Insurance & Instant Renewal",
      desc: "Customized insurance quotes with maximum NCB discounts, zero depreciation options, and cashless repair networks.",
      icon: "Award"
    },
    {
      id: "4",
      title: "Instant Car Loans & Easy EMIs",
      desc: "Collaborations with top banks & NBFCs ensuring up to 90% vehicle funding with rapid approval within 24 hours.",
      icon: "Banknote"
    },
    {
      id: "5",
      title: "Transparent & Non-Accidental Guarantee",
      desc: "Rigorous 150+ point diagnostic inspection, verified odometer readings, and comprehensive mechanical verification.",
      icon: "CheckCircle"
    },
    {
      id: "6",
      title: "Direct Helpline & Spot Assistance",
      desc: "Instant telephone support at 9073344500 and real-time WhatsApp coordination whenever you need vehicle guidance.",
      icon: "PhoneCall"
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      id: 1,
      name: "Rajesh Mukherjee",
      role: "Sold Hyundai Creta & Bought Honda City",
      location: "Salt Lake, Kolkata",
      rating: 5,
      comment: "Indiacarbazar made selling my Creta effortless! They inspected it in 45 minutes, gave me a spot digital payment, and handled the complete RTO transfer without a single headache. Truly the best option in the second-hand car market."
    },
    {
      id: 2,
      name: "Amitabh Banerjee",
      role: "Purchased Certified Maruti Swift",
      location: "Ballygunge, Kolkata",
      rating: 5,
      comment: "I was worried about odometer tampering and hidden accidental damage in used cars. Indiacarbazar gave me a full 150+ point inspection report, arranged my car loan at a great interest rate, and gave me the RC in 2 weeks. Highly recommended!"
    },
    {
      id: 3,
      name: "Pooja Sengupta",
      role: "Car Registration & Insurance Renewal",
      location: "Howrah",
      rating: 5,
      comment: "My car insurance had lapsed and my RC address change was stuck for months. Called their helpline 9073344500 and the team sorted out both within 48 hours. Excellent, transparent service!"
    }
  ]
};

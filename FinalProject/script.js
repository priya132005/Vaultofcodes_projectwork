const blogs = [
  // 🚀 Technology
  {
    title: "Android 16 Debuts with Multitasking & Security Upgrades",
    category: "Technology",
    image: "pic/Android 16 Released.png",
    link: "https://www.android.com/new-features-on-android/",
    content: "Released on June 10, Android 16 (codenamed “Baklava”) brings a major productivity boost with desktop windowing—resizable, multi‑window support ideal for foldables and tablets. Notifications receive Live Updates (like ride/delivery progress bars and lock screen updates), while accessibility improves with Auracast LE‑Audio and hearing aid enhancements. Google also adds Advanced Protection Mode and AI‑powered scam detection to secure high‑risk users, plus identity checks, notification redaction, and medical-record sharing via Health Connect. \n\nBeyond functionality, it refreshes usability: adaptive refresh rates, haptic slider feedback, custom keyboard shortcuts, and a revamped notification grouping. Under the hood, support for Ultra HDR, APV video codec, and Linux terminal make it a powerhouse on large-screen devices :contentReference[oaicite:1]{index=1}."
  },
  {
    title: "Nothing Phone (3) to Use Snapdragon 8s Gen 4",
    category: "Technology",
    image: "pic/news2.avif", 
    link: "https://www.exhibit.tech/tech-news/",
    content: "According to Exhibit Tech (June 18), Nothing’s upcoming Phone (3) is expected to ship with Qualcomm’s Snapdragon 8s Gen 4 chipset—offering flagship-level performance at a lower power draw. This marks the brand’s push into high‑end markets, pairing the powerful SoC with Nothing’s signature Glyph interface and clean software approach. Expect strong AI, camera, and battery performance, positioning it as a premium yet affordable alternative."
  },
  {
    title: "OnePlus Nord 5, CE5 & Buds 4 Launch Set for July 8",
    category: "Technology",
  image: "pic/news3.avif",
    link: "https://www.exhibit.tech/tech-news/",
    content: "OnePlus officially confirmed a product launch event on July 8 featuring the Nord 5, Nord CE5, and Buds 4. Anticipated highlights include 5G connectivity, AMOLED displays, fast charging, and competitive pricing—reinforcing OnePlus’s strategy to dominate the mid-range segment while delivering flagship-like specs."
  },
  {
    title: "ViewSonic Adds 92″ & 105″ Enterprise Ultra‑Wide Displays",
    category: "Technology",
    image: "pic/news4.jpg",
    link: "https://www.exhibit.tech/tech-news/",
    content: "ViewSonic has introduced two mammoth 92″ and 105″ ultra-wide displays designed for enterprise use in India. Tailored for control rooms, digital signage, and collaborative environments, these monitors boast 4K resolution, high color accuracy, and seamless tiling support. Their launch signals growing demand for large‑scale visual installations across education, corporate, and public sectors."
  },
  {
    title: "Microsoft Confirms Next‑Gen Xbox With AMD Chip",
    category: "Technology",
    image: "pic/news5.webp",
    link: "https://www.exhibit.tech/tech-news/",
    content: "Microsoft confirmed its next-generation Xbox console will feature a custom AMD CPU and GPU, aiming to boost console performance while enabling cross-platform play. Although precise specs remain under wraps, rumors suggest support for ray tracing, variable refresh rates, and enhanced SSD throughput—keeping Xbox competitive in the evolving gaming console market."
  },
  {
    title: "WhatsApp to Introduce Advertising Program Soon",
    category: "Technology",
   image: "pic/news6.jpg",
    link: "https://www.exhibit.tech/tech-news/",
    content: "Meta is reportedly rolling out a limited advertising program on WhatsApp, initially targeting Status and Catalog sections. Designed for businesses, the ads aim to monetize the app more effectively without disrupting conversations, positioning WhatsApp for steady revenue growth inside its massive global user base."
  },
  {
    title: "iOS 26 & macOS Tahoe Introduced at WWDC 2025",
    category: "Technology",
    image: "pic/news7.jpg",
    link: "https://www.exhibit.tech/tech-news/",
    content: "At WWDC 2025, Apple unveiled iOS 26 featuring a 'Liquid Glass' UI redesign, alongside macOS Tahoe—which marks the final major release supporting Intel-based Macs. Also announced were watchOS 26 and new tvOS features. The update emphasizes visual cohesion, cross-device continuity, and enhanced AI-driven health functionality across Apple’s ecosystem."
  },
  {
    title: "Google Gemini Gains Task‑Scheduling Powers",
    category: "Technology",
  image: "pic/news8.jpg",
    link: "https://www.exhibit.tech/tech-news/",
    content: "Google recently updated its Gemini AI assistant to include built-in task scheduling and reminders. Users can now ask Gemini to create calendar events, set follow-up reminders, and organize tasks within its interface—blurring the line between AI chat assistants and full-blown productivity tools."
  },

  // 💡 Startup & SpaceTech
  {
    title: "19 Indian Startups Raised $390 M Mid‑June",
    category: "Startup",
    image: "pic/news9.jpg",
    link: "https://www.linkedin.com/posts/indianstartupnews_startups-investors-funding-activity-7340054182676029440-IcDH",
    content: "Between June 9‑14, 2025, 19 Indian startups across sectors like fintech, agritech, AI, gaming, aerospace, and healthcare raised over US $390 million. The week was led by Udaan ($114 M) and CRED ($72 M), with participation from FlexiLoans, Vecmocon, Wow! Momo, and others. This surge marks a 322% jump from early June and highlights investor appetite across growth and early-stage ventures :contentReference[oaicite:2]{index=2}."
  },
  {
    title: "GalaxEye Preps 0.5 m Resolution EO Satellite",
    category: "Startup",
    image: "pic/news10.jpg",
    link: "https://timesofindia.indiatimes.com/science/bengaluru-space-startup-galaxeye-to-build-2nd-eo-satellite-with-0-5-metres-resolution/articleshow/121956484.cms",
    content: "Bengaluru-based GalaxEye is developing its second earth-observation satellite, capable of 0.5 m spatial resolution and sub-3-day revisit frequency. Supported by Infosys, this mission follows their 'Mission Drishti' debut, signaling India’s growing competence in commercial satellite imaging :contentReference[oaicite:3]{index=3}."
  },
  {
    title: "Infosys‑Backed GalaxEye Satellite Plan",
    category: "Startup",
    image: "pic/news11.jpg",
    link: "https://economictimes.indiatimes.com/tech/technology/infosys-backed-galaxeye-plans-new-satellite-to-meet-global-demand-for-geospatial-data/articleshow/121957767.cms",
    content: "Infosys is backing GalaxEye’s move into next-gen geospatial data services, targeting global demand. The investment supports building a constellation of high-resolution satellites equipped for agriculture, urban planning, disaster management, and environmental monitoring :contentReference[oaicite:4]{index=4}."
  },
  {
    title: "Foxhog Backs IIT‑Kanpur Aerospace Startups",
    category: "Startup",
   image: "pic/news12.jpg",
    link: "https://timesofindia.indiatimes.com/city/kanpur/us-firm-commits-25cr-for-iit-k-startups-in-aerospace-defence/articleshow/121836214.cms",
    content: "US-based VC Foxhog Ventures has pledged ₹25 crore to IIT Kanpur’s startup incubation center (SIIC), focusing on aerospace, defence and agritech ventures. The grant supports prototype development, commercialization, and global scaling of cutting-edge projects ſtar­t­ing from January 2025 onwards :contentReference[oaicite:5]{index=5}."
  },
  {
    title: "Sarvam AI to Build India's First LLM",
    category: "Startup",
    image: "pic/news13.jpg",
    link: "https://en.wikipedia.org/wiki/Sarvam_AI",
    content: "Sarvam AI has been selected under the IndiaAI initiative to train India’s first indigenous foundational LLM—using a massive cluster of 4,000 GPUs. The model aims to support regional languages and cultural contexts, reducing reliance on foreign AI systems and promoting self-sufficiency in critical digital infrastructure :contentReference[oaicite:6]{index=6}."
  },
  {
    title: "QpiAI Launches 25‑Qubit Quantum Computer",
    category: "Startup",
  image: "pic/news14.jpg",
    link: "https://en.wikipedia.org/wiki/India%27s_quantum_computer",
    content: "QpiAI unveiled ‘QpiAI‑Indus’, a superconducting quantum computer with 25 qubits—the first full-stack quantum system built entirely in India. The startup plans to make the system accessible via the cloud for research, cryptography, and optimization use cases, marking a significant milestone in India’s quantum tech ambitions :contentReference[oaicite:7]{index=7}."
  },
  {
    title: "Neysa Raises $50 M for AI Cloud Platform",
    category: "Startup",
 image: "pic/news15.jpg",
    link: "https://en.wikipedia.org/wiki/Neysa",
    content: "Neysa, based in Mumbai, offers managed GPU cloud & HPC specifically tailored for GenAI workloads. They’ve recently secured $50 million across seed and Series A rounds to expand infrastructure, attract global AI developers, and enhance performance for AI/ML startups in India :contentReference[oaicite:8]{index=8}."
  },

  // 🏠 Lifestyle
  {
    title: "Indians Prefer Homegrown Kitchenware",
    category: "Lifestyle",
   image: "pic/news16.jpg",
    link: "https://timesofindia.indiatimes.com/entertainment/events/indian-consumers-shift-toward-homegrown-kitchenware-as-lifestyle-changes-drive-demand/articleshow/121886298.cms",
    content: "Urban Indian households are increasingly favoring domestically manufactured kitchenware—compact, stylish, and health‑safe—to suit smaller living spaces and on‑the‑go lifestyles. Products with toxin-free coatings, modular designs, and easy-to-clean surfaces are seeing strong demand as social media encourages healthy kitchen habits. The Indian kitchenware market is projected to grow from US$3 bn in 2025 to over US$4.8 bn by 2032, with a nearly 7 % CAGR :contentReference[oaicite:9]{index=9}."
  },
  {
    title: "International Yoga Day 2025 on June 21",
    category: "Lifestyle",
    image: "pic/news17.jpg",
    link: "https://indiatimes.com/events/international-yoga-day-2025-date-theme-history-quotes-wishes-and-more-661224.html",
    content: "June 21 marks International Yoga Day 2025, aligned with the summer solstice. This year’s theme, “One Earth, One Health,” emphasizes the connection between individual well‑being and environmental sustainability. Across India and beyond, events—from sunrise asanas to community yoga—celebrate unity, mindfulness, and ecological awareness :contentReference[oaicite:10]{index=10}."
  },
  {
    title: "Shriya Saran’s Art‑Filled Traditional Home",
    category: "Lifestyle",
    image: "pic/news18.jpg",
    link: "https://indianexpress.com/section/lifestyle/",
    content: "Bollywood actress Shriya Saran recently offered a tour of her traditional home, rich with Indian crafts and vibrant art pieces. The space features handcrafted wooden furniture, antique textiles, and artisanal pottery—blending cultural heritage with modern comfort, inspiring many viewers to embrace ethnic aesthetics in personal spaces."
  },
  {
    title: "‘Poop Rule’: Pantry Decluttering Hack Goes Viral",
    category: "Lifestyle",
   image: "pic/news19.jpg",
    link: "https://indianexpress.com/section/lifestyle/",
    content: "The quirky 'poop rule' pantry hack has taken social media by storm: designate a container for pantry ‘poop’—expired/spoiled items—and discard them weekly. Users report it makes pantry management less overwhelming, preserving space and reducing waste."
  },
  {
    title: "Fukinsei: Embracing Imperfect Beauty",
    category: "Lifestyle",
   image: "pic/news20.jpg",
    link: "https://indianexpress.com/section/lifestyle/",
    content: "Home decor trend 'Fukinsei'—a Japanese aesthetic celebrating asymmetry and imperfection—is gaining traction in India. Styles featuring uneven ceramics, wabi‑sabi textures, and off‑balance layouts are praised for adding authenticity, warmth, and character to interiors."
  },
  {
    title: "Tips to Get Rid of Rice Weevils",
    category: "Lifestyle",
    image: "pic/news21.jpg",
    link: "https://indianexpress.com/section/lifestyle/",
    content: "A viral tip recommends freezing rice for 48 hours before storage—effectively killing rice weevils—then transferring grains to airtight containers with bay leaves. Users have reported up to 90 % fewer pantry infestations using this low-cost, chemical‑free method."
  },
  {
    title: "Mona Singh Launches Food Business after Jassi",
    category: "Lifestyle",
 image: "pic/nws22.jpg",
    link: "https://indianexpress.com/section/lifestyle/",
    content: "Actress Mona Singh, beloved for her role in 'Jassi Jaissi Koi Nahin', has launched a wellness-focused food startup featuring millet-based snacks and healthy mixes. She cites personal health challenges as motivation, aiming to share nutritious, flavorful options with fans."
  },
  {
    title: "Kapil Sharma’s Dangerous Jogging Warning",
    category: "Lifestyle",
  image: "pic/news23.jpg",
    link: "https://indianexpress.com/section/lifestyle/",
    content: "Safety experts cautioned comedian Kapil Sharma—and other headphone-wearing runners—about the risks of outdoor jogging without ambient awareness. They recommend runners maintain situational awareness by using bone‑conduction headphones or keeping one earbud out."
  },
  {
    title: "Insulin Plant Claims Over Diabetes Debunked",
    category: "Lifestyle",
   image: "pic/news24.webp",
    link: "https://indianexpress.com/section/lifestyle/",
    content: "Despite social media buzz around the 'insulin plant' (Costus igneus) as a diabetes cure, experts say there's no clinical evidence it lowers blood sugar in humans. Authorities urge patients to continue prescribed medications and consult healthcare providers before trying such herbal claims."
  },
  {
    title: "Bubble Tea Craze: India’s Flavorful Trend",
    category: "Lifestyle",
   image: "pic/news25.jpg",
    link: "https://economictimes.indiatimes.com/topic/lifestyle-products",
    content: "Bubble tea shops are booming in India, driven by Gen Z and millennial consumers. Brands are offering customizable beverages—ranging from sugar-free brown sugar boba to matcha and fruit blends—aligning with healthy-conscious trends while maintaining indulgent variety."
  },
  {
    title: "Myntra’s Summer Fashion Steals",
    category: "Lifestyle",
   image: "pic/news26.jpg",
    link: "https://economictimes.indiatimes.com/topic/lifestyle-products",
    content: "Myntra’s End‑of‑Reason and Super‑Saving Days sale offers up to 80 % off across fashion, bags, footwear, and beauty. The event highlights summer must-haves like breezy kurtas, linen shirts, sandals, and eco-friendly totes—drawing record traffic and boosting sales early in the season."
  }
];





const container = document.getElementById("blog-container");
const showMoreBtn = document.getElementById("show-more-btn");
let currentCategory = "All";
let shownCount = 10;

// Display blogs function
function displayBlogs(filteredBlogs, count = 10) {
  container.innerHTML = "";
  const toDisplay = filteredBlogs.slice(0, count);

  toDisplay.forEach(blog => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}">
      <h3>${blog.title}</h3>
      <p>${blog.category}</p>
    `;
    card.onclick = () => showFullBlog(blog);
    container.appendChild(card);
  });

  showMoreBtn.style.display = filteredBlogs.length > count ? "block" : "none";
}

// Full blog view
function showFullBlog(blog) {
  document.body.innerHTML = `
    <div style="padding: 40px; max-width: 800px; margin: auto;">
      <h1>${blog.title}</h1>
      <img src="${blog.image}" style="width:100%; border-radius:8px; margin: 20px 0;" />
      <p><strong>Category:</strong> ${blog.category}</p>
      <p style="margin-top:20px; line-height:1.6;">${blog.content}</p>
      <button onclick="location.reload()" style="margin-top: 40px; padding: 10px 20px; background:#000; color:#fff; border:none; cursor:pointer;">← Back to Home</button>
    </div>
  `;
}

// Filter blogs
function filterBlogs(category) {
  currentCategory = category;
  shownCount = 10;
  const filtered = getFilteredBlogs();
  displayBlogs(filtered, shownCount);
}

function getFilteredBlogs() {
  return currentCategory === "All"
    ? blogs
    : blogs.filter(b => b.category === currentCategory);
}

// Show more button
showMoreBtn.addEventListener("click", () => {
  const filtered = getFilteredBlogs();
  shownCount += 15;
  displayBlogs(filtered, shownCount);
});

// Initial blog render
displayBlogs(blogs.slice(0, 10));


document.addEventListener('DOMContentLoaded', function () {
  new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

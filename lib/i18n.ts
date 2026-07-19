export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type Product = {
  slug: string;
  name: string;
  category: string;
  origin: string;
  season: string;
  description: string;
  detail: string;
  image: string;
  tone: string;
};

const images = {
  berry: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1500&q=85",
  mango: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1500&q=85",
  grape: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=1500&q=85",
  pineapple: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1500&q=85",
  orchard: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=1800&q=85",
  citrus: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1500&q=85",
};

export const products: Record<Locale, Product[]> = {
  en: [
    { slug: "sunrise-mango", name: "Sunrise Mango", category: "Tropical", origin: "Peru · Ecuador", season: "Nov — Mar", description: "Silky, sun-ripened sweetness with a clean floral finish.", detail: "Hand-selected at optimum maturity, our Sunrise Mangoes travel in a carefully managed cold chain to arrive with their aroma, colour and generous texture intact.", image: images.mango, tone: "bg-[#f7e2a7]" },
    { slug: "evergreen-grape", name: "Evergreen Grape", category: "Table grapes", origin: "Chile · South Africa", season: "Dec — Apr", description: "A crisp, naturally sweet grape for everyday brightness.", detail: "From canopy management to pre-cooling, each Evergreen Grape is grown for a precise bite and carefully packed to protect its bloom and freshness.", image: images.grape, tone: "bg-[#d6e3bd]" },
    { slug: "golden-pineapple", name: "Golden Pineapple", category: "Tropical", origin: "Costa Rica · Philippines", season: "All year", description: "Golden flesh, radiant acidity and a fragrant tropical heart.", detail: "We source pineapples from trusted growing regions, following each lot from field through ripening and transport for a reliably vibrant eating experience.", image: images.pineapple, tone: "bg-[#f5df8d]" },
    { slug: "ruby-strawberry", name: "Ruby Strawberry", category: "Berries", origin: "China · Egypt", season: "Oct — May", description: "Tender, aromatic berries harvested for a short, sweet journey.", detail: "A fast harvest-to-cooling program preserves the Ruby Strawberry's colour, fragrance and delicate texture from local field to global shelf.", image: images.berry, tone: "bg-[#f3cdca]" },
  ],
  zh: [
    { slug: "sunrise-mango", name: "晨曦芒果", category: "热带水果", origin: "秘鲁 · 厄瓜多尔", season: "11月 — 3月", description: "丝滑丰润，甜美中带着清新的花果香。", detail: "晨曦芒果在最佳成熟度人工甄选，通过全程精细温控抵达目的地，保留完整的香气、色泽和饱满口感。", image: images.mango, tone: "bg-[#f7e2a7]" },
    { slug: "evergreen-grape", name: "长青葡萄", category: "鲜食葡萄", origin: "智利 · 南非", season: "12月 — 4月", description: "清脆自然甜，让每一天都明亮鲜活。", detail: "从冠层管理到预冷处理，每一串长青葡萄都以精准的爽脆口感为目标栽培，并经由精心包装守护果粉与新鲜。", image: images.grape, tone: "bg-[#d6e3bd]" },
    { slug: "golden-pineapple", name: "金钻凤梨", category: "热带水果", origin: "哥斯达黎加 · 菲律宾", season: "全年供应", description: "金黄果肉，明亮酸甜，热带香气馥郁。", detail: "我们与优质产区长期合作，从田间、成熟度到运输全程追溯，让每一颗凤梨都有稳定而鲜活的风味体验。", image: images.pineapple, tone: "bg-[#f5df8d]" },
    { slug: "ruby-strawberry", name: "红宝石草莓", category: "浆果", origin: "中国 · 埃及", season: "10月 — 5月", description: "果香馥郁、柔嫩多汁，为短暂的甜美旅程而采摘。", detail: "高效的采后预冷流程守护红宝石草莓的色泽、香气与细腻质地，让鲜采美味跨越距离抵达货架。", image: images.berry, tone: "bg-[#f3cdca]" },
  ],
};

export const copy = {
  en: {
    nav: { home: "Home", about: "About", products: "Products", supply: "Supply Chain", quality: "Quality", news: "News", contact: "Contact" },
    common: { explore: "Explore collection", learn: "Discover more", back: "Back to products", read: "Read story", allProducts: "View all products", speak: "Start a conversation", availability: "Availability" },
    home: { eyebrow: "International fresh fruit supply chain", title: "Good fruit.\nGrown with care.", intro: "From considered orchards to tables around the world, we bring nature's brightest fruit closer to every day.", scroll: "Scroll to discover", promiseTitle: "Freshness, made beautifully simple.", promiseText: "We connect exceptional growing regions with the people who value flavour, quality and a more thoughtful way forward.", global: "A global garden, in motion.", globalText: "Origins, people and precision working together to keep goodness moving.", commitment: "Our commitment", stories: "From the garden", stats: [{ value: "18+", label: "growing regions" }, { value: "26", label: "markets served" }, { value: "48h", label: "from harvest to cooling" }] },
    about: { eyebrow: "About Good Garden", title: "A better way to bring fruit into the world.", intro: "We are a new-generation international fruit company, guided by respect for the land and a belief that fresh food should feel like optimism.", storyTitle: "Rooted in care.\nBuilt to travel.", storyText: "Our team works across growing regions, packhouses and markets to make fresh fruit feel effortless. We combine local expertise with global standards, pairing the right fruit with the right moment and market.", values: [{ title: "Nature-led", text: "We work with the rhythms of each growing region, season and variety." }, { title: "Open by design", text: "Traceability and honest partnerships guide every decision." }, { title: "Fresh thinking", text: "We use data and care in equal measure to improve the journey." }] },
    products: { eyebrow: "Our collection", title: "The season's most beautiful work.", intro: "A curated range of fresh fruit with character, consistency and a clear sense of where it comes from.", filters: "All fruits", origin: "Origin", season: "Season", detail: "Meet the fruit" },
    supply: { eyebrow: "Supply chain", title: "The shortest distance between orchard and opportunity.", intro: "A connected, visible supply chain that protects the freshness of every fruit—and the confidence of every partner.", steps: [{ number: "01", title: "Grow with intent", text: "We partner with experienced growers and plan around variety, season and soil." }, { number: "02", title: "Select with precision", text: "Each lot is checked at harvest and handled to protect its natural quality." }, { number: "03", title: "Move with care", text: "Temperature, timing and visibility are managed from packhouse to destination." }, { number: "04", title: "Arrive with impact", text: "Fruit reaches customers ready for the shelf, and ready to be enjoyed." }], callout: "Traceable by nature. Reliable by design." },
    quality: { eyebrow: "Quality & responsibility", title: "Care you can taste. Standards you can see.", intro: "Quality is a daily practice, from the field teams we trust to the information we share with our partners.", pillars: [{ title: "Food safety", text: "Practical controls and third-party certifications are built into every operational stage." }, { title: "Responsible growing", text: "We encourage efficient water use, soil health and thoughtful crop management." }, { title: "Cold-chain care", text: "Post-harvest handling is designed around the ideal conditions for each fruit." }], note: "We are building a more transparent, resilient fruit system—one season at a time." },
    news: { eyebrow: "Journal", title: "Stories with something growing in them.", intro: "Ideas, updates and people from across the GOOD GARDEN FOOD world.", items: [{ date: "10.06.2026", tag: "Company", title: "GOOD GARDEN FOOD opens a new quality hub in Shanghai", image: images.citrus }, { date: "22.05.2026", tag: "Growing", title: "Why a good grape begins long before harvest", image: images.grape }, { date: "08.04.2026", tag: "Responsibility", title: "Small packaging changes, a more considered journey", image: images.berry }] },
    contact: { eyebrow: "Contact", title: "Let’s grow something good together.", intro: "Whether you are a retailer, foodservice partner or grower, we would love to hear what is on your horizon.", formTitle: "Tell us a little more", name: "Your name", company: "Company", email: "Work email", interest: "I am interested in", message: "How can we help?", select: "Select an option", options: ["Sourcing fruit", "Supplying fruit", "Partnership", "General enquiry"], send: "Send enquiry", sending: "Sending…", success: "Thank you. Your message is on its way.", error: "Something went wrong. Please try again or email us directly.", locations: "Our connection points", office: "Asia Pacific Office", address: "88 Century Avenue, Pudong, Shanghai 200120, China" },
    footer: { note: "Cultivating better days, from garden to table.", legal: "© 2026 GOOD GARDEN FOOD. All rights reserved.", privacy: "Privacy", terms: "Terms" },
  },
  zh: {
    nav: { home: "首页", about: "关于我们", products: "产品", supply: "供应链", quality: "品质", news: "新闻", contact: "联系" },
    common: { explore: "探索产品系列", learn: "了解更多", back: "返回产品列表", read: "阅读故事", allProducts: "查看全部产品", speak: "开始沟通", availability: "供应信息" },
    home: { eyebrow: "国际鲜果供应链", title: "好水果，\n用心生长。", intro: "从悉心呵护的果园到世界各地的餐桌，我们让自然最明亮的果实融入每一个日常。", scroll: "向下探索", promiseTitle: "让新鲜，恰到好处。", promiseText: "我们连接优质产区与珍视风味、品质和可持续未来的人们。", global: "一个不断生长的全球花园。", globalText: "产地、伙伴与精准协同，让美好一路新鲜流动。", commitment: "我们的承诺", stories: "来自花园的故事", stats: [{ value: "18+", label: "核心产区" }, { value: "26", label: "服务市场" }, { value: "48h", label: "采后预冷" }] },
    about: { eyebrow: "关于 GOOD GARDEN", title: "用更好的方式，把水果带到世界。", intro: "我们是一家新一代国际水果公司，尊重土地，并相信新鲜食物本就该带来乐观与美好。", storyTitle: "根植用心，\n一路抵达。", storyText: "我们的团队穿梭于产区、包装厂和市场之间，让新鲜水果的每一次抵达都自然从容。我们将本地经验与国际标准结合，为恰当的时刻和市场匹配恰好的水果。", values: [{ title: "顺应自然", text: "我们遵循每个产区、季节和品种的自然节奏。" }, { title: "坦诚共创", text: "可追溯性与真诚合作，是每个决策的基础。" }, { title: "持续焕新", text: "我们让数据与用心同行，不断优化每一段旅程。" }] },
    products: { eyebrow: "我们的产品", title: "当季最美好的作品。", intro: "甄选有个性、有稳定品质、也有清晰产地故事的新鲜水果。", filters: "全部水果", origin: "产地", season: "供应季", detail: "认识这份鲜果" },
    supply: { eyebrow: "供应链", title: "让果园与机遇之间，更近一点。", intro: "可连接、可视化的供应链，守护每一份鲜果的新鲜，也守护每一位合作伙伴的信心。", steps: [{ number: "01", title: "用心种植", text: "与经验丰富的种植者合作，围绕品种、季节和土壤做好规划。" }, { number: "02", title: "精准甄选", text: "每一批水果都在采摘时检验，并以专业方式守护天然品质。" }, { number: "03", title: "细致运输", text: "从包装厂到目的地，温度、时效和可视性始终受到管理。" }, { number: "04", title: "鲜活抵达", text: "水果抵达时，已经为货架和愉悦品尝做好准备。" }], callout: "天生可追溯，始终值得信赖。" },
    quality: { eyebrow: "品质与责任", title: "一口尝得到的用心，看得见的标准。", intro: "品质是一种每日实践，始于我们信赖的田间团队，也体现在与伙伴分享的每一份信息中。", pillars: [{ title: "食品安全", text: "从操作环节到第三方认证，实用的管控融入每一个阶段。" }, { title: "责任种植", text: "我们鼓励高效用水、土壤健康和审慎的作物管理。" }, { title: "冷链守护", text: "采后处理为每种水果的理想状态而设计。" }], note: "我们正在构建一个更透明、更有韧性的水果体系，一季又一季。" },
    news: { eyebrow: "花园日志", title: "每个故事，都有生长的力量。", intro: "来自 GOOD GARDEN FOOD 世界的灵感、动态与人物故事。", items: [{ date: "10.06.2026", tag: "公司动态", title: "GOOD GARDEN FOOD 在上海启用全新品质中心", image: images.citrus }, { date: "22.05.2026", tag: "种植故事", title: "为什么一颗好葡萄，远在采摘之前就已开始", image: images.grape }, { date: "08.04.2026", tag: "责任行动", title: "小小的包装改变，更周全的新鲜旅程", image: images.berry }] },
    contact: { eyebrow: "联系我们", title: "一起，种下更多美好。", intro: "无论您是零售商、餐饮服务伙伴还是种植者，我们都期待聆听您对未来的想法。", formTitle: "请告诉我们更多", name: "您的姓名", company: "公司名称", email: "工作邮箱", interest: "您感兴趣的是", message: "我们如何帮助您？", select: "请选择", options: ["水果采购", "水果供应", "合作伙伴关系", "一般咨询"], send: "发送咨询", sending: "发送中…", success: "感谢您的来信。我们已收到您的消息。", error: "发送失败，请稍后重试或直接发邮件联系我们。", locations: "我们的连接点", office: "亚太办公室", address: "中国上海市浦东新区世纪大道88号，200120" },
    footer: { note: "从花园到餐桌，培育更美好的每一天。", legal: "© 2026 GOOD GARDEN FOOD. 保留所有权利。", privacy: "隐私政策", terms: "使用条款" },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

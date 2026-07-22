export const locales = ["en", "zh", "ru"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ru: "RU",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const images = {
  ecuador: "/assets/origin/ecuador-field-v2.png",
  philippines: "/assets/origin/philippines-field-v2.png",
  mekong: "/assets/origin/mekong-origins-v2.png",
  guangxi: "/assets/origin/guangxi-field-v2.png",
  crate: "/assets/brand/good-garden-crate.jpeg",
  packaging: "/assets/brand/good-garden-packaging.jpeg",
};

export const copy = {
  en: {
    seo: {
      title: "GOOD GARDEN | Premium Banana Brand",
      description:
        "GOOD GARDEN is an international premium banana brand sourcing from Ecuador, the Philippines, Cambodia, Vietnam, Laos and Guangxi, China.",
    },
    nav: {
      brand: "Brand",
      banana: "Our banana",
      origins: "Origins",
      presence: "Global presence",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Premium bananas · Selected origins",
      title: "One fruit.\nInfinite possibility.",
      intro:
        "GOOD GARDEN is building a modern international banana brand—focused on thoughtful sourcing, consistent quality and long-term market partnerships.",
      primary: "Start a conversation",
      secondary: "Discover our banana",
      note: "Focused today. Ready for what comes next.",
      imageAlt: "Premium bananas growing at a selected GOOD GARDEN origin",
    },
    manifesto: {
      eyebrow: "Our focus",
      title: "We choose depth before distance.",
      body:
        "Bananas are not one category among many for us. They are the craft we are building around—from origin relationships and product selection to a brand people can recognise and trust.",
      points: [
        { title: "Specialist by choice", text: "One core category, understood in greater detail." },
        { title: "Global by nature", text: "A considered portfolio of proven growing regions." },
        { title: "Built for partnership", text: "Commercial programmes shaped around real market needs." },
      ],
    },
    product: {
      eyebrow: "Our first signature",
      title: "The banana, unmistakably GOOD GARDEN.",
      intro:
        "Our current portfolio is centred on premium Cavendish bananas selected for dependable appearance, handling performance and market appeal.",
      name: "Premium Cavendish",
      description:
        "A familiar fruit elevated through disciplined selection, a distinctive identity and a consistent presentation from case to shelf.",
      details: [
        { label: "Current focus", value: "Premium bananas" },
        { label: "Commercial formats", value: "Wholesale and retail-ready" },
        { label: "Brand promise", value: "Clarity, consistency, partnership" },
      ],
      futureTitle: "One category today. A broader garden tomorrow.",
      futureText:
        "Bananas are our foundation. The brand and platform are designed to welcome selected fresh-produce categories as GOOD GARDEN grows.",
      imageAlt: "GOOD GARDEN premium bananas in branded packaging",
    },
    origins: {
      eyebrow: "Selected origins",
      title: "Chosen for the way they grow—and the value they bring.",
      intro:
        "Our origin portfolio balances established export expertise, regional responsiveness and distinctive growing conditions.",
      groups: [
        {
          number: "01",
          kicker: "South America",
          title: "Ecuador",
          image: images.ecuador,
          imageAlt: "Banana plantation landscape in Ecuador",
          body:
            "One of the world’s defining banana origins, Ecuador combines year-round tropical production with deep export experience and mature quality practices.",
          countries: [
            { name: "Ecuador", detail: "A dependable anchor for premium, internationally traded banana programmes." },
          ],
        },
        {
          number: "02",
          kicker: "Southeast Asia",
          title: "Philippines",
          image: images.philippines,
          imageAlt: "Banana plantation in the Philippines",
          body:
            "The Philippines brings long-standing Cavendish expertise, tropical growing conditions and an export culture developed around discerning Asian markets.",
          countries: [
            { name: "Philippines", detail: "Established plantation knowledge supports consistent premium supply." },
          ],
        },
        {
          number: "03",
          kicker: "Mekong region",
          title: "Cambodia · Vietnam · Laos",
          image: images.mekong,
          imageAlt: "Banana plantation in the Mekong region",
          body:
            "Mainland Southeast Asia adds proximity, agility and an increasingly professional base of export-oriented banana production.",
          countries: [
            { name: "Cambodia", detail: "Expanding plantations and growing export capability." },
            { name: "Vietnam", detail: "Responsive regional supply supported by close market connections." },
            { name: "Laos", detail: "A land-connected origin with meaningful regional potential." },
          ],
        },
        {
          number: "04",
          kicker: "China origin",
          title: "Premium Guangxi",
          image: images.guangxi,
          imageAlt: "Premium banana plantation in Guangxi, China",
          body:
            "Guangxi gives the portfolio a premium China-grown expression, valued for responsiveness, freshness and a strong local origin story.",
          countries: [
            { name: "Guangxi, China", detail: "A close-to-market option selected for agile commercial programmes." },
          ],
        },
      ],
    },
    presence: {
      eyebrow: "Global presence",
      title: "Selected origins. Open horizons.",
      intro:
        "Our sourcing footprint is international by design. Central Asia is the market focus we are growing today—not the limit of tomorrow.",
      focusTitle: "Current market focus",
      focusText:
        "We are developing partnerships across Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan and Turkmenistan.",
      expansion:
        "As GOOD GARDEN grows, we will continue to build distributor, wholesale and retail relationships in new international markets.",
      markets: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"],
      map: {
        ariaLabel: "World map showing GOOD GARDEN banana origins and current Central Asian market focus",
        originLegend: "Selected origins",
        marketLegend: "Current market focus",
        ecuadorLabel: "Ecuador",
        asiaLabel: "Southeast Asia + Guangxi",
        marketLabel: "Central Asia",
      },
    },
    standard: {
      eyebrow: "The GOOD GARDEN standard",
      title: "Recognisable by design. Reliable by discipline.",
      intro:
        "Our brand turns a focused banana programme into a clear, confident market proposition—supported by the practical standards needed to protect product quality.",
      imageAlt: "GOOD GARDEN branded banana carton",
      secondaryImageAlt: "GOOD GARDEN banana packaging design",
      principles: [
        { number: "01", title: "Careful selection", text: "Origin and product specifications chosen for each commercial programme." },
        { number: "02", title: "Consistent presentation", text: "Packing and cold-chain coordination designed to protect quality and appearance." },
        { number: "03", title: "Market partnership", text: "Flexible cooperation with importers, distributors, wholesalers and retailers." },
      ],
    },
    social: {
      eyebrow: "Stay connected",
      title: "Follow GOOD GARDEN",
      text: "Our official social channels are being prepared. The links below are ready for the final account URLs.",
      pending: "Coming soon",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
    },
    contact: {
      eyebrow: "Business enquiries",
      title: "Let’s grow the next market together.",
      intro:
        "Talk to us about purchasing, distribution, wholesale, retail programmes or a new market partnership.",
      formTitle: "Send an enquiry",
      name: "Your name",
      company: "Company",
      email: "Work email",
      interest: "I am interested in",
      message: "Your message",
      select: "Select an option",
      options: ["Buying bananas", "Supplying bananas", "Distribution partnership", "New market cooperation", "General enquiry"],
      send: "Send enquiry",
      sending: "Sending…",
      success: "Thank you. Your message has been received.",
      error: "Something went wrong. Please try again.",
      people: [
        { name: "Jason Gu", phone: "+86 177 0569 6905", email: "gujinhui718@gmail.com" },
        { name: "Abliz Yunus", phone: "+86 139 1607 3054", email: "mayorlee31@gmail.com" },
      ],
      office: "Fergana city, Kirguli MFY Sanoat street, 213-V, Republic of Uzbekistan",
    },
    footer: {
      note: "Premium bananas. Selected origins. Open horizons.",
      explore: "Explore",
      legal: "© 2026 GOOD GARDEN. All rights reserved.",
    },
  },
  zh: {
    seo: {
      title: "GOOD GARDEN | 国际精品香蕉品牌",
      description:
        "GOOD GARDEN 是国际精品香蕉品牌，精选厄瓜多尔、菲律宾、柬埔寨、越南、老挝及中国广西优质产地。",
    },
    nav: {
      brand: "品牌",
      banana: "精品香蕉",
      origins: "精选产地",
      presence: "全球布局",
      contact: "联系我们",
    },
    hero: {
      eyebrow: "精品香蕉 · 全球精选产地",
      title: "一根香蕉，\n更大的世界。",
      intro:
        "GOOD GARDEN 致力于打造现代国际香蕉品牌，以严谨选品、稳定品质和长期市场伙伴关系为核心。",
      primary: "开启合作",
      secondary: "了解我们的香蕉",
      note: "专注当下，也为未来生长。",
      imageAlt: "GOOD GARDEN 精选产地生长中的精品香蕉",
    },
    manifesto: {
      eyebrow: "我们的专注",
      title: "先把一件事做深，\n再把世界做大。",
      body:
        "香蕉不是我们众多品类中的一个，而是 GOOD GARDEN 品牌正在深耕的专业。从产地合作、产品选择到消费者能够识别并信赖的品牌表达，我们专注每一个环节。",
      points: [
        { title: "专精一个品类", text: "以更深的理解做好核心香蕉产品。" },
        { title: "连接全球产地", text: "构建经过选择的优质产地组合。" },
        { title: "重视长期合作", text: "围绕真实市场需求设计商业方案。" },
      ],
    },
    product: {
      eyebrow: "首个核心产品",
      title: "让一根香蕉，拥有鲜明的 GOOD GARDEN 识别。",
      intro:
        "目前我们的产品组合聚焦精品卡文迪什香蕉，重点关注外观一致性、流通表现和市场接受度。",
      name: "精品卡文迪什香蕉",
      description:
        "通过严谨选品、鲜明品牌和稳定呈现，让熟悉的香蕉从包装箱到终端货架都保持清晰价值。",
      details: [
        { label: "当前专注", value: "精品香蕉" },
        { label: "商业形式", value: "批发与零售包装" },
        { label: "品牌承诺", value: "清晰、稳定、长期合作" },
      ],
      futureTitle: "今天专注一个品类，明天生长出更大的花园。",
      futureText:
        "香蕉是我们的基础。GOOD GARDEN 的品牌与业务平台已为未来引入经过精选的更多新鲜水果品类预留空间。",
      imageAlt: "GOOD GARDEN 品牌包装中的精品香蕉",
    },
    origins: {
      eyebrow: "全球精选产地",
      title: "看重生长条件，\n更看重产地带来的长期价值。",
      intro:
        "我们的产地组合兼顾成熟的出口经验、区域响应能力和各具特色的自然生长条件。",
      groups: [
        {
          number: "01",
          kicker: "南美洲",
          title: "厄瓜多尔",
          image: images.ecuador,
          imageAlt: "厄瓜多尔香蕉种植园景观",
          body:
            "作为全球具有代表性的香蕉产地，厄瓜多尔拥有全年热带生产条件、成熟的出口经验和完善的品质实践。",
          countries: [{ name: "厄瓜多尔", detail: "为国际精品香蕉项目提供稳定而成熟的核心产地选择。" }],
        },
        {
          number: "02",
          kicker: "东南亚",
          title: "菲律宾",
          image: images.philippines,
          imageAlt: "菲律宾香蕉种植园",
          body:
            "菲律宾拥有长期积累的卡文迪什香蕉种植经验、热带生长环境，以及服务亚洲高标准市场的出口体系。",
          countries: [{ name: "菲律宾", detail: "成熟的种植园管理经验支持稳定的精品供应。" }],
        },
        {
          number: "03",
          kicker: "湄公河区域",
          title: "柬埔寨 · 越南 · 老挝",
          image: images.mekong,
          imageAlt: "湄公河区域香蕉种植园",
          body:
            "东南亚大陆产区兼具地理接近、响应灵活和出口型香蕉产业持续专业化的优势。",
          countries: [
            { name: "柬埔寨", detail: "规模化种植园和出口能力持续提升。" },
            { name: "越南", detail: "依托紧密的区域连接，形成灵活响应的供应选择。" },
            { name: "老挝", detail: "陆路联通优势带来值得重视的区域潜力。" },
          ],
        },
        {
          number: "04",
          kicker: "中国精品产地",
          title: "广西精品香蕉",
          image: images.guangxi,
          imageAlt: "中国广西精品香蕉种植园",
          body:
            "广西为产品组合带来优质中国香蕉，以响应速度、新鲜度和鲜明本土产地价值形成差异化选择。",
          countries: [{ name: "中国广西", detail: "适合快速、灵活商业项目的近市场精品产地。" }],
        },
      ],
    },
    presence: {
      eyebrow: "全球布局",
      title: "精选产地，\n面向更广阔的世界。",
      intro:
        "我们的采购布局天然面向国际。中亚是现阶段正在深入开拓的重点市场，但绝不是未来发展的边界。",
      focusTitle: "当前重点市场",
      focusText:
        "目前我们正在哈萨克斯坦、乌兹别克斯坦、吉尔吉斯斯坦、塔吉克斯坦和土库曼斯坦发展合作伙伴关系。",
      expansion:
        "随着 GOOD GARDEN 持续成长，我们将继续在更多国际市场建立经销、批发和零售合作。",
      markets: ["哈萨克斯坦", "乌兹别克斯坦", "吉尔吉斯斯坦", "塔吉克斯坦", "土库曼斯坦"],
      map: {
        ariaLabel: "展示 GOOD GARDEN 香蕉精选产地与当前中亚重点市场的世界地图",
        originLegend: "精选产地",
        marketLegend: "当前重点市场",
        ecuadorLabel: "厄瓜多尔",
        asiaLabel: "东南亚 + 广西",
        marketLabel: "中亚",
      },
    },
    standard: {
      eyebrow: "GOOD GARDEN 标准",
      title: "设计让品牌被看见，\n专业让品质被信赖。",
      intro:
        "GOOD GARDEN 将专业香蕉项目转化为清晰、自信的市场表达，并以必要的执行标准守护产品品质。",
      imageAlt: "GOOD GARDEN 香蕉品牌包装箱",
      secondaryImageAlt: "GOOD GARDEN 香蕉包装设计",
      principles: [
        { number: "01", title: "严谨选品", text: "根据不同商业项目选择适合的产地与产品规格。" },
        { number: "02", title: "稳定呈现", text: "以规范包装和冷链协同守护产品品质与外观。" },
        { number: "03", title: "市场共建", text: "与进口商、经销商、批发商和零售伙伴灵活合作。" },
      ],
    },
    social: {
      eyebrow: "保持联系",
      title: "关注 GOOD GARDEN",
      text: "我们的官方社交账号正在筹备中，以下入口已为后续正式链接预留。",
      pending: "即将上线",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
    },
    contact: {
      eyebrow: "商务合作",
      title: "一起开拓下一个市场。",
      intro: "欢迎就采购、经销、批发、零售项目或新市场合作与我们联系。",
      formTitle: "发送合作信息",
      name: "您的姓名",
      company: "公司名称",
      email: "工作邮箱",
      interest: "合作方向",
      message: "您的留言",
      select: "请选择",
      options: ["采购香蕉", "供应香蕉", "经销合作", "新市场合作", "其他咨询"],
      send: "提交信息",
      sending: "正在提交…",
      success: "感谢您的联系，我们已收到信息。",
      error: "提交失败，请稍后再试。",
      people: [
        { name: "Jason Gu", phone: "+86 177 0569 6905", email: "gujinhui718@gmail.com" },
        { name: "Abliz Yunus", phone: "+86 139 1607 3054", email: "mayorlee31@gmail.com" },
      ],
      office: "乌兹别克斯坦费尔干纳市 Kirguli MFY Sanoat 街 213-V",
    },
    footer: {
      note: "精品香蕉。精选产地。面向更广阔的世界。",
      explore: "网站导航",
      legal: "© 2026 GOOD GARDEN. 保留所有权利。",
    },
  },
  ru: {
    seo: {
      title: "GOOD GARDEN | Международный бренд премиальных бананов",
      description:
        "GOOD GARDEN — международный бренд премиальных бананов из Эквадора, Филиппин, Камбоджи, Вьетнама, Лаоса и китайского Гуанси.",
    },
    nav: {
      brand: "Бренд",
      banana: "Наш банан",
      origins: "Происхождение",
      presence: "География",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "Премиальные бананы · Избранные регионы",
      title: "Один фрукт.\nБезграничные возможности.",
      intro:
        "GOOD GARDEN создаёт современный международный банановый бренд, основанный на продуманном выборе происхождения, стабильном качестве и долгосрочном партнёрстве.",
      primary: "Обсудить сотрудничество",
      secondary: "О нашем банане",
      note: "Фокус сегодня. Возможности завтра.",
      imageAlt: "Премиальные бананы в одном из избранных регионов GOOD GARDEN",
    },
    manifesto: {
      eyebrow: "Наш фокус",
      title: "Сначала глубина. Затем масштаб.",
      body:
        "Бананы для нас — не одна из множества категорий, а профессиональная основа бренда: от отношений с производителями и отбора продукта до узнаваемого образа, которому доверяет рынок.",
      points: [
        { title: "Осознанная специализация", text: "Одна ключевая категория, изученная глубже." },
        { title: "Международный подход", text: "Продуманный портфель проверенных регионов выращивания." },
        { title: "Долгосрочное партнёрство", text: "Коммерческие программы под реальные потребности рынка." },
      ],
    },
    product: {
      eyebrow: "Наш первый фирменный продукт",
      title: "Банан с безошибочным характером GOOD GARDEN.",
      intro:
        "Сегодня наш ассортимент сосредоточен на премиальных бананах Cavendish с привлекательным видом, стабильностью при обращении и понятной ценностью для рынка.",
      name: "Premium Cavendish",
      description:
        "Знакомый фрукт, ценность которого усиливают строгий отбор, заметная айдентика и единая презентация от коробки до полки.",
      details: [
        { label: "Текущий фокус", value: "Премиальные бананы" },
        { label: "Форматы", value: "Опт и розничная упаковка" },
        { label: "Обещание бренда", value: "Ясность, стабильность, партнёрство" },
      ],
      futureTitle: "Одна категория сегодня. Больший сад завтра.",
      futureText:
        "Бананы — наша основа. Бренд и платформа GOOD GARDEN готовы в будущем принять тщательно отобранные категории свежих фруктов.",
      imageAlt: "Премиальные бананы в фирменной упаковке GOOD GARDEN",
    },
    origins: {
      eyebrow: "Избранные регионы",
      title: "Мы ценим и условия выращивания, и долгосрочную пользу происхождения.",
      intro:
        "Наш портфель сочетает зрелую экспортную экспертизу, региональную гибкость и особые природные условия.",
      groups: [
        {
          number: "01",
          kicker: "Южная Америка",
          title: "Эквадор",
          image: images.ecuador,
          imageAlt: "Банановая плантация в Эквадоре",
          body:
            "Один из главных банановых регионов мира сочетает круглогодичное тропическое производство, глубокий экспортный опыт и развитые стандарты качества.",
          countries: [{ name: "Эквадор", detail: "Надёжная основа международных программ премиальных бананов." }],
        },
        {
          number: "02",
          kicker: "Юго-Восточная Азия",
          title: "Филиппины",
          image: images.philippines,
          imageAlt: "Банановая плантация на Филиппинах",
          body:
            "Филиппины предлагают многолетний опыт выращивания Cavendish, тропические условия и экспортную культуру для требовательных рынков Азии.",
          countries: [{ name: "Филиппины", detail: "Опыт управления плантациями поддерживает стабильные премиальные поставки." }],
        },
        {
          number: "03",
          kicker: "Регион Меконга",
          title: "Камбоджа · Вьетнам · Лаос",
          image: images.mekong,
          imageAlt: "Банановая плантация в регионе Меконга",
          body:
            "Материковая Юго-Восточная Азия добавляет близость, гибкость и всё более профессиональную базу экспортного производства.",
          countries: [
            { name: "Камбоджа", detail: "Расширяющиеся плантации и растущие экспортные возможности." },
            { name: "Вьетнам", detail: "Гибкое региональное предложение благодаря тесным рыночным связям." },
            { name: "Лаос", detail: "Сухопутное сообщение и значительный региональный потенциал." },
          ],
        },
        {
          number: "04",
          kicker: "Китайское происхождение",
          title: "Премиальный Гуанси",
          image: images.guangxi,
          imageAlt: "Премиальная банановая плантация в Гуанси, Китай",
          body:
            "Гуанси дополняет портфель премиальным китайским происхождением, ценным за оперативность, свежесть и сильную локальную историю.",
          countries: [{ name: "Гуанси, Китай", detail: "Близкий к рынку вариант для гибких коммерческих программ." }],
        },
      ],
    },
    presence: {
      eyebrow: "Международная география",
      title: "Избранные регионы происхождения. Открытые горизонты.",
      intro:
        "Наша закупочная география международна по своей природе. Центральная Азия — текущий коммерческий приоритет, но не предел будущего развития.",
      focusTitle: "Текущий рыночный фокус",
      focusText:
        "Мы развиваем партнёрства в Казахстане, Узбекистане, Кыргызстане, Таджикистане и Туркменистане.",
      expansion:
        "По мере роста GOOD GARDEN мы продолжим создавать дистрибьюторские, оптовые и розничные связи на новых международных рынках.",
      markets: ["Казахстан", "Узбекистан", "Кыргызстан", "Таджикистан", "Туркменистан"],
      map: {
        ariaLabel: "Карта регионов происхождения бананов GOOD GARDEN и текущего фокуса в Центральной Азии",
        originLegend: "Избранные регионы",
        marketLegend: "Текущий рынок",
        ecuadorLabel: "Эквадор",
        asiaLabel: "Юго-Восточная Азия + Гуанси",
        marketLabel: "Центральная Азия",
      },
    },
    standard: {
      eyebrow: "Стандарт GOOD GARDEN",
      title: "Узнаваемость в дизайне. Надёжность в работе.",
      intro:
        "Наш бренд превращает специализированную банановую программу в ясное рыночное предложение, подкреплённое практическими стандартами защиты качества.",
      imageAlt: "Фирменная коробка бананов GOOD GARDEN",
      secondaryImageAlt: "Дизайн упаковки бананов GOOD GARDEN",
      principles: [
        { number: "01", title: "Тщательный отбор", text: "Происхождение и спецификация под каждую коммерческую программу." },
        { number: "02", title: "Стабильная презентация", text: "Упаковка и координация холодовой цепи для защиты качества и внешнего вида." },
        { number: "03", title: "Рыночное партнёрство", text: "Гибкая работа с импортёрами, дистрибьюторами, оптовыми и розничными компаниями." },
      ],
    },
    social: {
      eyebrow: "Оставайтесь на связи",
      title: "GOOD GARDEN в социальных сетях",
      text: "Наши официальные каналы готовятся к запуску. Ниже уже предусмотрены места для будущих ссылок.",
      pending: "Скоро",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp",
    },
    contact: {
      eyebrow: "Деловые запросы",
      title: "Давайте вместе развивать следующий рынок.",
      intro:
        "Свяжитесь с нами по вопросам закупки, дистрибуции, оптовых и розничных программ или выхода на новый рынок.",
      formTitle: "Отправить запрос",
      name: "Ваше имя",
      company: "Компания",
      email: "Рабочий email",
      interest: "Направление сотрудничества",
      message: "Ваше сообщение",
      select: "Выберите вариант",
      options: ["Закупка бананов", "Поставка бананов", "Дистрибуция", "Новый рынок", "Общий вопрос"],
      send: "Отправить запрос",
      sending: "Отправка…",
      success: "Спасибо. Ваше сообщение получено.",
      error: "Не удалось отправить сообщение. Попробуйте ещё раз.",
      people: [
        { name: "Jason Gu", phone: "+86 177 0569 6905", email: "gujinhui718@gmail.com" },
        { name: "Abliz Yunus", phone: "+86 139 1607 3054", email: "mayorlee31@gmail.com" },
      ],
      office: "Fergana city, Kirguli MFY Sanoat street, 213-V, Republic of Uzbekistan",
    },
    footer: {
      note: "Премиальные бананы. Избранные регионы. Открытые горизонты.",
      explore: "Навигация",
      legal: "© 2026 GOOD GARDEN. Все права защищены.",
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

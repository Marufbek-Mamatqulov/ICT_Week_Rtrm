import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type Lang = 'uz' | 'en' | 'ru';

interface I18nContextValue {
  lang: Lang;
  t: (key: string) => string;
  switchLang: () => void;
}

const dictionaries: Record<Lang, Record<string, string>> = {
  uz: {
    'brand.name': 'TECH FORUM',
  'org.name': 'RAQAMLI TA’LIMNI RIVOJLANTIRISH MARKAZI',
  'footer.section.students': 'Talabalar uchun',
  'footer.section.entrepreneurs': 'Tadbirkorlar uchun',
  'footer.link.courses': 'Kurslar',
  'footer.link.centers': 'IT Markazlar',
  'footer.link.about': 'Biz haqimizda',
  'footer.link.contact': "Bog'lanish",
  'hero.title': 'AI For IT Education',
    'hero.tagline': 'Raqamli ta\'limdagi eng so\'nggi yangiliklar, innovatsiyalar va texnologiyalar bilan tanishing: Xorijiy va mahalliy ekspertlardan nutqlar, panel muhokamalari, konkurs-tanlovlar!',
    'hero.cta.program': 'Forum Dasturi',
    'hero.cta.projects': 'Raqamli ta\'lim loyihalari',
    'hero.qr.scan': 'Tadbir maʼlumotlari uchun skanerlang',
    'hero.qr.tooltip': 'Nusxalash',
    'hero.qr.desc': 'Rasmiy portal: ro‘yxatdan o‘tish, yangiliklar, xarita va networking vositalari. QR kodni oson almashtiring.',
    'program.title': 'Forum Dasturi',
    'program.subtitle': 'Strategik qarashlar va innovatsion g‘oyalarni birlashtirgan kuratsiyalangan kun tartibi.',
    'projects.title': 'Loyihalar',
    'projects.subtitle': 'Raqamli ekotizim, barqarorlik va aqlli tizimlarni tezlashtiruvchi tashabbuslar.',
    'projects.helper': 'Surat ustiga olib boring – interaktiv animatsiya.',
    'about.title': 'Biz haqimizda',
    'about.p1': 'Biz texnologlar, tadqiqotchilar, sarmoyadorlar va siyosat yetakchilarini birlashtiruvchi hamkorlik maydonimiz.',
    'about.p2': 'Missiyamiz: g‘oyalar real ta’sirga tez aylanadigan ekotizimlarni rivojlantirish – iste’dodlarni qo‘llab-quvvatlash va etik innovatsiyani himoya qilish.',
    'about.p3': 'Forumlar, ochiq laboratoriyalar va vitrinlar orqali AI, kvant, kiberxavfsizlik va infratuzilma bo‘yicha tashabbuslarni kuchaytiramiz.',
    'footer.about': 'Kelajakni yaratish uchun ochiq platforma.',
    'footer.contact': 'Aloqa',
    'footer.quick': 'Havolalar',
    'footer.join': 'Qo‘shiling',
    'footer.register': 'Ro‘yxatdan o‘tish',
  'contact.phone': '+998 71 203 03 43',
  'contact.email': 'education@digital.uz',
  'contact.address': '100164 Toshkent shahri, I.Muminov ko‘chasi, 4',
    'special.title': 'Maxsus Sessiya: AI For IT Education',
    'special.meta.date': 'Sana',
    'special.meta.time': 'Boshlanish',
    'special.meta.location': 'Manzil',
    'special.meta.language': 'Til',
    'special.meta.participants': 'Ishtirokchilar',
    'special.meta.languagesValue': 'O‘zbek / Ingliz',
    'special.meta.participantsValue': '1000 nafargacha',
    'special.note': 'Taʼlimdagi raqamli transformatsiyani tezlashtirishga bag‘ishlangan maxsus blok.',
    // Toggle shows the next language label in cycle: uz -> en -> ru -> uz
    'lang.toggle': 'EN'
  , 'nav.home': 'Bosh sahifa'
  , 'nav.program': 'Dastur'
  // removed: projects/about/contact
  , 'action.register': 'Ro‘yxatdan o‘tish'
  , 'theme.dark': 'Tungi'
  , 'theme.light': 'Yorug‘'
  , 'countdown.days': 'Kun'
  , 'countdown.hours': 'Soat'
  , 'countdown.minutes': 'Daqiqa'
  , 'countdown.seconds': 'Soniya'
  , 'countdown.until': 'Tadbir boshlanishiga'
  },
  en: {
    'brand.name': 'TECH FORUM',
  'org.name': 'Center for Digital Education Development',
  'footer.section.students': 'For Students',
  'footer.section.entrepreneurs': 'For Entrepreneurs',
  'footer.link.courses': 'Courses',
  'footer.link.centers': 'IT Centers',
  'footer.link.about': 'About Us',
  'footer.link.contact': 'Contact Us',
  'hero.title': 'AI For IT Education',
    'hero.tagline': 'Get to know the latest news, innovations, and technologies in digital education: Speeches from foreign and local experts, panel discussions, and contests!',
    'hero.cta.program': 'Forum Program',
    'hero.cta.projects': 'Digital education projects',
    'hero.qr.scan': 'Scan for event info',
    'hero.qr.tooltip': 'Copy link',
    'hero.qr.desc': 'Official portal: registration, live updates, venue map & networking tools. Replace QR placeholder easily.',
    'program.title': 'Forum Program',
    'program.subtitle': 'A curated agenda blending strategic vision, hands-on innovation and collaborative futures.',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Initiatives accelerating digital ecosystems, sustainability & intelligent systems.',
    'projects.helper': 'Hover over a card for interaction.',
    'about.title': 'About Us',
    'about.p1': 'We unite technologists, researchers, investors and policy leaders to accelerate sustainable digital transformation.',
    'about.p2': 'Our mission: cultivate ecosystems where ideas evolve rapidly into real-world impact—empowering talent & ethical innovation.',
    'about.p3': 'Through forums, open labs & showcases we amplify breakthroughs across AI, quantum, cybersecurity & infrastructure.',
    'footer.about': 'An open platform to co-create the future.',
    'footer.contact': 'Contact',
    'footer.quick': 'Links',
    'footer.join': 'Join',
    'footer.register': 'Register',
  'contact.phone': '+998 71 203 03 43',
  'contact.email': 'education@digital.uz',
  'contact.address': '100164 Tashkent city, I.Muminov street, 4',
    'special.title': 'Special Session: AI For IT Education',
    'special.meta.date': 'Date',
    'special.meta.time': 'Start',
    'special.meta.location': 'Location',
    'special.meta.language': 'Language',
    'special.meta.participants': 'Participants',
    'special.meta.languagesValue': 'Uzbek / English',
    'special.meta.participantsValue': 'Up to 1000',
    'special.note': 'A focused block accelerating digital transformation in education.',
    // en -> ru
    'lang.toggle': 'RU'
  , 'nav.home': 'Home'
  , 'nav.program': 'Program'
  // removed: projects/about/contact
  , 'action.register': 'Register'
  , 'theme.dark': 'Dark'
  , 'theme.light': 'Light'
  , 'countdown.days': 'Days'
  , 'countdown.hours': 'Hours'
  , 'countdown.minutes': 'Minutes'
  , 'countdown.seconds': 'Seconds'
  , 'countdown.until': 'Until event start'
  },
  ru: {
    'brand.name': 'TECH FORUM',
    'org.name': 'Центр развития цифрового образования',
    'footer.section.students': 'Для студентов',
    'footer.section.entrepreneurs': 'Для предпринимателей',
    'footer.link.courses': 'Курсы',
    'footer.link.centers': 'IT центры',
    'footer.link.about': 'О нас',
    'footer.link.contact': 'Контакты',
    'hero.title': 'ИИ для IT-образования',
    'hero.tagline': 'Узнайте о новейших трендах и технологиях в цифровом образовании: выступления экспертов, панели и конкурсы!',
    'hero.cta.program': 'Программа форума',
    'hero.cta.projects': 'Проекты цифрового образования',
    'hero.qr.scan': 'Сканируйте для информации о событии',
    'hero.qr.tooltip': 'Копировать ссылку',
    'hero.qr.desc': 'Официальный портал: регистрация, новости, карта площадки и networking.',
    'program.title': 'Программа форума',
    'program.subtitle': 'Кураторская повестка, объединяющая стратегическое видение и практические инновации.',
    'projects.title': 'Проекты',
    'projects.subtitle': 'Инициативы, ускоряющие цифровые экосистемы и интеллектуальные системы.',
    'projects.helper': 'Наведите на карточку — интерактивная анимация.',
    'about.title': 'О нас',
    'about.p1': 'Мы объединяем технологов, исследователей, инвесторов и лидеров политики.',
    'about.p2': 'Миссия: развивать экосистемы, где идеи быстро превращаются в реальный эффект.',
    'about.p3': 'Через форумы, открытые лаборатории и витрины усиливаем прорывы в ИИ и кибербезопасности.',
    'footer.about': 'Открытая платформа для совместного создания будущего.',
    'footer.contact': 'Контакты',
    'footer.quick': 'Ссылки',
    'footer.join': 'Присоединяйтесь',
    'footer.register': 'Регистрация',
    'contact.phone': '+998 71 203 03 43',
    'contact.email': 'education@digital.uz',
    'contact.address': '100164, г. Ташкент, ул. И. Муминова, 4',
    'special.title': 'Спецсессия: ИИ для IT-образования',
    'special.meta.date': 'Дата',
    'special.meta.time': 'Начало',
    'special.meta.location': 'Локация',
    'special.meta.language': 'Язык',
    'special.meta.participants': 'Участники',
    'special.meta.languagesValue': 'Узбекский / Английский / Русский',
    'special.meta.participantsValue': 'До 1000',
    'special.note': 'Фокус-блок о цифровой трансформации образования.',
    // ru -> uz
    'lang.toggle': 'UZ'
  , 'nav.home': 'Главная'
  , 'nav.program': 'Программа'
  // removed: projects/about/contact
  , 'action.register': 'Регистрация'
  , 'theme.dark': 'Тёмная'
  , 'theme.light': 'Светлая'
  , 'countdown.days': 'Дней'
  , 'countdown.hours': 'Часов'
  , 'countdown.minutes': 'Минут'
  , 'countdown.seconds': 'Секунд'
  , 'countdown.until': 'До начала события'
  }
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('uz');
  const t = useCallback((key: string) => dictionaries[lang][key] ?? key, [lang]);
  const switchLang = useCallback(() => setLang(l => (l === 'uz' ? 'en' : l === 'en' ? 'ru' : 'uz')), []);
  return <I18nContext.Provider value={{ lang, t, switchLang }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};

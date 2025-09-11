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
  'hero.title': 'AI in Digital Education: from vision to impact',
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
  'special.meta.participantsValue': '800+ nafar',
  'special.meta.dateValue': '24-sentyabr',
  'special.meta.timeValue': '09:00',
  'special.meta.locationValue': 'CAEx, Main Hall',
    'special.note': 'Taʼlimdagi raqamli transformatsiyani tezlashtirishga bag‘ishlangan maxsus blok.',
    // Toggle shows the next language label in cycle: uz -> en -> ru -> uz
    'lang.toggle': 'EN'
  , 'nav.home': 'Bosh sahifa'
  , 'nav.program': 'Dastur'
  , 'nav.speakers': 'Spikerlar'
  , 'speakers.title': 'Spikerlar'
  // removed: projects/about/contact
  , 'action.register': 'Ro‘yxatdan o‘tish'
  , 'theme.dark': 'Tungi'
  , 'theme.light': 'Yorug‘'
  , 'countdown.days': 'Kun'
  , 'countdown.hours': 'Soat'
  , 'countdown.minutes': 'Daqiqa'
  , 'countdown.seconds': 'Soniya'
  , 'countdown.until': 'Tadbir boshlanishiga'
  , 'program.disclaimer': '“AI in Digital Education: From Vision to Impact (G‘oyadan Natijagacha)” forumi DASTURI'
  , 'program.more': 'Ko‘proq'
  , 'program.less': 'Kamroq'
  , 'program.s1.title': 'Ochilish nutqi'
  , 'program.s1.speaker': 'Ma’ruzachi'
  , 'program.s1.details': 'Ochilish nutqining batafsil maʼlumotlari tez orada eʼlon qilinadi.'
  , 'program.s2.title': 'Sunʼiy intellekt trendlari 2025'
  , 'program.s2.speaker': 'Ekspert'
  , 'program.s2.details': 'AI bozoridagi asosiy yo‘nalishlar va taʼlimga taʼsiri.'
  , 'program.s3.title': 'Maʼlumotlar xavfsizligi'
  , 'program.s3.speaker': 'Mutaxassis'
  , 'program.s3.details': 'Raqamli infratuzilmalarda maʼlumotlarni himoyalash amaliy usullari.'
  , 'program.s4.title': 'EdTech injiniring'
  , 'program.s4.speaker': 'Loyiha rahbari'
  , 'program.s4.details': 'Interaktiv taʼlim platformalarini yaratish tajribasi.'
  , 'program.s5.title': 'Panel: AI va taʼlim integratsiyasi'
  , 'program.s5.speaker': 'Panel ishtirokchilari'
  , 'program.s5.details': 'AI yordamida o‘qitish sifatini oshirish bo‘yicha fikrlar.'
  , 'program.s6.title': 'Tushlik va networking'
  , 'program.s7.title': 'Laboratoriya: NLP amaliyoti'
  , 'program.s7.speaker': 'Instruktor'
  , 'program.s7.details': 'Tabiiy tilni qayta ishlash modellari bilan ishlash bo‘yicha qisqa sessiya.'
  , 'program.s8.title': 'Startaplar pitch sessiyasi'
  , 'program.s8.speaker': 'Startap jamoalari'
  , 'program.s8.details': 'Taʼlim va AI startaplarining qisqa taqdimotlari.'
  , 'program.s9.title': 'Kelajak infratuzilmasi'
  , 'program.s9.speaker': 'Tahlilchi'
  , 'program.s9.details': 'Bulut, edge va gibrid yondashuvlar istiqbollari.'
  , 'program.s10.title': 'Yakuniy so‘z'
  , 'program.s10.speaker': 'Tashkilotchilar'
  , 'program.s01.title': 'Ro‘yxatdan o‘tish va tayyorgarlik jarayoni'
  , 'program.s02.title': 'Ochilish intro va video rolik'
  , 'program.s03.title': 'Kirish so‘zi va motivatsion nutq'
  , 'program.s04.title': 'AI – davlat taʼlimida yangi bosqich (OTV)'
  , 'program.s05.title': 'AI – davlat taʼlimida yangi bosqich (MMTV)'
  , 'program.s06.title': 'UNICEF vakili chiqishi'
  , 'program.s07.title': 'Raqamli ta’limdagi keyingi 5 yillik rejalar'
  , 'program.s08.title': 'AI – bozor va taʼlim o‘rtasida ko‘prik'
  , 'program.s09.title': 'LMS taqdimoti (MohirDev)'
  , 'program.x10.title': 'Sun’iy intellekt mutaxassislarini tayyorlash'
  , 'program.s11.title': 'UZUM ta’lim e’loni'
  , 'program.s12.title': 'AI davrida ta’lim va ko‘nikmalar kelajagi'
  , 'program.s13.title': 'Huawei ta’lim tashabbusi'
  , 'program.s14.title': 'AI ta’lim infratuzilmasi: raqamli asoslar'
  , 'program.s15.title': 'Olimpiada sovrindorlarini va hamkorlarni taqdirlash'
  , 'program.s16.title': 'Quick Quiz – tezkor savollar'
  , 'program.s17.title': 'AI yordamida to‘g‘ri prompt yozish'
  , 'program.s18.title': 'Chat-bot yasash mashg‘uloti'
  , 'program.s19.title': 'AI orqali kreativ kontent'
  , 'program.s20.title': 'Forum tanlov g‘oliblarini taqdirlash'
  , 'program.ceremony.title': 'Rasmiy ochilish marosimi'
  , 'program.s02.speaker': 'R. Karimjonov'
  , 'program.s04.speaker': 'OTV vakili'
  , 'program.s05.speaker': 'MMTV vakili'
  , 'program.s06.speaker': 'UNICEF vakili'
  , 'program.s07.speaker': 'A. Eshankulov'
  , 'program.reg.title': 'Ro‘yxatdan o‘tish'
  , 'program.reg.details': 'Ishtirokchilarni kutib olish va ro‘yxatdan o‘tkazish.'
  , 'program.opening.title': 'Kirish so‘zi'
  , 'program.opening.details': 'Forum mavzusi, maqsadi va ahamiyati. Moderator: ________'
  , 'program.oneprofession.title': '“1 yil – 1 kasb”'
  , 'program.oneprofession.speaker': 'Xurshidbek Kurbanov (InFocus)'
  , 'program.oneprofession.details': 'Sun’iy intellekt asosida dasturchi bo‘lishning eng qisqa yo‘li.'
  , 'program.futurelanguage.title': '“AI – Kelajak tili”'
  , 'program.futurelanguage.speaker': 'Oybek Artikov'
  , 'program.futurelanguage.details': 'Yoshlar uchun yangi bilim paradigmalar.'
  , 'program.globalpath.title': '“Hududlardan global sahnaga yo‘l”'
  , 'program.globalpath.speaker': 'Asadbek Kurbonboev'
  , 'program.globalpath.details': 'Xorazm yoshlari va sun’iy intellekt imkoniyatlari.'
  , 'program.futurelearning.title': '“AI davrida o‘rganish va ko‘nikmalar kelajagi”'
  , 'program.futurelearning.speaker': 'Nikoloz Foucaud (Coursera)'
  , 'program.futurelearning.details': '180M foydalanuvchi ma’lumotlari asosida global tendensiyalar.'
  , 'program.presentation.title': 'Taqdimot'
  , 'program.presentation.speaker': 'Yandex Praktikum'
  , 'program.presentation.details': ''
  , 'program.aiEducation.title': '“AI bilan edukatsiya”'
  , 'program.aiEducation.speaker': 'Wagar Younas (Alison)'
  , 'program.aiEducation.details': 'Raqamli avlod uchun yangi ilhom va vositalar.'
  , 'program.awards.title': 'Taqdirlash marosimi'
  , 'program.awards.details': 'Trenerlar, faol ishtirokchilar, OAV, influencerlar va olimpiada sovrindorlarini taqdirlash.'
  , 'program.closing.title': 'Yakuniy qism'
  , 'program.closing.details': 'Moderator – yakuniy xulosalar va tavsiyalar.'
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
  'hero.title': 'AI in Digital Education: from vision to impact',
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
  'special.meta.participantsValue': '800+ participants',
  'special.meta.dateValue': '24-September',
  'special.meta.timeValue': '09:00',
  'special.meta.locationValue': 'CAEx, Main Hall',
    'special.note': 'A focused block accelerating digital transformation in education.',
    // en -> ru
    'lang.toggle': 'RU'
  , 'nav.home': 'Home'
  , 'nav.program': 'Program'
  , 'nav.speakers': 'Speakers'
  , 'speakers.title': 'Speakers'
  // removed: projects/about/contact
  , 'action.register': 'Register'
  , 'theme.dark': 'Dark'
  , 'theme.light': 'Light'
  , 'countdown.days': 'Days'
  , 'countdown.hours': 'Hours'
  , 'countdown.minutes': 'Minutes'
  , 'countdown.seconds': 'Seconds'
  , 'countdown.until': 'Until event start'
  , 'program.disclaimer': 'Schedule is indicative and may change.'
  , 'program.more': 'More'
  , 'program.less': 'Less'
  , 'program.s1.title': 'Opening Keynote'
  , 'program.s1.speaker': 'Speaker'
  , 'program.s1.details': 'Detailed opening keynote information will be published soon.'
  , 'program.s2.title': 'AI Trends 2025'
  , 'program.s2.speaker': 'Expert'
  , 'program.s2.details': 'Key directions in the AI market and impact on education.'
  , 'program.s3.title': 'Data Security'
  , 'program.s3.speaker': 'Specialist'
  , 'program.s3.details': 'Practical approaches to protecting data in digital infrastructure.'
  , 'program.s4.title': 'EdTech Engineering'
  , 'program.s4.speaker': 'Project Lead'
  , 'program.s4.details': 'Building interactive learning platforms.'
  , 'program.s5.title': 'Panel: AI & Education Integration'
  , 'program.s5.speaker': 'Panelists'
  , 'program.s5.details': 'Perspectives on improving teaching quality with AI.'
  , 'program.s6.title': 'Lunch & Networking'
  , 'program.s7.title': 'Lab: NLP Practice'
  , 'program.s7.speaker': 'Instructor'
  , 'program.s7.details': 'Hands-on with natural language processing models.'
  , 'program.s8.title': 'Startup Pitch Session'
  , 'program.s8.speaker': 'Startup Teams'
  , 'program.s8.details': 'Short presentations from education & AI startups.'
  , 'program.s9.title': 'Future Infrastructure'
  , 'program.s9.speaker': 'Analyst'
  , 'program.s9.details': 'Outlook on cloud, edge and hybrid strategies.'
  , 'program.s10.title': 'Closing Remarks'
  , 'program.s10.speaker': 'Organizers'
  , 'program.s01.title': 'Registration & preparation interval'
  , 'program.s02.title': 'Opening intro & video showcase'
  , 'program.s03.title': 'Opening remarks & motivational speech'
  , 'program.s04.title': 'AI – new stage in public education (OTV)'
  , 'program.s05.title': 'AI – new stage in public education (MMTV)'
  , 'program.s06.title': 'UNICEF representative address'
  , 'program.s07.title': 'Next 5-year plans in digital education'
  , 'program.s08.title': 'AI – bridge between market and education'
  , 'program.s09.title': 'LMS presentation (MohirDev)'
  , 'program.x10.title': 'Preparing AI talent: education & industry'
  , 'program.s11.title': 'UZUM education announcement'
  , 'program.s12.title': 'Future of learning & skills in the AI era'
  , 'program.s13.title': 'Huawei education initiative'
  , 'program.s14.title': 'Digital rails for AI in learning'
  , 'program.s15.title': 'Awards: Olympiad winners & partners'
  , 'program.s16.title': 'Quick Quiz – fast questions'
  , 'program.s17.title': 'Writing effective prompts with AI'
  , 'program.s18.title': 'Chatbot building workshop'
  , 'program.s19.title': 'Creative content with AI'
  , 'program.s20.title': 'Awards for forum competition winners'
  , 'program.ceremony.title': 'Official Opening Ceremony'
  , 'program.s02.speaker': 'R. Karimjonov'
  , 'program.s04.speaker': 'Representative (OTV)'
  , 'program.s05.speaker': 'Representative (MMTV)'
  , 'program.s06.speaker': 'UNICEF Representative'
  , 'program.s07.speaker': 'A. Eshankulov'
  , 'program.reg.title': 'Registration'
  , 'program.reg.details': 'Participant reception and registration.'
  , 'program.opening.title': 'Opening Remarks'
  , 'program.opening.details': 'Forum theme, purpose and significance. Moderator: ________'
  , 'program.oneprofession.title': '“1 Year – 1 Profession”'
  , 'program.oneprofession.speaker': 'Xurshidbek Kurbanov (InFocus)'
  , 'program.oneprofession.details': 'Fastest path to becoming a developer using AI.'
  , 'program.futurelanguage.title': '“AI – The Language of the Future”'
  , 'program.futurelanguage.speaker': 'Oybek Artikov'
  , 'program.futurelanguage.details': 'A new paradigm of knowledge for youth.'
  , 'program.globalpath.title': '“From Regions to the Global Stage”'
  , 'program.globalpath.speaker': 'Asadbek Kurbonboev'
  , 'program.globalpath.details': 'Opportunities of AI for youth in Khorezm.'
  , 'program.futurelearning.title': '“Future of Learning & Skills in the AI Era”'
  , 'program.futurelearning.speaker': 'Nikoloz Foucaud (Coursera)'
  , 'program.futurelearning.details': 'Global trends based on data from 180M learners.'
  , 'program.presentation.title': 'Presentation'
  , 'program.presentation.speaker': 'Yandex Practicum'
  , 'program.presentation.details': ''
  , 'program.aiEducation.title': '“AI in Education”'
  , 'program.aiEducation.speaker': 'Wagar Younas (Alison)'
  , 'program.aiEducation.details': 'New inspiration & tools for the digital generation.'
  , 'program.awards.title': 'Awards Ceremony'
  , 'program.awards.details': 'Trainers, active participants, media, influencers and olympiad winners.'
  , 'program.closing.title': 'Closing'
  , 'program.closing.details': 'Moderator – summary and recommendations.'
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
    'hero.title': 'ИИ в цифровом образовании: от видения к воздействию',
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
  'special.meta.languagesValue': 'Узбекский / Английский',
  'special.meta.participantsValue': '800+ участников',
  'special.meta.dateValue': '24-сентября',
  'special.meta.timeValue': '09:00',
  'special.meta.locationValue': 'CAEx, Main Hall',
    'special.note': 'Фокус-блок о цифровой трансформации образования.',
    // ru -> uz
    'lang.toggle': 'UZ'
  , 'nav.home': 'Главная'
  , 'nav.program': 'Программа'
  , 'nav.speakers': 'Спикеры'
  , 'speakers.title': 'Спикеры'
  // removed: projects/about/contact
  , 'action.register': 'Регистрация'
  , 'theme.dark': 'Тёмная'
  , 'theme.light': 'Светлая'
  , 'countdown.days': 'Дней'
  , 'countdown.hours': 'Часов'
  , 'countdown.minutes': 'Минут'
  , 'countdown.seconds': 'Секунд'
  , 'countdown.until': 'До начала события'
  , 'program.disclaimer': 'Расписание предварительное и может измениться.'
  , 'program.more': 'Подробнее'
  , 'program.less': 'Свернуть'
  , 'program.s1.title': 'Открытие форума'
  , 'program.s1.speaker': 'Докладчик'
  , 'program.s1.details': 'Подробная информация об открытии будет опубликована позже.'
  , 'program.s2.title': 'Тренды ИИ 2025'
  , 'program.s2.speaker': 'Эксперт'
  , 'program.s2.details': 'Ключевые направления рынка ИИ и влияние на образование.'
  , 'program.s3.title': 'Безопасность данных'
  , 'program.s3.speaker': 'Специалист'
  , 'program.s3.details': 'Практические подходы к защите данных в цифровой инфраструктуре.'
  , 'program.s4.title': 'EdTech инжиниринг'
  , 'program.s4.speaker': 'Руководитель проекта'
  , 'program.s4.details': 'Создание интерактивных образовательных платформ.'
  , 'program.s5.title': 'Панель: интеграция ИИ и образования'
  , 'program.s5.speaker': 'Участники панели'
  , 'program.s5.details': 'Как повысить качество обучения с помощью ИИ.'
  , 'program.s6.title': 'Ланч и нетворкинг'
  , 'program.s7.title': 'Лаб: практика NLP'
  , 'program.s7.speaker': 'Инструктор'
  , 'program.s7.details': 'Практика с моделями обработки естественного языка.'
  , 'program.s8.title': 'Питч-сессия стартапов'
  , 'program.s8.speaker': 'Команды стартапов'
  , 'program.s8.details': 'Короткие презентации EdTech и AI стартапов.'
  , 'program.s9.title': 'Инфраструктура будущего'
  , 'program.s9.speaker': 'Аналитик'
  , 'program.s9.details': 'Облако, edge и гибридные стратегии.'
  , 'program.s10.title': 'Закрытие'
  , 'program.s10.speaker': 'Организаторы'
  , 'program.s01.title': 'Регистрация и подготовительный период'
  , 'program.s02.title': 'Открытие: интро и видео'
  , 'program.s03.title': 'Приветственное слово и мотивационный спич'
  , 'program.s04.title': 'ИИ – новый этап в гособразовании (OTV)'
  , 'program.s05.title': 'ИИ – новый этап в гособразовании (MMTV)'
  , 'program.s06.title': 'Выступление представителя UNICEF'
  , 'program.s07.title': 'Следующие 5 лет в цифровом образовании'
  , 'program.s08.title': 'ИИ – мост между рынком и образованием'
  , 'program.s09.title': 'Презентация LMS (MohirDev)'
  , 'program.x10.title': 'Подготовка специалистов по ИИ'
  , 'program.s11.title': 'Анонс образования UZUM'
  , 'program.s12.title': 'Будущее обучения и навыков в эпоху ИИ'
  , 'program.s13.title': 'Образовательная инициатива Huawei'
  , 'program.s14.title': 'Цифровая инфраструктура для ИИ в обучении'
  , 'program.s15.title': 'Награждение: призёры олимпиад и партнёры'
  , 'program.s16.title': 'Quick Quiz – быстрые вопросы'
  , 'program.s17.title': 'Правильные промпты с помощью ИИ'
  , 'program.s18.title': 'Практикум по созданию чат-бота'
  , 'program.s19.title': 'Креативный контент с ИИ'
  , 'program.s20.title': 'Награждение победителей конкурса форума'
  , 'program.ceremony.title': 'Официальная церемония открытия'
  , 'program.s02.speaker': 'Р. Каримжонов'
  , 'program.s04.speaker': 'Представитель OTV'
  , 'program.s05.speaker': 'Представитель MMTV'
  , 'program.s06.speaker': 'Представитель UNICEF'
  , 'program.s07.speaker': 'А. Эшанкулов'
  , 'program.reg.title': 'Регистрация'
  , 'program.reg.details': 'Встреча и регистрация участников.'
  , 'program.opening.title': 'Приветственное слово'
  , 'program.opening.details': 'Тема форума, цель и значимость. Модератор: ________'
  , 'program.oneprofession.title': '«1 год – 1 профессия»'
  , 'program.oneprofession.speaker': 'Хуршидбек Курбанов (InFocus)'
  , 'program.oneprofession.details': 'Кратчайший путь стать разработчиком с помощью ИИ.'
  , 'program.futurelanguage.title': '«ИИ – язык будущего»'
  , 'program.futurelanguage.speaker': 'Ойбек Артиков'
  , 'program.futurelanguage.details': 'Новая парадигма знаний для молодёжи.'
  , 'program.globalpath.title': '«Из регионов – на глобальную сцену»'
  , 'program.globalpath.speaker': 'Асадбек Курбонбоев'
  , 'program.globalpath.details': 'Возможности ИИ для молодёжи Хорезма.'
  , 'program.futurelearning.title': '«Будущее обучения и навыков в эпоху ИИ»'
  , 'program.futurelearning.speaker': 'Николоз Фуко (Coursera)'
  , 'program.futurelearning.details': 'Глобальные тренды на основе данных 180M обучающихся.'
  , 'program.presentation.title': 'Презентация'
  , 'program.presentation.speaker': 'Yandex Practicum'
  , 'program.presentation.details': ''
  , 'program.aiEducation.title': '«ИИ в образовании»'
  , 'program.aiEducation.speaker': 'Wagar Younas (Alison)'
  , 'program.aiEducation.details': 'Новые источники вдохновения и инструменты.'
  , 'program.awards.title': 'Церемония награждения'
  , 'program.awards.details': 'Тренеры, активные участники, СМИ, инфлюенсеры и призёры олимпиад.'
  , 'program.closing.title': 'Заключительная часть'
  , 'program.closing.details': 'Модератор – выводы и рекомендации.'
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

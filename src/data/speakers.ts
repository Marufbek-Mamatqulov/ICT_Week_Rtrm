export type LocaleText = { uz: string; en: string; ru: string };
export type Speaker = {
  id: string;
  name: LocaleText;
  role: LocaleText;
  photo?: string; // optional image path under /public
};

export const speakers: Speaker[] = [
  {
    id: 's1',
    name: { uz: 'Otabek Maxkamov', en: 'Otabek Maxkamov', ru: 'Отабек Махкамов' },
    role: {
      uz: 'Oliy taʼlim, fan va innovatsiyalar vaziri o‘rinbosari',
      en: 'Deputy Minister of Higher Education, Science and Innovation of Uzbekistan',
      ru: 'Заместитель министра высшего образования, науки и инноваций Узбекистана'
    },
    photo: '/Spikerlar/Otabek Maxkamov.png'
  },
  {
    id: 's2',
    name: { uz: 'Sardor Radjabov', en: 'Sardor Radjabov', ru: 'Сардор Раджабов' },
    role: {
      uz: "O‘zbekiston Respublikasi Maktabgacha va maktab taʼlimi vaziri o‘rinbosari",
      en: 'Deputy Minister for Preschool and School Education of Uzbekistan',
      ru: 'Заместитель министра дошкольного и школьного образования Узбекистана'
    },
    photo: '/Spikerlar/Radjabov Sardor Baxtiyorovich.png'
  },
  {
    id: 's3',
    name: { uz: 'Regina Maria Castillo', en: 'Regina Maria Castillo', ru: 'Регина Мария Кастильо' },
    role: {
      uz: 'UNICEF Oʻzbekistondagi vakili',
      en: 'UNICEF Representative in Uzbekistan',
      ru: 'Представитель ЮНИСЕФ в Узбекистане'
    },
    photo: '/Spikerlar/Ms. Regina Maria Castillo.png'
  },
  {
    id: 's4',
    name: { uz: 'Nikolaz Foucaud', en: 'Nikolaz Foucaud', ru: 'Николаз Фука' },
    role: {
      uz: 'Coursera EMEA & APAC boshqaruvchi direktori',
      en: 'Managing Director Coursera EMEA & APAC',
      ru: 'Управляющий директор Coursera EMEA & APAC'
    },
    photo: '/Spikerlar/Nikolaz Foucaud.png'
  },
  {
    id: 's5',
    name: { uz: 'Narek Aslikyan', en: 'Narek Aslikyan', ru: 'Нарек Асликян' },
    role: {
      uz: 'Armaniston Code Academy hamkuri',
      en: 'Co‑founder at Armenian Code Academy',
      ru: 'Соучредитель Armenian Code Academy'
    },
    photo: '/Spikerlar/Narek Aslikyan .png'
  },
  {
    id: 's6',
    name: { uz: 'Naora Zurutuza', en: 'Naora Zurutuza', ru: 'Наора Зурутуза' },
    role: {
      uz: 'Giga UNICEF bosh texnologiya direktori',
      en: 'Chief Technology Officer of Giga UNICEF',
      ru: 'Технический директор Giga UNICEF'
    },
    photo: '/Spikerlar/Naora Zurutuza.png'
  },
  {
    id: 's7',
    name: { uz: 'Boris Bobrovnikov', en: 'Boris Bobrovnikov', ru: 'Борис Бобровников' },
    role: {
      uz: '33 yillik tajribaga ega jahon IT eksperti',
      en: 'Worldwide IT expert, 33 years experience',
      ru: 'Мировой IT эксперт, 33 года опыта'
    },
    photo: '/Spikerlar/Boris Bobrovnikov.png'
  },
  {
    id: 's8',
    name: { uz: 'Xurshidbek Kurbanov', en: 'Khurshidbek Kurbanov', ru: 'Хуршидбек Курбанов' },
    role: {
      uz: 'Paybek kompaniyasi Engineering Lead',
      en: 'Engineering Lead at Paybek',
      ru: 'Engineering Lead в Paybek'
    },
    photo: '/Spikerlar/Xurshidbek Kurbanov.png'
  },
  {
    id: 's9',
    name: { uz: 'Maxmudjon Sodiqov', en: 'Makhmudjon Sodikov', ru: 'Махмуджон Содиков' },
    role: {
      uz: 'Professor, Central Asian University; Team Manager & Senior ML Engineer (Vention)',
      en: 'Professor, Central Asian University; Team Manager & Senior ML Engineer (Vention)',
      ru: 'Профессор, Central Asian University; Руководитель команды и Senior ML Engineer (Vention)'
    },
    photo: '/Spikerlar/Makhmudjon Sodikov.png'
  },
  {
    id: 's10',
    name: { uz: 'Saud Abdulwaheed', en: 'Saud Abdulwaheed', ru: 'Сауд Абдулвахид' },
    role: {
      uz: 'HSec asoschisi',
      en: 'Founder of HSec',
      ru: 'Основатель HSec'
    },
    photo: '/Spikerlar/Saud Abdulwaheed .png'
  },
  {
    id: 's11',
    name: { uz: 'Oybek Artikov', en: 'Oybek Artikov', ru: 'Ойбек Артиков' },
    role: {
      uz: "Muhammad al-Xorazmiy avlodlari dasturi mentori",
      en: 'Mentor of "The Successors of Muhammad Al-Khwarizmi"',
      ru: 'Наставник программы "Преемники Мухаммада аль-Хорезми"'
    },
    photo: '/Spikerlar/Oybek Artikov .png'
  },
  {
    id: 's12',
    name: { uz: 'Azizbek Xabibullaev', en: 'Azizbek Khabibullaev', ru: 'Азизбек Хабибуллаев' },
    role: {
      uz: 'Front-end dasturchi',
      en: 'Front End Developer',
      ru: 'Front End разработчик'
    },
    photo: '/Spikerlar/Azizbek Khabibullaev.png'
  },
  {
    id: 's13',
    name: { uz: 'Mariya Skorik', en: 'Maria Skorik', ru: 'Мария Скорик' },
    role: {
      uz: 'Uzum Academy',
      en: 'Uzum Academy',
      ru: 'Uzum Academy'
    },
    photo: '/Spikerlar/Maria Skorik.png'
  },
  {
    id: 's14',
    name: { uz: 'Aleksandra Nabieva', en: 'Alexandra Nabieva', ru: 'Александра Набиева' },
    role: {
      uz: 'Huawei "Seeds for the Future"',
      en: 'Huawei "Seeds for the Future"',
      ru: 'Huawei «Seeds for the Future»'
    },
    photo: '/Spikerlar/Alexandra Nabieva.png'
  }
];

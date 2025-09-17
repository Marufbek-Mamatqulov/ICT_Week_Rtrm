export type LocaleText = { uz: string; en: string; ru: string };

export type Speaker = {
  id: string;
  name: LocaleText;
  role: LocaleText;
  photo?: string;
};

export const speakers: Speaker[] = [
  {
    id: 's0',
    name: { uz: 'Rustam Karimjonov', en: 'Rustam Karimjonov', ru: 'Rustam Karimjonov' },
    role: {
      uz: 'Ozbekiston Respublikasi Raqamli texnologiyalar vaziri orinbosari',
      en: 'Deputy Minister at the Ministry for the Development of ICT of the Republic of Uzbekistan',
      ru: 'Заместитель министра по развитию ИКТ Республики Узбекистан'
    },
    photo: '/Spikerlar/Rustam Karimjonov.jpg'
  },
  {
    id: 's1',
    name: { uz: 'Azamat Eshankulov', en: 'Azamat Eshankulov', ru: 'Azamat Eshankulov' },
    role: {
      uz: "Raqamli texnologiyalar vazirligi huzuridagi Raqamli ta'limni rivojlantirish markazi direktori",
      en: 'Director of the Digital Education Development Center under the Ministry of Digital Technologies',
      ru: 'Директор Центра развития цифрового образования при Министерстве цифровых технологий'
    },
    photo: '/Spikerlar/Azamat_Eshankulov.png'
  },
  {
    id: 's2',
    name: { uz: 'Regina Maria Castillo', en: 'Regina Maria Castillo', ru: 'Regina Maria Castillo' },
    role: {
      uz: 'UNICEF Ozbekistondagi vakili',
      en: 'UNICEF Representative in Uzbekistan',
      ru: 'Представитель ЮНИСЕФ в Узбекистане'
    },
    photo: '/Spikerlar/Regina Maria Castillo.jpg'
  },
  {
    id: 's3',
    name: { uz: 'Nikolaz Foucaud', en: 'Nikolaz Foucaud', ru: 'Nikolaz Foucaud' },
    role: {
      uz: 'Coursera EMEA & APAC boshqaruvchi direktori',
      en: 'Managing Director Coursera EMEA & APAC',
      ru: 'Управляющий директор Coursera в регионах EMEA и APAC'
    },
    photo: '/Spikerlar/Nikolaz Foucaud.jpeg'
  },
  {
    id: 's4',
    name: { uz: 'Narek Aslikyan', en: 'Narek Aslikyan', ru: 'Narek Aslikyan' },
    role: {
      uz: 'Armaniston Code Academy hamkuri',
      en: 'Co-founder at Armenian Code Academy',
      ru: 'Сооснователь Armenian Code Academy'
    },
    photo: '/Spikerlar/Narek_Aslikyan.png'
  },
  {
    id: 's5',
    name: { uz: 'Naora Zurutuza', en: 'Naora Zurutuza', ru: 'Naora Zurutuza' },
    role: {
      uz: 'Giga UNICEF bosh texnologiya direktori',
      en: 'Chief Technology Officer at Giga UNICEF',
      ru: 'Технический директор проекта GIGA (ЮНИСЕФ)'
    },
    photo: '/Spikerlar/Naroa_Zurutura.jpeg'
  },
  {
    id: 's6',
    name: { uz: 'Alexandra Nabieva', en: 'Alexandra Nabieva', ru: 'Alexandra Nabieva' },
    role: {
      uz: 'Huawei Seeds for the Future',
      en: 'Huawei Seeds for the Future',
      ru: 'Представитель инициативы Huawei "Seeds for the Future"'
    },
    photo: '/Spikerlar/Alexandra Nabieva.jpg'
  },
  {
    id: 's7',
    name: { uz: 'Vera Bell', en: 'Vera Bell', ru: 'Vera Bell' },
    role: {
      uz: 'CFO.UZ',
      en: 'CFO.UZ',
      ru: 'Генеральный директор CFO.UZ'
    },
    photo: '/Spikerlar/Vera_Bell.jpg'
  },
  {
    id: 's8',
    name: { uz: 'Vera Dianova', en: 'Vera Dianova', ru: 'Vera Dianova' },
    role: {
      uz: 'UZUM kompaniyasi',
      en: 'UZUM Company',
      ru: 'Представитель компании UZUM'
    },
    photo: '/Spikerlar/Vera Dianova (1).jpg'
  },
  {
    id: 's9',
    name: { uz: 'Boris Bobrovnikov', en: 'Boris Bobrovnikov', ru: 'Boris Bobrovnikov' },
    role: {
      uz: '33 yillik tajribaga ega jahon IT eksperti',
      en: 'Worldwide IT expert, 33 years experience',
      ru: 'Мировой IT-эксперт, 33 года опыта'
    },
    photo: '/Spikerlar/Boris Bobrovnikov.jpg'
  },
  {
    id: 's10',
    name: { uz: 'Xurshidbek Kurbanov', en: 'Khurshidbek Kurbanov', ru: 'Khurshidbek Kurbanov' },
    role: {
      uz: 'Paybek kompaniyasi Engineering Lead',
      en: 'Engineering Lead at Paybek',
      ru: 'Руководитель инженерной команды в Paybek'
    },
    photo: '/Spikerlar/Xurshidbek_Kurbanov.jpg'
  },
  {
    id: 's11',
    name: { uz: 'Saud Abdulwaheed', en: 'Saud Abdulwaheed', ru: 'Saud Abdulwaheed' },
    role: {
      uz: 'HSec asoschisi',
      en: 'Founder of HSec',
      ru: 'Основатель HSec'
    },
    photo: '/Spikerlar/Saud_Abdulwaheed.jpg'
  },
  {
    id: 's12',
    name: { uz: 'Oybek Artikov', en: 'Oybek Artikov', ru: 'Oybek Artikov' },
    role: {
      uz: 'Muhammad al-Xorazmiy avlodlari dasturi mentori',
      en: 'Mentor of The Successors of Muhammad Al-Khwarizmi',
      ru: 'Наставник программы "Преемники Мухаммада аль-Хорезми"'
    },
    photo: '/Spikerlar/Oybek Artikov.JPG'
  }
];

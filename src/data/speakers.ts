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
      ru: 'Zamestitel ministra po razvitiyu IKT Respubliki Uzbekistan'
    },
    photo: '/Spikerlar/image.png'
  },
  {
    id: 's1',
    name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Imya Familiya' },
    role: {
      uz: 'Oliy talim, fan va innovatsiyalar vaziri orinbosari',
      en: 'Deputy Minister of Higher Education, Science and Innovation of Uzbekistan',
      ru: 'Zamestitel ministra vysshego obrazovaniya, nauki i innovatsiy Uzbekistana'
    }
  },
  {
    id: 's2',
    name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Imya Familiya' },
    role: {
      uz: 'Ozbekiston Respublikasi Maktabgacha va maktab talimi vaziri orinbosari',
      en: 'Deputy Minister for Preschool and School Education of Uzbekistan',
      ru: 'Zamestitel ministra doshkolnogo i shkolnogo obrazovaniya Uzbekistana'
    }
  },
  {
    id: 's3',
    name: { uz: 'Regina Maria Castillo', en: 'Regina Maria Castillo', ru: 'Regina Maria Castillo' },
    role: {
      uz: 'UNICEF Ozbekistondagi vakili',
      en: 'UNICEF Representative in Uzbekistan',
      ru: 'Predstavitel YUNISEF v Uzbekistane'
    },
    photo: '/Spikerlar/Ms. Regina Maria Castillo.png'
  },
  {
    id: 's4',
    name: { uz: 'Nikolaz Foucaud', en: 'Nikolaz Foucaud', ru: 'Nikolaz Foucaud' },
    role: {
      uz: 'Coursera EMEA & APAC boshqaruvchi direktori',
      en: 'Managing Director Coursera EMEA & APAC',
      ru: 'Upravlyayushchiy direktor Coursera EMEA & APAC'
    },
    photo: '/Spikerlar/Nikolaz Foucaud.png'
  },
  {
    id: 's5',
    name: { uz: 'Narek Aslikyan', en: 'Narek Aslikyan', ru: 'Narek Aslikyan' },
    role: {
      uz: 'Armaniston Code Academy hamkuri',
      en: 'Co-founder at Armenian Code Academy',
      ru: 'Souchreditel Armenian Code Academy'
    },
    photo: '/Spikerlar/Narek Aslikyan .png'
  },
  {
    id: 's6',
    name: { uz: 'Naora Zurutuza', en: 'Naora Zurutuza', ru: 'Naora Zurutuza' },
    role: {
      uz: 'Giga UNICEF bosh texnologiya direktori',
      en: 'Chief Technology Officer of Giga UNICEF',
      ru: 'Tekhnicheskiy direktor Giga UNICEF'
    },
    photo: '/Spikerlar/Naora Zurutuza.png'
  },
  {
    id: 's7',
    name: { uz: 'Boris Bobrovnikov', en: 'Boris Bobrovnikov', ru: 'Boris Bobrovnikov' },
    role: {
      uz: '33 yillik tajribaga ega jahon IT eksperti',
      en: 'Worldwide IT expert, 33 years experience',
      ru: 'Mirovoy IT ekspert, 33 goda opyta'
    },
    photo: '/Spikerlar/Boris Bobrovnikov.png'
  },
  {
    id: 's8',
    name: { uz: 'Xurshidbek Kurbanov', en: 'Khurshidbek Kurbanov', ru: 'Khurshidbek Kurbanov' },
    role: {
      uz: 'Paybek kompaniyasi Engineering Lead',
      en: 'Engineering Lead at Paybek',
      ru: 'Engineering Lead v Paybek'
    },
    photo: '/Spikerlar/Xurshidbek Kurbanov.png'
  },
  {
    id: 's9',
    name: { uz: 'Maxmudjon Sodiqov', en: 'Makhmudjon Sodikov', ru: 'Makhmudjon Sodikov' },
    role: {
      uz: 'Professor, Central Asian University; Team Manager & Senior ML Engineer (Vention)',
      en: 'Professor, Central Asian University; Team Manager & Senior ML Engineer (Vention)',
      ru: 'Professor, Central Asian University; Rukovoditel komandy i Senior ML Engineer (Vention)'
    },
    photo: '/Spikerlar/Makhmudjon Sodikov.png'
  },
  {
    id: 's10',
    name: { uz: 'Saud Abdulwaheed', en: 'Saud Abdulwaheed', ru: 'Saud Abdulwaheed' },
    role: {
      uz: 'HSec asoschisi',
      en: 'Founder of HSec',
      ru: 'Osnovatel HSec'
    },
    photo: '/Spikerlar/Saud Abdulwaheed .png'
  },
  {
    id: 's11',
    name: { uz: 'Oybek Artikov', en: 'Oybek Artikov', ru: 'Oybek Artikov' },
    role: {
      uz: 'Muhammad al-Xorazmiy avlodlari dasturi mentori',
      en: 'Mentor of The Successors of Muhammad Al-Khwarizmi',
      ru: 'Nastavnik programmy Preemniki Mukhammada al-Khorezmi'
    },
    photo: '/Spikerlar/Oybek Artikov .png'
  },
  {
    id: 's12',
    name: { uz: 'Azizbek Xabibullaev', en: 'Azizbek Khabibullaev', ru: 'Azizbek Khabibullaev' },
    role: {
      uz: 'Front-end dasturchi',
      en: 'Front End Developer',
      ru: 'Front End razrabotchik'
    },
    photo: '/Spikerlar/Azizbek Khabibullaev.png'
  },
  {
    id: 's13',
    name: { uz: 'Vera Dianova', en: 'Vera Dianova', ru: 'Vera Dianova' },
    role: {
      uz: 'UUM Academy',
      en: 'UUM Academy',
      ru: 'UUM Academy'
    },
    photo: '/Spikerlar/Vera Dianova.png'
  },
  {
    id: 's14',
    name: { uz: 'Aleksandra Nabieva', en: 'Alexandra Nabieva', ru: 'Alexandra Nabieva' },
    role: {
      uz: 'Huawei Seeds for the Future',
      en: 'Huawei Seeds for the Future',
      ru: 'Huawei Seeds for the Future'
    },
    photo: '/Spikerlar/Alexandra Nabieva.png'
  }
];

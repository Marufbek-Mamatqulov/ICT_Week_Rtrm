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
    id: 's13',
    name: { uz: 'Vera Dianova', en: 'Vera Dianova', ru: 'Vera Dianova' },
    role: {
      uz: 'UUM Academy',
      en: 'UUM Academy',
      ru: 'UUM Academy'
    },
    photo: '/Spikerlar/Vera Dianova.png'
  }
];

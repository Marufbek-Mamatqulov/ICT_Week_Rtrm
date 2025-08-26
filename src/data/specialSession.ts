export interface SpecialSessionItem {
  time: string;
  titleUz: string;
  titleEn: string;
  speakerUz?: string;
  speakerEn?: string;
  detailsUz?: string;
  detailsEn?: string;
}

export const specialSession: SpecialSessionItem[] = [
  { time: '09:30 – 10:00', titleUz: 'Ro‘yxatdan o‘tish', titleEn: 'Registration', detailsUz: 'Ishtirokchilarni kutib olish va ro‘yxatdan o‘tkazish.', detailsEn: 'Welcoming participants & badge pickup.' },
  { time: '10:00 – 10:10', titleUz: 'Kirish so‘zi', titleEn: 'Opening Remarks', detailsUz: 'Forum mavzusi, maqsadi va ahamiyati. Moderator: __________', detailsEn: 'Topic framing, goals & significance. Moderator: __________' },
  { time: '10:10 – 10:20', titleUz: '“1 yil – 1 kasb”', titleEn: '"1 Year – 1 Profession"', speakerUz: 'Xurshidbek Kurbanov (InFocus)', speakerEn: 'Xurshidbek Kurbanov (InFocus)', detailsUz: 'Sun’iy intellekt asrida dasturchi bo‘lishning eng qisqa yo‘li.', detailsEn: 'Fastest pathway to become a developer in the age of AI.' },
  { time: '10:20 – 10:30', titleUz: '“AI – Kelajak tili”', titleEn: '"AI – The Language of the Future"', speakerUz: 'Oybek Artikov', speakerEn: 'Oybek Artikov', detailsUz: 'Yoshlar uchun yangi bilim paradigmasi.', detailsEn: 'A new learning paradigm for youth.' },
  { time: '10:30 – 10:40', titleUz: '“Hududlardan global sahnaga yo‘l”', titleEn: '"From Regions to Global Stage"', speakerUz: 'Asadbek Kurbonboev', speakerEn: 'Asadbek Kurbonboev', detailsUz: 'Xorazm yoshlari va sun’iy intellekt imkoniyatlari.', detailsEn: 'Khorezm youth & AI opportunities.' },
  { time: '10:40 – 10:50', titleUz: '“AI davrida o‘rganish va ko‘nikmalar kelajagi”', titleEn: 'Future of Learning & Skills in the Era of AI', speakerUz: 'Nikolaz Foucaud (Coursera)', speakerEn: 'Nikolaz Foucaud (Coursera)', detailsUz: '180M foydalanuvchi maʼlumotlari asosida global tendensiyalar.', detailsEn: 'Global trends from 180M Coursera learners, with Uzbekistan focus.' },
  { time: '10:50 – 11:00', titleUz: 'Taqdimot', titleEn: 'Presentation', speakerUz: 'Yandex Praktikum', speakerEn: 'Yandex Practicum' },
  { time: '11:00 – 11:10', titleUz: '“AI bilan edukatsiya”', titleEn: '"Education with AI"', speakerUz: 'Waqar Younas (Alison)', speakerEn: 'Waqar Younas (Alison)', detailsUz: 'Raqamli avlod uchun yangi ilhom va vositalar.', detailsEn: 'New inspiration & tools for a digital generation.' },
  { time: '11:10 – 11:50', titleUz: 'Taqdirlash marosimi', titleEn: 'Awards Ceremony', detailsUz: 'Trenerlar, faol ishtirokchilar, OAV, influenserlar va olimpiada sovrindorlarini taqdirlash.', detailsEn: 'Recognizing trainers, top participants, media, influencers & olympiad winners.' },
  { time: '12:00 – 12:10', titleUz: 'Yakuniy qism', titleEn: 'Closing', detailsUz: 'Moderator – yakuniy xulosalar va tavsiyalar.', detailsEn: 'Moderator – wrap‑up insights & recommendations.' }
];

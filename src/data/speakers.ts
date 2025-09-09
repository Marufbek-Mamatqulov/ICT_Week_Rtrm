export type Speaker = {
  id: string;
  name: string;
  role: string;
  time: string; // e.g., "10:00 – 10:30"
  photo?: string; // optional image path under /public
};

export const speakers: Speaker[] = [
  { id: 's1', name: 'Ism Familiya', role: 'AI tadqiqotchisi', time: '10:00 – 10:20', photo: undefined },
  { id: 's2', name: 'Ism Familiya', role: 'Mashina o‘rganish muhandisi', time: '10:20 – 10:35' },
  { id: 's3', name: 'Ism Familiya', role: 'Ma’lumotlar olimi (AI)', time: '10:35 – 10:50' },
  { id: 's4', name: 'Ism Familiya', role: 'AI mahsulot menejeri', time: '10:50 – 11:05' },
  { id: 's5', name: 'Ism Familiya', role: 'AI axloqiyoti rahbari', time: '11:05 – 11:20' },
  { id: 's6', name: 'Ism Familiya', role: 'Kompyuter ko‘rish muhandisi', time: '11:20 – 11:35' },
  { id: 's7', name: 'Ism Familiya', role: 'NLP muhandisi', time: '11:35 – 11:50' },
  { id: 's8', name: 'Ism Familiya', role: 'Generativ AI mutaxassisi', time: '11:50 – 12:05' },
  { id: 's9', name: 'Ism Familiya', role: 'AI yechimlar arxitektori', time: '12:05 – 12:20' },
  { id: 's10', name: 'Ism Familiya', role: 'MLOps muhandisi', time: '12:20 – 12:35' },
  { id: 's11', name: 'Ism Familiya', role: 'AI o‘quv dasturi rahbari', time: '12:35 – 12:50' },
  { id: 's12', name: 'Ism Familiya', role: 'AI xavfsizlik mutaxassisi', time: '12:50 – 13:05' },
  { id: 's13', name: 'Ism Familiya', role: 'AI bulut arxitektori', time: '13:05 – 13:20' },
  { id: 's14', name: 'Ism Familiya', role: 'AI dastur menejeri', time: '13:20 – 13:35' },
];

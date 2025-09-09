export type LocaleText = { uz: string; en: string; ru: string };
export type Speaker = {
  id: string;
  name: LocaleText;
  role: LocaleText;
  time: string; // e.g., "10:00 – 10:30"
  photo?: string; // optional image path under /public
};

export const speakers: Speaker[] = [
  { id: 's1', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI tadqiqotchisi', en: 'AI Researcher', ru: 'Исследователь ИИ' }, time: '10:00 – 10:20', photo: undefined },
  { id: 's2', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'Mashina o‘rganish muhandisi', en: 'Machine Learning Engineer', ru: 'Инженер машинного обучения' }, time: '10:20 – 10:35' },
  { id: 's3', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'Ma’lumotlar olimi (AI)', en: 'Data Scientist (AI)', ru: 'Дата-саентист (ИИ)' }, time: '10:35 – 10:50' },
  { id: 's4', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI mahsulot menejeri', en: 'AI Product Manager', ru: 'Продуктовый менеджер ИИ' }, time: '10:50 – 11:05' },
  { id: 's5', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI axloqiyoti rahbari', en: 'AI Ethics Lead', ru: 'Руководитель по этике ИИ' }, time: '11:05 – 11:20' },
  { id: 's6', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'Kompyuter ko‘rish muhandisi', en: 'Computer Vision Engineer', ru: 'Инженер компьютерного зрения' }, time: '11:20 – 11:35' },
  { id: 's7', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'NLP muhandisi', en: 'NLP Engineer', ru: 'Инженер NLP' }, time: '11:35 – 11:50' },
  { id: 's8', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'Generativ AI mutaxassisi', en: 'Generative AI Specialist', ru: 'Специалист по генеративному ИИ' }, time: '11:50 – 12:05' },
  { id: 's9', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI yechimlar arxitektori', en: 'AI Solutions Architect', ru: 'Архитектор AI-решений' }, time: '12:05 – 12:20' },
  { id: 's10', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'MLOps muhandisi', en: 'MLOps Engineer', ru: 'Инженер MLOps' }, time: '12:20 – 12:35' },
  { id: 's11', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI o‘quv dasturi rahbari', en: 'AI Curriculum Lead', ru: 'Руководитель учебных программ по ИИ' }, time: '12:35 – 12:50' },
  { id: 's12', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI xavfsizlik mutaxassisi', en: 'AI Security Specialist', ru: 'Специалист по безопасности ИИ' }, time: '12:50 – 13:05' },
  { id: 's13', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI bulut arxitektori', en: 'AI Cloud Architect', ru: 'Архитектор облачных решений ИИ' }, time: '13:05 – 13:20' },
  { id: 's14', name: { uz: 'Ism Familiya', en: 'Name Surname', ru: 'Имя Фамилия' }, role: { uz: 'AI dastur menejeri', en: 'AI Program Manager', ru: 'Руководитель программ ИИ' }, time: '13:20 – 13:35' },
];

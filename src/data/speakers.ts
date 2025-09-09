export type Speaker = {
  id: string;
  name: string;
  role: string;
  time: string; // e.g., "10:00 – 10:30"
  photo?: string; // optional image path under /public
};

export const speakers: Speaker[] = [
  { id: 's1', name: 'Aziza Karimova', role: 'Moderator • RTMM', time: '10:00 – 10:20', photo: undefined },
  { id: 's2', name: 'Bekzod Ismoilov', role: 'Head of IT Education', time: '10:20 – 10:35' },
  { id: 's3', name: 'Nigora Rasulova', role: 'AI Researcher', time: '10:35 – 10:50' },
  { id: 's4', name: 'Javlon Mirzayev', role: 'CTO, EdTech', time: '10:50 – 11:05' },
  { id: 's5', name: 'Sevara Sodiqova', role: 'Curriculum Lead', time: '11:05 – 11:20' },
  { id: 's6', name: 'Iskandar Qodirov', role: 'Cloud Architect', time: '11:20 – 11:35' },
  { id: 's7', name: 'Malika To‘xtayeva', role: 'Data Scientist', time: '11:35 – 11:50' },
  { id: 's8', name: 'Rustam Sobirov', role: 'Security Lead', time: '11:50 – 12:05' },
  { id: 's9', name: 'Shahnoza Jalilova', role: 'Product Manager', time: '12:05 – 12:20' },
  { id: 's10', name: 'Ulug‘bek Tursunov', role: 'DevRel', time: '12:20 – 12:35' },
  { id: 's11', name: 'Maftuna Qahhorova', role: 'UX Researcher', time: '12:35 – 12:50' },
  { id: 's12', name: 'Abbos Eshonqulov', role: 'Mobile Lead', time: '12:50 – 13:05' },
  { id: 's13', name: 'Diyor Mahmudov', role: 'Backend Engineer', time: '13:05 – 13:20' },
  { id: 's14', name: 'Dilnoza Karimova', role: 'QA Lead', time: '13:20 – 13:35' },
];

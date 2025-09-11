export interface ProgramSession {
  id: string;          // unique id
  time: string;        // time range e.g. 09:30 – 10:00
  titleKey: string;    // i18n key for title
  speakerKey?: string; // i18n key for speaker (optional)
  detailsKey?: string; // i18n key for extended details (optional)
}

// Updated schedule extracted from provided PDF screenshot.
// Times are ranges; speaker & details optional.
export const programSessions: ProgramSession[] = [
  { id: 'reg', time: '09:30 – 10:00', titleKey: 'program.reg.title', detailsKey: 'program.reg.details' },
  { id: 'opening', time: '10:00 – 10:05', titleKey: 'program.opening.title', detailsKey: 'program.opening.details' },
  { id: 'karimjonov', time: '10:05 – 10:10', titleKey: 'program.karimjonov.title', speakerKey: 'program.karimjonov.speaker', detailsKey: 'program.karimjonov.details' },
  { id: 'break1', time: '10:10 – 10:15', titleKey: 'program.break1.title' },
  { id: 'break2', time: '10:15 – 10:20', titleKey: 'program.break2.title' },
  { id: 'unicef', time: '10:20 – 10:25', titleKey: 'program.unicef.title', speakerKey: 'program.unicef.speaker', detailsKey: 'program.unicef.details' },
  { id: 'eshankulov', time: '10:25 – 10:35', titleKey: 'program.eshankulov.title', speakerKey: 'program.eshankulov.speaker', detailsKey: 'program.eshankulov.details' },
  { id: 'aslikyan', time: '10:35 – 10:45', titleKey: 'program.aslikyan.title', speakerKey: 'program.aslikyan.speaker', detailsKey: 'program.aslikyan.details' },
  { id: 'anvarov', time: '10:45 – 10:55', titleKey: 'program.anvarov.title', speakerKey: 'program.anvarov.speaker', detailsKey: 'program.anvarov.details' },
  { id: 'bobrovnikov', time: '10:55 – 11:05', titleKey: 'program.bobrovnikov.title', speakerKey: 'program.bobrovnikov.speaker', detailsKey: 'program.bobrovnikov.details' },
  { id: 'dianova', time: '11:05 – 11:15', titleKey: 'program.dianova.title', speakerKey: 'program.dianova.speaker' },
  { id: 'foucaud', time: '11:15 – 11:25', titleKey: 'program.foucaud.title', speakerKey: 'program.foucaud.speaker', detailsKey: 'program.foucaud.details' },
  { id: 'nabieva', time: '11:25 – 11:30', titleKey: 'program.nabieva.title', speakerKey: 'program.nabieva.speaker', detailsKey: 'program.nabieva.details' },
  { id: 'zurutuza', time: '11:30 – 11:40', titleKey: 'program.zurutuza.title', speakerKey: 'program.zurutuza.speaker', detailsKey: 'program.zurutuza.details' },
  { id: 'panel', time: '11:40 – 12:10', titleKey: 'program.panel.title', speakerKey: 'program.panel.speaker', detailsKey: 'program.panel.details' },
  { id: 'quiz', time: '12:10 – 12:40', titleKey: 'program.quiz.title', speakerKey: 'program.quiz.speaker', detailsKey: 'program.quiz.details' },
  { id: 'masterclass1', time: '12:40 – 12:50', titleKey: 'program.masterclass1.title', speakerKey: 'program.masterclass1.speaker', detailsKey: 'program.masterclass1.details' },
  { id: 'masterclass2', time: '12:50 – 13:00', titleKey: 'program.masterclass2.title', speakerKey: 'program.masterclass2.speaker', detailsKey: 'program.masterclass2.details' },
  { id: 'masterclass3', time: '13:00 – 13:10', titleKey: 'program.masterclass3.title', speakerKey: 'program.masterclass3.speaker', detailsKey: 'program.masterclass3.details' },
  { id: 'closing', time: '13:10 – 13:15', titleKey: 'program.closing.title', speakerKey: 'program.closing.speaker', detailsKey: 'program.closing.details' }
];

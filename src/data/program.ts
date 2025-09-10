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
  { id: 'opening', time: '10:00 – 10:10', titleKey: 'program.opening.title', detailsKey: 'program.opening.details' },
  { id: 'oneprofession', time: '10:10 – 10:20', titleKey: 'program.oneprofession.title', speakerKey: 'program.oneprofession.speaker', detailsKey: 'program.oneprofession.details' },
  { id: 'futurelanguage', time: '10:20 – 10:30', titleKey: 'program.futurelanguage.title', speakerKey: 'program.futurelanguage.speaker', detailsKey: 'program.futurelanguage.details' },
  { id: 'globalpath', time: '10:30 – 10:40', titleKey: 'program.globalpath.title', speakerKey: 'program.globalpath.speaker', detailsKey: 'program.globalpath.details' },
  { id: 'futurelearning', time: '10:40 – 10:50', titleKey: 'program.futurelearning.title', speakerKey: 'program.futurelearning.speaker', detailsKey: 'program.futurelearning.details' },
  { id: 'presentation', time: '10:50 – 11:00', titleKey: 'program.presentation.title', speakerKey: 'program.presentation.speaker', detailsKey: 'program.presentation.details' },
  { id: 'aiEducation', time: '11:00 – 11:10', titleKey: 'program.aiEducation.title', speakerKey: 'program.aiEducation.speaker', detailsKey: 'program.aiEducation.details' },
  { id: 'awards', time: '11:10 – 11:50', titleKey: 'program.awards.title', detailsKey: 'program.awards.details' },
  { id: 'closing', time: '12:00 – 12:10', titleKey: 'program.closing.title', detailsKey: 'program.closing.details' },
];

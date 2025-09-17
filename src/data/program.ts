export interface ProgramSession {
  id: string;          // unique id
  time: string;        // time range e.g. 09:30 – 10:00
  titleKey: string;    // i18n key for title
  speakerKey?: string; // i18n key for speaker (optional)
  detailsKey?: string; // i18n key for extended details (optional)
  photo?: string;      // speaker photo (optional)
}

// Updated schedule extracted from provided PDF screenshot.
// Times are ranges; speaker & details optional.
export const programSessions: ProgramSession[] = [
  { id: 'registration', time: '09:00 – 09:45', titleKey: 'program.registration.title', detailsKey: 'program.registration.details' },
  { id: 'opening', time: '10:00 – 10:05', titleKey: 'program.opening.title', detailsKey: 'program.opening.details' },
  { id: 'karimjonov', time: '10:05 – 10:10', titleKey: 'program.karimjonov.title', speakerKey: 'program.karimjonov.speaker', detailsKey: 'program.karimjonov.details', photo: '/Spikerlar/Rustam Karimjonov.jpg' },
  { id: 'castillo', time: '10:10 – 10:15', titleKey: 'program.castillo.title', speakerKey: 'program.castillo.speaker', detailsKey: 'program.castillo.details', photo: '/Spikerlar/Regina Maria Castillo.jpg' },
  { id: 'eshankulov', time: '10:15 – 10:25', titleKey: 'program.eshankulov.title', speakerKey: 'program.eshankulov.speaker', detailsKey: 'program.eshankulov.details', photo: '/Spikerlar/Azamat_Eshankulov.png' },
  { id: 'oracle', time: '10:25 – 10:35', titleKey: 'program.oracle.title', speakerKey: 'program.oracle.speaker', detailsKey: 'program.oracle.details' },
  { id: 'foucaud', time: '10:35 – 10:45', titleKey: 'program.foucaud.title', speakerKey: 'program.foucaud.speaker', detailsKey: 'program.foucaud.details', photo: '/Spikerlar/Nikolaz Foucaud.jpeg' },
  { id: 'zurutuza', time: '10:45 – 10:55', titleKey: 'program.zurutuza.title', speakerKey: 'program.zurutuza.speaker', detailsKey: 'program.zurutuza.details', photo: '/Spikerlar/Naroa_Zurutura.jpeg' },
  { id: 'nabieva', time: '10:55 – 11:05', titleKey: 'program.nabieva.title', speakerKey: 'program.nabieva.speaker', detailsKey: 'program.nabieva.details', photo: '/Spikerlar/Alexandra Nabieva.jpg' },
  { id: 'bella', time: '11:05 – 11:15', titleKey: 'program.bella.title', speakerKey: 'program.bella.speaker', detailsKey: 'program.bella.details', photo: '/Spikerlar/Vera_Bell.jpg' },
  { id: 'dianova', time: '11:15 – 11:25', titleKey: 'program.dianova.title', speakerKey: 'program.dianova.speaker', detailsKey: 'program.dianova.details', photo: '/Spikerlar/Vera Dianova (1).jpg' },
  { id: 'bobrovnikov', time: '11:25 – 11:35', titleKey: 'program.bobrovnikov.title', speakerKey: 'program.bobrovnikov.speaker', detailsKey: 'program.bobrovnikov.details', photo: '/Spikerlar/Boris Bobrovnikov.jpg' },
  { id: 'aslikyan', time: '11:35 – 11:45', titleKey: 'program.aslikyan.title', speakerKey: 'program.aslikyan.speaker', detailsKey: 'program.aslikyan.details', photo: '/Spikerlar/Narek_Aslikyan.png' },
  { id: 'awards', time: '11:45 – 12:15', titleKey: 'program.awards.title', speakerKey: 'program.awards.speaker', detailsKey: 'program.awards.details' },
  { id: 'quiz', time: '12:15 – 12:45', titleKey: 'program.quiz.title', speakerKey: 'program.quiz.speaker', detailsKey: 'program.quiz.details' },
  { id: 'masterclass1', time: '12:45 – 12:55', titleKey: 'program.masterclass1.title', speakerKey: 'program.masterclass1.speaker', detailsKey: 'program.masterclass1.details', photo: '/Spikerlar/Oybek Artikov.JPG' },
  { id: 'masterclass2', time: '12:55 – 13:05', titleKey: 'program.masterclass2.title', speakerKey: 'program.masterclass2.speaker', detailsKey: 'program.masterclass2.details', photo: '/Spikerlar/Xurshidbek_Kurbanov.jpg' },
  { id: 'masterclass3', time: '13:05 – 13:15', titleKey: 'program.masterclass3.title', speakerKey: 'program.masterclass3.speaker', detailsKey: 'program.masterclass3.details', photo: '/Spikerlar/Saud_Abdulwaheed.jpg' },
  { id: 'final', time: '13:15 – 13:25', titleKey: 'program.final.title', speakerKey: 'program.final.speaker', detailsKey: 'program.final.details' }
];

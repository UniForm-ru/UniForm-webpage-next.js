interface scheduleDataInterface {
  day:string;
  subjects:subjectDataInterface[];
}

interface subjectDataInterface {
  type:string;
  time: { start:string, end:string };
  subject:string;
  location: { building: number, classroom: number };
  teacher: string;
}

export const scheduleData: scheduleDataInterface[] = [
    {
      day: 'Понедельник',
      subjects: [
        {
          type: 'окно',
          time: { start: '9:00', end: '10:30' },
          subject: '',
          location: { building: 0, classroom: 0 },
          teacher: '',
        },
        {
          type: 'практика',
          time: { start: '9:00', end: '10:30' },
          subject: 'Математика',
          location: { building: 1, classroom: 312 },
          teacher: 'Фамилия И. О',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Физика',
          location: { building: 1, classroom: 312 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'История',
          location: { building: 1, classroom: 312 },
          teacher: 'Фамилия И. О.',
        },
      ],
    },
    {
      day: 'Вторник',
      subjects: [
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Биология',
          location: { building: 2, classroom: 10 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Английский',
          location: { building: 3, classroom: 201 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Химия',
          location: { building: 2, classroom: 109 },
          teacher: 'Фамилия И. О.',
        },
      ],
    },
    {
      day: 'Среда',
      subjects: [
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Информатика',
          location: { building: 1, classroom: 210 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Физкультура',
          location: { building: 4, classroom: 1 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Литература',
          location: { building: 1, classroom: 303 },
          teacher: 'Фамилия И. О.',
        },
      ],
    },
    {
      day: 'Четверг',
      subjects: [
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'География',
          location: { building: 2, classroom: 104 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Искусство',
          location: { building: 3, classroom: 202 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Музыка',
          location: { building: 2, classroom: 107 },
          teacher: 'Фамилия И. О.',
        },
      ],
    },
    {
      day: 'Пятница',
      subjects: [
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Обществознание',
          location: { building: 1, classroom: 315 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Русский язык',
          location: { building: 1, classroom: 301 },
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Иностранный язык',
          location: { building: 1, classroom: 320},
          teacher: 'Фамилия И. О.',
        },
        {
          type: 'лекция',
          time: { start: '9:00', end: '10:30' },
          subject: 'Иностранный язык',
          location: { building: 1, classroom: 201 },
          teacher: 'Фамилия И. О.',
        },
      ],
    },
  ];
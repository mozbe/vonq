export const formData = {
  title: 'Job Criteria',
  info: 'We will use the data we collect here to better target your desired audience.',
  fields: {
    experience: {
      title: 'A minimum No. years experience',
      type: 'number',
      placeholder: 'e.g. 5',
      name: 'experience',
      value: '',
      options: [{
        name: '',
      }],
    },
    education: {
      title: 'Level of education',
      type: 'checkbox',
      name: 'education',
      value: [],
      options: [
          {
            id: 'bachelor',
            name: 'Bachelor / Graduate',
          },
          {
            id: 'gcse',
            name: 'GCSE / A-Level / Highschool / GED',
          },
          {
            id: 'master',
            name: 'Master / Post-Graduate / PhD',
          },
          {
            id: 'vocational',
            name: 'Vocational / Diploma / Associates degree',
          },
      ],
    },
    hours: {
      title: 'No. working hours (per week)',
      type: 'number',
      name: 'hours',
      value: [32,40],
      options: [
        {
          name: 'Min',
          value: 32,
        }, {
          name: 'Max',
          value: 40,
        },
      ],
    },
  },
};

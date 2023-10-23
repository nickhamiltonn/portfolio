import Tags from './Tags';

// TODO: How do we want tools / tags to work here... do we want
// them to be the same as for the Projects so we dont repeat,
// or different since we dont want them to be filters
// in projects page?
const experiences = [
  {
    'title': 'Machine Learning Software Engineer',
    'short_description':
            `Built RESTFul Python API for serving real-time inference
            results. Refactored/modularized batch airflow pipeline, 
            led discovery/documentation tasks`,
    'long_description': 'Did a lot more stuff',
    'tools': [
      Tags.Languages.Python,
    ],
    'date_start': new Date(2022, 1),
    'date_end': new Date(2022, 8),
    'logo': '',
  },
];

export default experiences;

import Tags from './Tags';

// TODO: How do we want tools / tags to work here... do we want
// them to be the same as for the Projects so we dont repeat,
// or different since we dont want them to be filters
// in projects page?

// TODO: Make it obvious that no date_end will mean 'Current'
// gets displayed instead
const experiences = [
  {
    'title': 'Machine Learning Software Engineering Co-op',
    'company': 'Borealis AI',
    'short_description':
            `Built RESTFul Python API for serving real-time inference
            results. Refactored/modularized batch airflow pipeline, 
            led discovery/documentation tasks`,
    'long_description': 'Did a lot more stuff',
    'tools': [
      Tags.Languages.Python,
      Tags.Frameworks.Airflow,
    ],
    'date_start': new Date(2022, 0),
    'date_end': new Date(2022, 7),
    'logo': require('../resources/logos/borealis-ai.png'),
  },
  {
    'title': 'Software Engineering Co-op',
    'company': 'Realtor.com',
    'short_description':
            `Built React.js frontend for collaboration pages. Assisted
             in a re-implementation of the login portals. Designed
             and implemented full-stack functionality for uploading
             profile pictures`,
    'long_description': 'Did a lot more stuff',
    'tools': [
      Tags.Languages.Javascript,
      Tags.Frameworks.React,
      Tags.Frameworks.Node,
    ],
    'date_start': new Date(2021, 4),
    'date_end': new Date(2021, 11),
    'logo': require('../resources/logos/realtor.com.png'),
  },
];

export default experiences;

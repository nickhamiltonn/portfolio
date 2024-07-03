import Tags from "./Tags";

// TODO: How do we want tools / tags to work here... do we want
// them to be the same as for the Projects so we dont repeat,
// or different since we dont want them to be filters
// in projects page?

// TODO: Make it obvious that no date_end will mean 'Current'
// gets displayed instead
const experiences = [
  {
    title: "Software Engineer",
    company: "Tesla",
    short_description: `Owned, designed, and implemented features for internal 
            timekeeping/scheduling system for various platforms using 
            React.js/React Native/Electron and Node.js/Express.js.`,
    long_description: `At Tesla I owned, designed, and implemented features for an internal 
    timekeeping/scheduling system. This project was built for various platforms using 
    React.js/React Native/Electron and Node.js/Express.js. Some of the things I implemented 
    were push notifications and subsequent deep-linking on an internal mobile app for 
    35,000+ employees, a virtual keyboard input for our Electron/Kiosk application, and some 
    new C# and Node.js backend API endpoints. I also assisted in deploying changes while 
    onboarding our system to a new Gigafactory location, supporting 80,000 employees and 
    up to 200 transactions/sec.`,
    tools: [
      Tags.Languages.Typescript,
      Tags.Languages.CSharp,
      Tags.Frameworks.React,
      Tags.Frameworks.ReactNative,
      Tags.Frameworks.NodeExpress,
      Tags.Tools.Docker,
      Tags.Databases.MySQL,
    ],
    date_start: new Date(2024, 2),
    date_end: new Date(2024, 5),
    logo: require("../resources/logos/tesla.png"),
  },
  {
    title: "Machine Learning Software Engineering Co-op",
    company: "Borealis AI",
    short_description: `Built RESTFul Python API for serving real-time inference
            results. Refactored/modularized batch airflow pipeline, 
            led discovery/documentation tasks`,
    long_description: "Did a lot more stuff",
    tools: [
      Tags.Languages.Python,
      Tags.Frameworks.FastAPI,
      Tags.Tools.Docker,
      Tags.Tools.Kubernetes,
      Tags.Tools.Helm,
      Tags.Tools.Jenkins,
      Tags.Tools.OCP,
      Tags.Tools.Airflow,
    ],
    date_start: new Date(2022, 0),
    date_end: new Date(2022, 7),
    logo: require("../resources/logos/borealis-ai.png"),
  },
  {
    title: "Software Engineering Co-op",
    company: "Realtor.com",
    short_description: `Built React.js frontend for collaboration pages. Assisted
             in a re-implementation of the login portals. Designed
             and implemented full-stack functionality for uploading
             profile pictures`,
    long_description: "Did a lot more stuff",
    tools: [
      Tags.Languages.Javascript,
      Tags.Frameworks.React,
      Tags.Frameworks.Node,
    ],
    date_start: new Date(2021, 4),
    date_end: new Date(2021, 11),
    logo: require("../resources/logos/realtor.com.png"),
  },
];

export default experiences;

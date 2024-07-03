import Tags from "./Tags";

const projects = [
  {
    name: "Distributed Key-Value Store",
    short_description: `40+ node distributed key-value store designed and implemented from scratch.`,
    long_description: `Created/deployed distributed KV store with 40+ nodes, 
    able to concurrently handle 2048+ clients. Created/deployed distributed 
    KV store with 40+ nodes, able to concurrently handle 2048+ clients`,
    tools: [Tags.Languages.Java, Tags.Tools.AWS],
    date: new Date(2023, 3),
    src: "",
  },
  {
    name: "Localized Vision Transformer",
    short_description: `Added locality and curriculum learning to Vision Transformer model.`,
    long_description: `Implemented locality and curriculum learning on top of timm’s 
    Vision Transforms through the addition of a convolution layer and epoch-based image resizing. 
    Trained on Google Cloud Provider using the ImageNet1k dataset.`,
    tools: [
      Tags.Languages.Python,
      Tags.Frameworks.Pytorch,
      Tags.Languages.Latex,
      Tags.Tools.GCP,
    ],
    date: new Date(2023, 3),
    src: "",
  },
  {
    name: "3D Mapping Smart Glasses",
    short_description: `R&D for 3D mapping glasses for navigation assistance. `,
    long_description: `My team analyzed software techniques and hardware sensors for 3D map generation to enable the use of navigation 
    assistance for visually impaired users. After settling on Simulataneous Localization and Mapping (SLAM), I added support 
    to an existing iOS application to allow 3D generation from images stores in the device's file system. I also integrated a 
    POC React Native project with an Objective-C/C++ native module, to simlutate the communication and build process required for integrating
    the mapping library with the clients current application.`,
    tools: [
      Tags.Languages.C,
      Tags.Languages.CPP,
      Tags.Languages.Swift,
      Tags.Languages.Javascript,
      Tags.Frameworks.ReactNative,
    ],
    date: new Date(2023, 3),
    src: "",
  },
  {
    name: "Twitter Cybersecurity Chrome Extension",
    short_description: `Chrome extension to add digital signatures to tweets for additional security.`,
    long_description: `Built a chrome extension to add an additional layer of security to twitter, by adding cryptographic signatures to tweets. 
    Using a public and private key allows all users to verify the validity of a tweet while only allowing a holder of the private key to correctly 
    sign a tweet. This will catch a remote takeover of an account, useful for celebrities or public figures. To implement, I wrote 
    scripts/functions leveraging JS crypto library to generate ECDSA key-pairs and create/verify signatures. I also developed a Node.js/MongoDB 
    back-end to manage public keys, allowing for end-to-end tweet verification.`,
    tools: [Tags.Languages.Javascript, Tags.Frameworks.NodeExpress],
    date: new Date(2022, 10),
    src: "",
  },
];

export default projects;

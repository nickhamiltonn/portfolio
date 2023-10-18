import Tags from './Tags';

const projects = [
  {
    'name': 'Project with lots of Tags',
    'short_description': 'This project has a whole lot of em',
    'long_description': 'Did a lot more stuff',
    'tools': [
      Tags.Languages.Java,
      Tags.Languages.Javascript,
      Tags.Languages.Python,
      Tags.Languages.C,
      Tags.Languages.CPP,
      Tags.Tools.AWS,
      Tags.Tools.GCP,
    ],
    'date': new Date(2024, 3),
    'src': '',
  },
  {
    'name': 'Distributed Key-Value Store',
    'short_description':
      `Created/deployed distributed KV store with 40+ nodes, 
      able to concurrently handle 2048+ clients. Created/deployed distributed 
      KV store with 40+ nodes, able to concurrently handle 2048+ clients`,
    'long_description': 'Did a lot more stuff',
    'tools': [
      Tags.Languages.Java,
      Tags.Tools.AWS,
    ],
    'date': new Date(2023, 3),
    'src': '',
  },
  {
    'name': 'Efficient Localized Vision Transformer',
    'short_description':
      `Implemented locality and curriculum learning on top of timm’s 
      Vision Transforms through addition of convolution layer and 
      epoch-based image resizing.`,
    'long_description': 'blah blah',
    'tools': [
      Tags.Languages.Python,
      Tags.Frameworks.Pytorch,
      Tags.Languages.Latex,
      Tags.Tools.GCP],
    'date': new Date(2023, 3),
    'src': '',
  },
  {
    'name': 'Test old JS project',
    'short_description': 'Did js project a long time ago',
    'long_description': '',
    'tools': [
      Tags.Languages.Javascript,
      Tags.Frameworks.React],
    'date': new Date(2020, 1),
    'src': '',
  },
  {
    'name': 'somewhat old JS project',
    'short_description': 'Did js project pretty long ago',
    'long_description': '',
    'tools': [
      Tags.Languages.Javascript,
      Tags.Frameworks.React],
    'date': new Date(2020, 12),
    'src': '',
  },
  {
    'name': 'New JS project',
    'short_description': 'Most recent Javascript project, this is still a test',
    'long_description': '',
    'tools': [
      Tags.Languages.Javascript,
      Tags.Frameworks.React],
    'date': new Date(2023, 8),
    'src': '',
  },
];

export default projects;

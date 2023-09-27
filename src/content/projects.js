import Tags from "../content/enums";

const projects = [
    {
        "name": "Distributed Key-Value Store",
        "short_description": "Created/deployed distributed KV store with 40+ nodes, able to concurrently handle 2048+ clients. Created/deployed distributed KV store with 40+ nodes, able to concurrently handle 2048+ clients Created/deployed distributed KV store with 40+ nodes, able to concurrently handle 2048+ clients Created/deployed distributed KV store with 40+ nodes, able to concurrently handle 2048+ clients Created/deployed distributed KV store with 40+ nodes, able to concurrently handle 2048+ clients",
        "long_description": "Did a lot more stuff",
        "tools": [
            Tags.Languages.Java, 
            Tags.Tools.AWS
        ],
        "date": new Date(2023, 3),
        "src": ""
    },
    {
        "name": "Efficient Localized Vision Transformer",
        "short_description": "Implemented locality and curriculum learning on top of timm’s Vision Transform through addition of convolution layer and epoch-based image resizing.",
        "long_description": "blah blah",
        "tools": [
            Tags.Languages.Python, 
            Tags.Frameworks.Pytorch, 
            Tags.Languages.Latex, 
            Tags.Tools.GCP],
        "date": new Date(2023, 3),
        "src": ""
    },
]

export default projects;
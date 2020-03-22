# Electron with Parcel Boilerplate

Electron + Parcel = Margic. Image goes here <br> A template
for making Electron apps .

## Table of Contents

- [Motivation](#Motivation)
- [Features](#Features)
- [File Structure](#File-Structure)
- [Prerequisites](#Prerequisites)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Issues](#Issues)
- [ToDo](#ToDo)

## Motivation

I coudn't find a good boilerplate to start off my electron
project. I thought I'd make one so other people don't have
to bang their head's against the wall.

<div style="{color: red}">test</div>
<img src="https://image.slidesharecdn.com/introvenus-140417215728-phpapp01/95/introduction-to-venusjs-38-638.jpg?cb=1397772361" height="260" alt="How I program"> <img src="https://thumbs.dreamstime.com/t/cartoon-stick-man-drawing-conceptual-illustration-headstrong-businessman-running-against-brick-wall-head-first-business-concept-112391908.jpg" height="260" alt="Also How I program, but after coffee.">

## Features

- Runs Parcel and Electron side by side
- Automatically restarts Electron when configuration files
  is updated or required files are updated and saved.
- Automatically restarts Parcel bundler when parcel
  onfiguration file is updated required files are updated
  and saved.
- HMR support so your page refreshes when files in your
  source files are updated and saved.
- Supports zero configuration compilation with ReasonML,
  SCSS, LESS, Stylus, TypeScript, CoffeeScript, Vue,
  GraphQL, Rust, WebAssembly, Elm, OpenGL, and Pug.
- NPM scripts baked in to help you with your experience.

## File Structure

```sh
├── README.md
├── config
│   ├── electron-config.json
│   ├── nodemon-config.json
│   └── parcel-config.json
├── index.html
├── jsconfig.json
├── main.js
├── package-lock.json
├── package.json
├── server
│   ├── express.js
│   ├── parcel-bundler.js
│   └── parcel-runner.js
└── src
    ├── App.vue
    └── renderer.js
```

## Prerequisites

Node version 8/10 or higher. This has only been tested on
Mac OS. I hope to.

## Installation

```sh
git clone ect...
npm install
```

## Usage

git clone and remove .git folder to start your own project

## Issues

- Currently this has not been tested with Windows or Linux.
  I will test soon.

## Contributing

Please feel free to contribute by forking and making pull
requests. I would love a follow or a star for this project.
Thanks

## ToDo

- [x] ~~Update Readme~~
- [x] ~~Figure out how to remove electron~~
- [ ] Update installation instructions
- [ ] Update installation requirements
- [ ] Update and clean package.json
  - [ ] working lint scripts
  - [ ] working debug scripts for chrome/vscode
  - [ ] Remove unused node packages.
  - [ ] Add Build Scripts to package.json
- [ ] Add Option to serve up frontend via express instead of
      with electron npm module
- [ ] Write tests

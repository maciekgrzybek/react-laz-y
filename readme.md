<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/maciekgrzybek/react-laz-y">
    <img src="/src/img/react-laz-y-logo.svg" alt="Logo" width="275" height="90">
  </a>

  <h3 align="center">React Laz-y</h3>

  <p align="center">
    Lazy load your components when the appear in the viewport.
    <br />
    <br />
    <a href="demo">View Demo</a>
    ·
    <a href="https://github.com/maciekgrzybek/react-laz-y/issues">Report Bug</a>
    ·
    <a href="https://github.com/maciekgrzybek/react-laz-y/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Browser support](#browser-support)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Notes](#notes)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

gif goes here

By combining the power of browser [Intersection Observer AP](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and [React Lazy API](https://reactjs.org/docs/code-splitting.html#reactlazy)
I've created a simple component that will allow you to lazy load your component when it appears in the browser's viewport. 

Don't load components that user won't see on the first render, React Laz-y will detect the scroll position for you and inject the correct code when it's actually needed.

<!-- GETTING STARTED -->

## Getting Started

To install, follow these few steps.

### Prerequisites

Before you start, make sure you use:
- React >= 16.6.0
- npm

```sh
npm install npm@latest -g
```

### Installation

* Install with npm
```sh
npm i react-laz-y
```
or
* Install with yarn
```sh
yarn add react-laz-y
```

<!-- USAGE EXAMPLES -->

## Usage

#### Basic example

```js
import React from 'react';
import ReactLazy from 'react-laz-y';

const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <>
      <header style={{ height: '300vh' }}>
        <h1>My awesome title</h1>
      </header>
      <main>
        <ReactLazy>
          <div>
            <MyComponent />
          </div>
        </ReactLazy>
      </main>
    </>
  );
};

export default App;
```

#### Props

| Name        | Type           | Default  | Required |  Description |
|:------- |:-------------:| -----:|-----:| -----:|
| `children`     | `ReactElement` | undefined | true | s |
| `callback`     | `function`      |   () => {} | false | s |
| `root` | `HTMLElement`      | null | false | s |
| `rootMargin` | `string`      | "0px" | false | s |
| `threshold` | `number | number[]`   | 0 | false | s |
| `fallback` | `ReactElement`   | `<div>someting</div>` | false | s |
| `wrapperClass` | `string`   | `""` | false | s |
| `styles` | `object`   | {} | false | s |


  children?: ReactElement;
  callback: Function;
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number | number[];
  fallback: ReactElement | string | number;
  wrapperClass: string;
  styles: object;
<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Maciek Grzybek - [@maciek_g88](https://twitter.com/maciek_g88) - maciekgrzybek1@gmail.com


<!-- Notes -->

## Notes

* Currently React Laz-y doesn't work with SSR due you React Lazy API limitations.
* React Lazy API only supports default exports. There's a simple workaround that you can find [here](https://reactjs.org/docs/code-splitting.html#named-exports)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)

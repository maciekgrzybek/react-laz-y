<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/maciekgrzybek/react-laz-y">
    <img src="/src/img/react-laz-y-logo.svg" alt="Logo" width="275" height="90">
  </a>
  <p align="center">
    Lazy load your components when they appear in the viewport.
    <br />
    <br />
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
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)
- [Notes](#notes)

<!-- ABOUT THE PROJECT -->

## About The Project


By combining the power of browser [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and [React Lazy API](https://reactjs.org/docs/code-splitting.html#reactlazy)
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
npm i react-laz-y-component-loader
```
or
* Install with yarn
```sh
yarn add react-laz-y-component-loader
```

<!-- USAGE EXAMPLES -->

## Usage

#### Basic example

Pass a component imported with `React.lazy` API as a children.

```js
import React from 'react';
import ReactLazy from 'react-laz-y-component-loader';

const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <>
      <header style={{ height: '300vh' }}>
        <h1>My awesome title</h1>
      </header>
      <main>
        <ReactLazy>
          <MyComponent />
        </ReactLazy>
      </main>
    </>
  );
};

export default App;
```

#### Usage with `rootMargin` property

Pass the `rootMargin` props to increase or decrease the area of the root bounding box.

![rootMargin props](/src/img/rootMargin.jpg)

```js
import React from 'react';
import ReactLazy from 'react-laz-y-component-loader';

const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <>
      <header style={{ height: '300vh' }}>
        <h1>My awesome title</h1>
      </header>
      <main>
        <ReactLazy rootMargin="100px 0px">
          <MyComponent />
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
| `children`     | `ReactElement` | `undefined` | `true` | Child element loaded with `React.lazy` API. |
| `onLoad`     | `function`      |   `() => {}` | `false` | Function that will be fired when child element is loaded. |
| `root` | `HTMLElement`      | `viewport` | `false` | Parent of the element that will be loaded. |
| `rootMargin` | `string`      | `"0px"` | `false` | Defines margin of root bounding box. See more [here](). |
| `threshold` | `number` <code>&#124;&#124;</code> `number[]`   | `0` | `false` | Determines how much of the elements wrapper needs to intersect with the bounding box. See more [here]().|
| `fallback` | `ReactElement`   | `<div>Loading...</div>` | false | Fallback element that will be rendered while target elements is being loaded. |
| `wrapperClass` | `string`   | `""` | `false` | Custom class for element's wrapper. |
| `styles` | `object`   | `{}` | `false` | Custom styles for element's wrapper. |

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Maciek Grzybek - [@maciek_g88](https://twitter.com/maciek_g88) - maciekgrzybek1@gmail.com

<!-- Notes -->

## Notes

* Currently React Laz-y doesn't work with SSR due you React Lazy API limitations.
* React Lazy API only supports default exports. There's a simple workaround that you can find [here](https://reactjs.org/docs/code-splitting.html#named-exports).
* Intersection Observer API doesn't work with Internet Explorer. If you really need to support it, you can use [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill). Simply import it in your project.

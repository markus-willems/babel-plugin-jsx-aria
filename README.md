# babel-plugin-jsx-aria

Babel plugin for JSX which transforms camel cased ARIA attributes to kebap cased attributes.

[![Build Status](https://travis-ci.org/markus-willems/babel-plugin-jsx-aria.svg?branch=master)](https://travis-ci.org/markus-willems/babel-plugin-jsx-aria)

# Why
Instead of mixing camel and kebap cased props, like here (snippet from React docs about [Accessibility](https://facebook.github.io/react/docs/accessibility.html)):
```jsx
<input
  type="text" 
  aria-label={labelText}
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```
You can write them all camel cased without getting warnings (```Unknown props `ariaLabel`, `ariaRequired` on <input> tag.```):

```jsx
<input
  type="text" 
  ariaLabel={labelText}
  ariaRequired="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

```ariaLabel``` and ```ariaRequired``` will be transformed to ```aria-label``` and ```aria-required```

# Installation

## npm

```sh
npm install --save-dev babel-plugin-jsx-aria
```

## Yarn

```sh
yarn add --dev babel-plugin-jsx-aria
```

# Usage

## .babelrc

```json
{
  "plugins": ["jsx-aria"]
}
```
Two Design UI library

## Features

### CSS
- normalize.css
- Sass（node-sass）
    - sass-bulk-import
    - node-sass-package-importer
    - sourcemaps
    - csso
    - postcss
        - autoprefixer
        - css-mqpacker
- Sprite(png/svg)
- stylelint

### JavaScript
- BabelJS
- ESLint(eslint-config-airbnb)

***

## Requirements

- `node` >= 11.11.0
- `npm` >= 6.7.0
- `gulp` >= 3.9.1
- `sass` >= 3.4.24

***

## Getting Started

```
# clone
$ git clone ###
$ cd two-design-ui-library

# Install Dependencies
$ npm run lerna:bootstrap
```

or

Please see [Two Design Boilerplate](https://github.com/two2two2/two-design-boilerplate).

***

## Directory Structure

```
.
├── packages
│   ├── color
│   │   ├── index.scss
│   │   └── package.json
│   ├── components
│   │   └── src
│   │       ├── js
│   │       ├── scss
│   │       └── package.json
│   ├── grid
│   │   ├── index.scss
│   │   └── package.json
│   ├── icons
│   │   ├── index.scss
│   │   └── package.json
│   ├── icons
│   │   ├── index.scss
│   │   └── package.json
│   ├── layout
│   │   ├── index.scss
│   │   └── package.json
│   ├── motion
│   │   ├── index.scss
│   │   └── package.json
│   ├── spacing
│   │   ├── index.scss
│   │   └── package.json
│   ├── theme
│   │   ├── index.scss
│   │   └── package.json
│   ├── typography
│   │   ├── index.scss
│   │   └── package.json
│   └── visual-forms
│       ├── index.scss
│       └── package.json
├── .eslintrc
├── .gitignore
├── .stylelintrc
├── gulpfile.js
├── lerna.json
├── package.json
└── README.md
```

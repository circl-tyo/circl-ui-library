Two Design System

## Features

### Automation
- Gulp
- Webpack
- Browsersync

### HTML
- EJS
    - ejs-linter

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

### JavaScript
- BabelJS
- ESLint(eslint-config-airbnb)

### Images
- imagemin
    - pngquant
    - mozjpeg
    - svgo
    - optipng
    - gifsicle

### Component Guide
- fractal

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
$ cd frontend-starter-kit

# Install Dependencies
$ npm install

# Run the Application
$ npm run start

# Deploy for production
$ npm run dist
```

***

## Directory Structure

```
.
├── .babelrc
├── .browserslist
├── .eslintrc
├── .gitignore
├── .sprite-png-template
├── .sprite-svg-template
├── fractal.config.js
├── gulpfile.js
├── package.json
├── README.md
├── dist -> client-side public
├── docs -> fractal components guide
├── src
│   ├── docs
│   │   ├── components
│   │   │   ├── _preview.hbs.html
│   │   │   └── headings.hbs
│   │   └── index.md
│   ├── img
│   │   └── sprite
│   │       ├── png
│   │       └── svg
│   ├── js
│   │   └── app.js
│   ├── ejs
│   │   ├── inc
│   │   │   ├── core
│   │   │   │   ├── _base.ejs
│   │   │   │   ├── _config.ejs
│   │   │   │   └── _mixin.ejs
│   │   │   ├── layout
│   │   │   │   ├── _footer.ejs
│   │   │   │   └── _header.ejs
│   │   │   └── module
│   │   ├── index.ejs
│   │   └── setting.json
│   └── scss
│       ├── app.scss
│       ├── components
│       ├── foundation
│       │   ├── base
│       │   │   └── _default.scss
│       │   ├── functions
│       │   │   ├── _rem.scss
│       │   │   ├── _sprite.scss
│       │   │   └── _z-index.scss
│       │   ├── mixins
│       │   │   ├── _clearfix.scss
│       │   │   ├── _media-queries-only.scss
│       │   │   ├── _media-queries.scss
│       │   │   ├── _placeholder.scss
│       │   │   ├── _responsive-iframe.scss
│       │   │   └── _sprite-image-replace.scss
│       │   └── variables
│       │       └── _variables.scss
│       ├── layout
│       │   ├── _container.scss
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   └── _sidebar.scss
│       ├── utility
│       └── venders
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

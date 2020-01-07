
# Webpack 4 + Bootstrap 4 + Handlebars

Static site generator built with Webpack, Bootstrap and Handlebars.

![Webpack 4 + Bootstrap 4 + Handlebars]



### Installation

```
git clone https://github.com/statickidz/webpack-handlebars-bootstrap.git your-app-name
cd your-app-name
yarn install
```

### Run development

```
yarn start
```

### Build Static site for production

```
yarn build
```

### Netlify Deploy Build settings

* Add your repository normally
* Build command: webpack --config webpack-prod.config.js --colors --optimize-minimize
* Publish directory: dist

### Features:

* Static-site
* SEO friendly
* Webpack 4
* BrowserSync with localtunnel, xip.io, ...
* Hot Module Replacement
* ES6 Support via [babel-loader](https://github.com/babel/babel-loader)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

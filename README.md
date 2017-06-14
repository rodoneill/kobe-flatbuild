# Flatbuild Boilerplate (Bootstrap 4)
This boilerplate allows for quick HTML, CSS, JS flatbuilding, compiling and minification. This project assumes you are developing using Bootstrap 4.
Dependencies:
- [Yarn](https://yarnpkg.com/)
- [Gulp](http://gulpjs.com/)

### Get started
Once you've installed Yarn, Gulp and the Gulp CLI, follow these steps to get up and running.
1. Run ```yarn install``` to download Bootstrap 4, Jquery and other Gulp build libararies.
2. Run ```gulp``` to compile and serve the flatbuild project.
3. That's it... if all went well, you should be looking at your served files at http://localhost:3000, thanks to [browsersync](https://www.browsersync.io/) magic.

### What now?
You can start flatbuilding by jumping into the `src` folder and adding HTML code to `index.html`. Add a HTML file for each template you're working on.

On top of Bootstrap 4, we use [SASS](http://sass-lang.com/) for all styling. You can edit the `main.scss` file directly in the `src/scss` folder, or add partials and include them. You'll see we are including the Bootstrap SCSS file and an empty `_variables.scss` file for you.

Under ```src/scripts``` you'll find the `app.js` file, which uses the `//=require` comment style based on Sprockets to import the Bootstrap javascript and Jquery. You can add any extra javascript here.

As long as `gulp` is running, any changes you make to the HTML, SCSS or JS will automatically compile and reload the browser for you.

### Finishing up
To prepare your SCSS and JS for deployment, uncomment ```.pipe(sass({outputStyle : "compressed"}))``` and  ```.pipe(uglify())``` in ```gulpfile.js```. Then run ```gulp``` again to minify both files.

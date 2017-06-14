var gulp        = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass        = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	include = require("gulp-include");

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {

	browserSync.init({
		server: "./src"
	});

	gulp.watch("src/scss/*.scss", ['sass']);
	gulp.watch("src/js/*.js", ['js']);
	gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("src/scss/*.scss")
	.pipe(sass())
	// .pipe(sass({outputStyle : "compressed"}))
	.pipe(autoprefixer({browsers : ["last 20 versions"]}))
	.pipe(gulp.dest("src/css"))
	.pipe(browserSync.stream());
});

// Compile Javascript, using include based on sprockets
gulp.task('js', function() {
	console.log("-- gulp is running task 'scripts'");

	gulp.src("src/scripts/app.js")
	.pipe(include({
		extensions: "js",
		hardFail: true,
		includePaths: [
			__dirname + "/node_modules/bootstrap/dist/js",
			__dirname + "/node_modules/jquery/dist",
			__dirname + "/node_modules/tether/dist/js"
		]
	}))
	.on('error', console.log)
	.pipe(rename("app.min.js"))
	// .pipe(uglify())
	.pipe(gulp.dest("src/js"));
});

gulp.task('default', ['serve']);

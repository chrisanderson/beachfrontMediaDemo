var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');

gulp.task('js-debug', function()
{
	return gulp.src('../src/client/js/*js')
		//.pipe(browserify())
		//.pipe(uglify())
		.pipe(gulp.dest('../js'));
});

gulp.task('js-release', function()
{
	return gulp.src('../src/client/js/*js')
		//.pipe(browserify())
		.pipe(uglify())
		.pipe(stripDebug())
		.pipe(gulp.dest('../js'));
});

gulp.task('serve', function()
{
	browserSync.init({
		proxy:'beachfrontmedia',
		open:false
	});

  //leaving the code prepped for debug for now
	gulp.watch("../src/client/js/*.js", ['js-debug']);
	//gulp.watch("../src/client/js/*.js", ['js-release']);

	gulp.watch("../*.html").on('change', browserSync.reload);
	gulp.watch("../js/*.js").on('change', browserSync.reload);
	gulp.watch("../css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
var gulp = require('gulp'),
    less = require('gulp-less'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    del = require('del'),
    rjs = require('gulp-r'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    karma = require('karma'),
    mainBowerFiles = require('main-bower-files');

var paths = {
    src: './src',
    build: './www'
}

gulp.task('bower', function (done) {
    gulp.src(mainBowerFiles())
        .pipe(gulp.dest(paths.src + '/js/vendor'))
    .pipe(gulp.dest(paths.build + '/js/vendor'));
});
gulp.task('jshint', function (done) {
    return gulp.src(paths.src + '/js/*.js')
        .pipe(jshint())
        .pipe(gulp.dest(paths.build + '/js/'));

});
gulp.task('html', function (done) {
    return gulp.src(paths.src + '/*.html')
        .pipe(gulp.dest(paths.build))
        .pipe(connect.reload());

});
gulp.task('images', function (done) {
    return gulp.src(paths.src + '/img/**/*')
        .pipe(gulp.dest(paths.build + '/img'));

});
gulp.task('uglify', function (done) {
    return gulp.src(paths.src + '/js/**/*.js')
        .pipe(size())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({"extname":".min.js"}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.build + '/js'))
        .pipe(size())
        .pipe(connect.reload());
});

gulp.task('rjs', function (done) {
    return gulp.src(paths.src + '/*.html')
        .pipe(gulp.dest(paths.build));

});
gulp.task('less', function (done) {
    return gulp.src(paths.src + '/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.build + '/css'))
        .pipe(connect.reload());

});

gulp.task('connect', function () {
    connect.server({
        root: 'www',
        livereload: true
    });
});

gulp.task('clean', function (done) {

});

gulp.task('test', function (done) {

});


gulp.task('build', ['less', 'uglify', 'html']);

gulp.task('watch',['connect'], function () {
    gulp.watch([__dirname + '/src/js/**/*.js'], ['uglify']);
    gulp.watch([__dirname + '/src/**/*.html'], ['html']);
    gulp.watch([__dirname + '/src/less/*.less'], ['less']);
});

gulp.task('default', ['clean', 'build', 'connect','watch']);
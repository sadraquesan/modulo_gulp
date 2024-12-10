const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

//comprimindo imagens
function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}
//comprimindo arquivos js
function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
                    //pega todos os arquivos .css que esta dentro da pasta source/styles
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        //manda os arquivos para a pasta /build/styles
        .pipe(gulp.dest('./buid/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("executando via Gulp");
        callback();
    }, 2000);
}

function dizOi(callback) {
    setTimeout(function() {
        console.log("ola Gulp");
        dizTchau();
        callback();
    }, 1000);
}

function dizTchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;

exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
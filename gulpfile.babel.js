import gulp from 'gulp'
import gulpPug from 'gulp-pug'
import del from 'del'
import ws from 'gulp-webserver'
import image from 'gulp-image'
import autoPreFixer from 'gulp-autoprefixer'
import csso from 'gulp-csso'

const sass = require('gulp-sass')(require('sass'));

const routes = {
    pug:{
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    },
    img:{
        src: "src/image/*",
        dest: "build/img"
    },
    sass:{
        watch: "src/scss/**/*.scss",
        src: "src/scss/style.scss",
        dest: "build/css"
    }
}

const pug = () => {
    return gulp.src(routes.pug.src)
        .pipe(gulpPug())
        .pipe(gulp.dest(routes.pug.dest))
}

const img = () => {
    return gulp.src(routes.img.src)
        .pipe(image())
        .pipe(gulp.dest(routes.img.dest))
}
const styles = () => {
    return gulp.src(routes.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPreFixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(csso())
        .pipe(gulp.dest(routes.sass.dest))
}

const clean = () => del(["build"])

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open: true}))

const watch = () => {
    gulp.watch(routes.pug.watch, pug)
    gulp.watch(routes.sass.watch, styles)
}

const prepare = gulp.series([clean,img])

const assets = gulp.series([pug,styles])

const postDev = gulp.parallel([webserver, watch])

export const dev = gulp.series([prepare,assets,postDev])
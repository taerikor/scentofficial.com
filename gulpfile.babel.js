import gulp from 'gulp'
import gulpPug from 'gulp-pug'
import del from 'del'
import ws from 'gulp-webserver'
import image from 'gulp-image'
const routes = {
    pug:{
        watch: "src/**/*.pug",
        src: "src/*.pug",
        dest: "build"
    },
    img:{
        src: "src/image/*",
        dest: "build/img"
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

const clean = () => del(["build"])

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open: true}))

const watch = () => gulp.watch(routes.pug.watch, pug)

const prepare = gulp.series([clean,img])

const assets = gulp.series([pug])

const postDev = gulp.parallel([webserver, watch])

export const dev = gulp.series([prepare,assets,postDev])
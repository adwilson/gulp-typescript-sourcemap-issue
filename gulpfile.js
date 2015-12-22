
const gulp = require("gulp");
const typescript = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

gulp.task("works", () => {
    return gulp.src(["./FolderAll/first.ts", "./FolderAll/second.ts"])
        .pipe(sourcemaps.init())
        .pipe(typescript({ out: "works.js" }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./"));
})

gulp.task("doesntwork", () => {
    return gulp.src(["./Folder1/*.ts", "./Folder2/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(typescript({ out: "doesntwork.js" }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./"));
})
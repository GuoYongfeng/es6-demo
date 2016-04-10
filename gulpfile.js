var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
// 阻止 gulp 插件发生错误导致进程退出
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

// reload 方法引用
var reload = browserSync.reload;

// babel编译源文件
gulp.task('babel', function() {
  return gulp.src(['**/*.js', '!node_modules', '!gulpfile.js'])
    // .pipe(plumber())
    .pipe(babel())
    // .pipe(notify("<%= file.relative %>文件出现错误：<%= file.message %>"))
    .pipe(rename(function (path) {
      path.dirname += "";
      path.basename += ".compiled";
      path.extname = ".js";
      console.log(path)
      return path;
    }))
    .pipe(gulp.dest("./"));
});

// 浏览器重载 JS
gulp.task('js-watch', ['babel'], reload);

// 起一个静态服务器
gulp.task('serve', ['babel'], function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  // 监听文件变化
  gulp.watch("**/*.js", ['js-watch']);
  gulp.watch("**/*.html").on('change', reload);
});

gulp.task('default', ['serve', 'babel']);

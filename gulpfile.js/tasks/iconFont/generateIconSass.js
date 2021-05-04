var gulp         = require('gulp')
var render       = require('gulp-nunjucks-render')
var rename       = require('gulp-rename')
var handleErrors = require('../../lib/handleErrors')
var gutil        = require('gulp-util')
var data         = require('gulp-data')

module.exports = function(config) {
  return function(glyphs, options) {
    gutil.log(gutil.colors.blue('Generating ' + config.sassDest + '/' + config.sassOutputName))
    render.nunjucks.configure(config.nunjucks, { watch: false })

    return gulp.src(config.template)
      .pipe(data({
        icons: glyphs.map(function(glyph) {
          gutil.log(gutil.colors.green('+ adding ' + glyph.name + ' glyph'))
          return {
            name: glyph.name,
            code: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
          }
        }),

        fontName: config.options.fontName,
        fontPath: config.fontPath,
        className: config.className,
        comment: 'Icons'
      }))
      .pipe(render({
        path: config.template
      }))
    .on('error', handleErrors)
    .pipe(rename(config.sassOutputName))
    .pipe(gulp.dest(config.sassDest))
  }
}

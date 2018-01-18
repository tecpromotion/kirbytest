/**
 * Tthe Watch Tasks for SASS,
 * JADE, JS and activate BrowserSync
 */

import kc from '../../config.json'
import gulp from 'gulp'
import watch from 'gulp-watch'
import templateFiles from '../lib/templateFiles'
import contentFiles from '../lib/contentFiles'
import path from 'path'

const watchTask = () => {
  // Watch the SCSS Folder for changes - compile CSS
  gulp.watch([kc.src.style + '**/**/*.scss', kc.src.style + '**/**/*.sass'], ['compiler:css'])

  // Watch the Structure
  gulp.watch([templateFiles()], ['compiler:html'])
  gulp.watch([contentFiles()], ['copy:kirbycontent'])
}

gulp.task('watch', watchTask)
module.exports = watchTask

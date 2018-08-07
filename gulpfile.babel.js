'use strict';

/**
 * General
 * -----------------------------------------------------------------------------
 */

import gulp 						from 'gulp';
import folders					from './tasks/folders';

/**
 * Require modules
 * -----------------------------------------------------------------------------
 */

import requireDir from 'require-dir';

requireDir('./tasks');

import {server, reload, serve} from './tasks/browserSync';

// Your "watch" task
gulp.task(
	'watch', 
	gulp.parallel(
		serve,
		'sass',
		'scripts',
		'concat',
		'image',
		'fonts',
		'sass:watch',
		'scripts:watch',
		'concat:watch',
		'image:watch',
		'fonts:watch'
	)
);

// Build
gulp.task(
	'build',
	gulp.series(
		'clean',
		gulp.parallel(
			'sass',
			'scripts',
			'image',
			'fonts'
		)
	)
);

gulp.task('default', gulp.series('watch'));
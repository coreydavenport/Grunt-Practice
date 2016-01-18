module.exports = function (grunt) {
	// Project configuration. 
grunt.initConfig({
  concat: { 
    js: {
      src: ['js/1.js', 'js/2.js'],
      dest: 'build/js/scripts.js',
    },
    css: {
      src: ['styles/red.css', 'styles/blue.css'],
      dest: 'build/css/stylesyo.css',
    },
  },
  watch: {
	  scripts: {
	    files: ['**/*.js'],
	    tasks: ['jshint'],
	    options: {
	      spawn: false,
	    },
  },
},
});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
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
	  js: {
	    files: ['js/**/*.js'],
	    tasks: ['concat:js'],
	    
  },
	  css: {
		    files: ['styles/**/*.css'],
		    tasks: ['concat:css'],
		    
	  },
},
});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'watch']);
};
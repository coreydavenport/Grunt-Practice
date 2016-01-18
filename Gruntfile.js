module.exports = function (grunt) {
	// Project configuration. 
grunt.initConfig({
  concat: { 
    dist: {
      src: ['js/1.js', 'js/2.js'],
      dest: 'build/js/scripts.js',
    },
  },
});
	grunt.loadNpmTasks('grunt-contrib-concat');

};
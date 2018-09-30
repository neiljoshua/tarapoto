module.exports = function(grunt) {
grunt.initConfig({
  compass: {
    dist: {
      options: {
        sassDir: 'src/sass/',
        specify: 'src/sass/styles.scss',
        cssDir: 'dist/css/'
      }
    }
  },

  concat: {
    dist: {
      src: ['src/css/plugins/dropkick.css'],
      dest: 'dist/css/plugins.css',
    },
  },

  uglify: {
    my_target: {
      files: {
        'dist/js/tarapoto.min.js': ['src/js/tarapoto.js'],
        'dist/js/jquery.min.js':['src/js/vendor/jquery.js'],
        'dist/js/vendor.min.js': ['src/js/vendor/dropkick.2.1.9.min.js']
      }
    }
  },

  watch: {
	  css: {
	    files: ['src/sass/*.scss'],
	    tasks: ['compass']
	  },
	  js: {
	  	files: ['src/js/*.js'],
	  	tasks: ['uglify']
	  }
	},

});

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', [ 'concat', 'uglify', 'watch' ]);
grunt.registerTask('dev', ['compass']);
}

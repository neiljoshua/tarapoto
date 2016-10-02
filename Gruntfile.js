module.exports = function(grunt) {
grunt.initConfig({
  compass: {
    dist: {
      options: {
        sassDir: 'src/sass/',
        specify: 'src/sass/tarapoto.scss',
        cssDir: 'src/css'
      }
    }
  },

  watch: {
  css: {
    files: ['src/sass/*.scss'],
    tasks: ['compass']
  }
}

});

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['watch']);
grunt.registerTask('dev', ['compass']);
}
module.exports = function(grunt) {
grunt.initConfig({
  compass: {
    dist: {
      options: {
        sassDir: 'sass',
        cssDir: 'css'
      }
    }
  },

  watch: {
  css: {
    files: ['sass/*.scss'],
    tasks: ['compass']
  }
}

});

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['watch']);
grunt.registerTask('dev', ['compass']);
}
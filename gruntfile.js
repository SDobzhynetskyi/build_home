module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['css/*.scss'],
        dest: 'css/build/main_style_file.scss',
      },
    },
    sass: {
      dist: {
        files: [{
          src: ['css/build/main_style_file.scss'],
          dest: 'css/main.css',
        }]
      }
    },
    watch: {
        scss: {
            files: ['css/*.scss'],
            tasks: ['concat','sass'],
        },
      },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','sass','watch']);

};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'js/global.js',
        dest: 'js/build/global.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/build/global.css': 'css/global.scss'
        }
      }
    },

    imagemin: {
       dynamic: {
         files: [{
           expand: true,
           cwd: 'images/',
           src: ['**/*.{png,jpg,gif}'],
           dest: 'images/'
         }]
      }
    },

    watch: {

      css: {
        files: ['CSS/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },

      scripts: {
          files: ['js/*.js'],
          tasks: ['uglify'],
          options: {
              spawn: false,
        },
      },

      images: {
      files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
      tasks: ['imagemin'],
      options: {
        spawn: false,
      },
    },
}
        
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'imagemin']);

};
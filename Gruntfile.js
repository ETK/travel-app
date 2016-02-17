module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  connect: {
    server: {
      options: {
        port: 9001,
        base: '.',
        keepalive: true,
        open: {
                target: 'http://localhost:9001', // target url to open
                appName: 'chrome' // name of the app that opens, ie: open, start, xdg-open
                
              }
      }
    }
  },  
  eslint: {
    target: ['scripts/**/*.js']
  },  
  wiredep: {
    task: {
      // Point to the files that should be updated when
      // you run `grunt wiredep`
      src: ['index.html']
      }
  },
  csslint: {
    strict: {
      options: {
        import: 2
      },
      src: ['styles/**/*.css']
    }
  },
  concurrent: {
        check: ['eslint','csslint']
  },
  karma: {
    unit: {
      configFile: 'karma.conf.js'
    }
  },
  });

  // Load all tasks
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('lint', ['check']);
  grunt.registerTask('test', ['karma']);

};
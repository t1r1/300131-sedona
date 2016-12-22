"use strict";

module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    copy: {
      build: {
        files: [{
          expand: true,
          src: [
          "img/**", "*.html", "fonts/**", "js/**"],
        dest: "build"
        }]
      }
    },
    sass: {
      style: {
        files: {
          "build/css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
             require("autoprefixer")({browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]})
          ]
        },
        src:"build/css/*.css"
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    svgstore: {
      options: {
        svg: {
          style: "display: none"
        }
      },
      symbols: {
        files: {
          "build/img/symbols.svg":["img/*.svg"]
        }
      }
    },

    svgmin: {
      symbols: {
        files: [{
          expand: true,
          src: ["img/*.svg"]
        }]
      }
    },

    css_mqpacker: {
      main: {
        options: {
          sort: true
        },
  
        expand: true,
        cwd: 'css/',
        src: '*.css',
        dest: 'build/css/'
      }
    },

    browserSync: {
       server: {
        bsFiles: {
         src: [
           "*.html",
           "css/*.css"
         ]
        },
        options: {
          server: ".",
          watchTask: true,
           notify: false,
           open: true,
           cors: true,
           ui: false
        }
       }
     },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
       style: {
         files: ["sass/**/*.{scss,sass}"],
         tasks: ["sass", "postcss"]
       }
     } 

  });
  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("symbols", ["svgmin", "svgstore"]);
  grunt.registerTask("build",["copy", "sass", "postcss", "csso", "imagemin", "symbols", "css_mqpacker"]);

};

// "use strict";

// module.exports = function(grunt) {
//   grunt.loadNpmTasks("grunt-browser-sync");
//   grunt.loadNpmTasks("grunt-contrib-watch");
//   grunt.loadNpmTasks("grunt-postcss");
//   grunt.loadNpmTasks("grunt-sass");

//   grunt.initConfig({
//     sass: {
//       style: {
//         files: {
//           "css/style.css": "sass/style.scss"
//         }
//       }
//     },

//     postcss: {
//       style: {
//         options: {
//           processors: [
//             require("autoprefixer")({browsers: [
//               "last 2 versions"
//             ]})
//           ]
//         },
//         src: "css/*.css"
//       }
//     },

//     
//   });

//   grunt.registerTask("serve", ["browserSync", "watch"]);
// };
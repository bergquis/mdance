module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            vendor: {
                src: [
                    'bower_components/marked/lib/marked.js',
                    'bower_components/ace-builds/src-noconflict/ace.js',
                    'bower_components/ace-builds/src-noconflict/theme-twilight.js',
                    'bower_components/ace-builds/src-noconflict/mode-markdown.js'
                ],
                dest: 'build/js/vendor.js'
            },
            css: {
                src: [
                    'bower_components/foundation/css/normalize.css',
                    'bower_components/foundation/css/foundation.css',
                    'styles.css'
                ],
                dest: 'build/css/styles.css'
            }
        },
        copy: {
            js: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: [
                    'bower_components/foundation/js/vendor/modernizr.js',
                    'app.js'
                ],
                dest: 'build/js/'
            },
            font: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: [
                    'bower_components/font-awesome/fonts/*',
                ],
                dest: 'build/fonts/'
            },
            html: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: ['index.html'],
                dest: 'build/'
            }
        },
        uglify: {
            options: {
                mangle: false,
                compress: true
            },
            vendor: {
                files: {
                    'build/js/vendor.js': ['build/js/vendor.js']
                }
            }
        },
        watch: {
            html: {
                files: ['index.html'],
                tasks: ['copy:html']
            },
            css: {
                files: ['styles.css'],
                tasks: ['concat:css']
            },
            js: {
                files: ['app.js'],
                tasks: ['copy:js']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'copy']);
    grunt.registerTask('prod', ['default', 'uglify']);
};

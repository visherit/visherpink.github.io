module.exports = function(grunt){
   grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        sass: {
            style: {
                files: {
                    "css/style.css": "sass/style.scss"
                }
            }
            
        },
        watch: {
    sass: {
        files: ['sass/*.scss'],
        tasks: ['sass']
    }
}
    });
};
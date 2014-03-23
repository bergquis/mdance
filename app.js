var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/markdown");

// update preview based on editor content
var render = function(){
    document.getElementById('preview').innerHTML = marked(editor.getValue());
}

editor.on('change', function(e){
    render();
});

render();

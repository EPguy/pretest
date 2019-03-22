var file = document.getElementById("upload_file");
var text = document.getElementById("upload_name");

file.onchange = () => {
    var fileName = file.value.split('/').pop().split('\\').pop();
    text.value = fileName;
}
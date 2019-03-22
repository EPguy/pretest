var WindowText = document.getElementById("window-text");
var button = document.getElementsByClassName("btn");
var EqualButton = document.getElementById('equal');
var ACButton = document.getElementById("AC");
var CEButton = document.getElementById("CE");

function addNum(){
    WindowText.value += this.firstChild.nodeValue;
}
function Result(){
    var input = WindowText.value;
    var result = eval('('+input+')' );
    WindowText.value = result;
}
function AC() {
    WindowText.value = "";
}
function CE() {
    WindowText.value = WindowText.value.substring(0, WindowText.value.length-1);
}
for(var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', addNum)
}
CEButton.removeEventListener('click', addNum);
EqualButton.removeEventListener('click', addNum);
ACButton.removeEventListener('click',addNum);
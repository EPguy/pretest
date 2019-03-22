var index = 0,
    image = document.getElementsByClassName("item");
    firstButton = document.getElementById("first");
    secondButton = document.getElementById("second");
    thridButton = document.getElementById("third");

var slide = function(){
    for(var i = 0; i < image.length; i++) {
        image[i].style.opacity = 0;
    }
    image[index].style.opacity = 1;

    if(index < image.length -1) {
        index++;
    } else {
        index = 0;
    }
}

firstButton.addEventListener('click', () =>{
    index = 0;
    slide();
});
secondButton.addEventListener('click', () =>{
    index = 1;
    slide();
});
thridButton.addEventListener('click', () =>{
    index = 2;
    slide();
});

setInterval(slide, 4000);
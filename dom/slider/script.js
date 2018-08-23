var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;


function nextSlide(currentSlide){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var but1 = document.getElementById("but1");
var but2 = document.getElementById("but2");
but2.addEventListener("click", function(event){
    nextSlide();
});

but1.addEventListener("click", function(event){
    previousSlide();
});

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

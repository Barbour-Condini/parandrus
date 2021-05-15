var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n<=slides.length) {
        showSlides(slideIndex += n);
    } else {
        showSlides(slideIndex = 1);
    }
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    // make the nav buttons visible when a thumbnail is clicked:
    var navbuttons = document.getElementById('nav-buttons');
    navbuttons.style.display = 'block';
    // create a gap btwn the bottom of the main slide and the thumbnails:
    // (change bottom margin from 10px to 100px)
    var captionContainer = document.getElementById('caption-container');
    captionContainer.style.margin = '2px auto 100px auto';
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
  
    if (n > slides.length) {slideIndex = 1} //this gets the slideshow to loop right
    if (n < 1) {slideIndex = slides.length} // gets the slideshow to loop left
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;

}

window.scrollTo(0,0);
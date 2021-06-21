const buttonScroll = document.querySelector(".buttonScroll");
const callToAction = document.querySelector(".callToAction");

buttonScroll.addEventListener('click',()=>{
    window.scrollTo(300, 800);
    
});

//Get the button
var mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
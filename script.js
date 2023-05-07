burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')

list = document.querySelector('.list')
navBtn= document.querySelector('.btn')


burger.addEventListener('click', ()=>{
    list.classList.toggle('v-class');
     navBtn.classList.toggle('v-class');
     navBar.classList.toggle('h-nav');

})
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  function revealx() {
    var reveals = document.querySelectorAll(".revealx");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowWidth = window.innerWidth;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowWidth - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealx);
  
  function reveal_x() {
    var reveals = document.querySelectorAll(".reveal-x");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowWidth = window.innerWidth;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowWidth - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal_x);
  

const navSlide = () =>{
    const options = document.querySelector('.options');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav


    options.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index) =>{
        
            if(link.style.animation){
                link.style.animation='';
    
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`;
            }
            
         });
         //X animation
         options.classList.toggle('toggle');
    });
}

const accordion = ()=>{
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

}


const app = ()=>{
    navSlide();
    accordion()
}
app();
//sticky navbar
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


//Scroll-up Button

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350?scrollUp.classList.add('show-scroll')
                 :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "UI/UX Designer", "Web Developer", "Graphics Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    


let navbar = document.querySelector('.header .navbar')
let menuBtn = document.querySelector('#menu-btn')
menuBtn.onclick = () =>{
	menuBtn.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
 var swiper = new Swiper(".home-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });
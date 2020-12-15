var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 10,
    loop:true,
    navigation: {
        nextEl: '.arrow',
      },
      breakpoints: {
        540: {
          slidesPerView: 3
        }
      }
});

var menuButton = document.querySelector('.menu-button');
var Menu = document.querySelector('.header');
menuButton.addEventListener('click', function() {
  Menu.classList.toggle ('header-active');
  menuButton.classList.toggle('menu-button-active')
  // alert("НАЖАТЕ")
})
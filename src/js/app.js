
$('.slider-box').slick({
    dots: false,
    // infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="left-arrow"><img src="img/left-arrow.svg" alt="arrow"></button>',
    nextArrow:'<button type="button" class="right-arrow"><img src="img/right-arrow.svg" alt="arrow"></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
});

// mobile menu

let burger = document.querySelector(".burger")
let list = document.querySelector(".list")
let body = document.body
burger.addEventListener("click", function(){
    list.classList.toggle("open")
    body.classList.toggle("scroll")
})
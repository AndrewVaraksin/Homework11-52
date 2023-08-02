$(function () {

  var mixer = mixitup('.directions__list');;

  $('.directions__filter-btn').on('click', function(){
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable:false,
    waitForAnimate:false,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          draggable:true,
          dots: true,
        },
      },
    ]
  })
  $('.team__slider-prev').on('click', function (e) {
    // убрали дефолтное поведение с перемещение к началу страницы
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    // убрали дефолтное поведение с перемещение к началу страницы
    e.preventDefault()
    $('.team__slider').slick('slickNext')
    
  })


  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    // переносим точки в др. контейнер, иначе съезжали стрелки
    appendDots: $('.testimonials__dots'),
    waitForAnimate:false,

  })
  $('.testimonials-prev').on('click', function (e) {
    // убрали дефолтное поведение с перемещение к началу страницы
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials-next').on('click', function (e) {
    // убрали дефолтное поведение с перемещение к началу страницы
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
    
  })


// Рабочий 1 способ
  // $('.program__acc-link').on('click',function (e){
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   // обращаемся именно к ребенку родителя к которому обращались до этого
  //   $(this).children('.program__acc-text').slideToggle()
  // })

  // Рабочий 2 способ
  $('.program__acc-link').on('click',function (e){
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')){
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    }else{
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
  })

  $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (event) {
    event.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top - 50
    $('body,html').animate({scrollTop: top}, 800)
    })
    

// через опред.интервал браузер выполняет внесенные действия
    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
          $('.burger').addClass('burger--follow')
        } else {
          $('.burger').removeClass('burger--follow')
        }
    }, 0);
    // Добавили .overlay чтобы при открытом меня если нажать на экран, то сам overlay и меня уберутся
  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

})

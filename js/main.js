jQuery(function () {
//   // $(".rateyo").rateYo().on("rateyo.change", function (e, data) {
//   //   var rating = data.rating;
//   //   $(this).parent().find('.score').text('score :'+ $(this).attr('data-rateyo-score'));
//   //   $(this).parent().find('.result').text('rating :'+ rating);
//   //  });
  
// НЕ РАБОТАЛ ПОДКЛЮЧЕНИЕ ПОТОМУ ЧТО НЕ ТАК СКАЧАЛ JQURY нужно было crtl+s когда скачиваешь на офф сайте и вставить в проект и этот файл подключать


  // let mixer = mixitup('.directions__list');
  var mixer;

  window.addEventListener('load', function() {
    mixer = mixitup('.directions__list');
  });

  


  jQuery('.directions__button').on('click', function () {
   $('.directions__button').removeClass('directions__button-item--active')
   $(this).addClass('directions__button-item--active')
  });
  
  

  
  // const swiper = new Swiper ( document.getElementById ('.team__slider'), {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,

  //   swiper-button-next: {
  //     text-rendering: auto,
  //   },

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });


  var swiper = new Swiper(".mySwiper", {
       slidesPerView: 4,
       loop: true,
       spaceBetween: 30,
       centeredSlides: false, 
   centeredSlidesBounds: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },

       breakpoints: {
    1300: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 2,
    },
     300: {
      slidesPerView: 1,
    },
    
  }

     });

     const next = document.querySelector('#next');
     const prev = document.querySelector('#prev');

     prev.addEventListener('click', function(){
      console.log('клик по стрелке назад')
      swiper.slidePrev()
     });

     next.addEventListener('click', function(){
      console.log('клик по стрелке вперед')
      swiper.slideNext()
     });




     var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 1,
       centeredSlides: true,
      spaceBetween: 90,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
       

      },

      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
    });

      const next2 = document.querySelector('#next2');
      const prev2 = document.querySelector('#prev2');

      prev2.addEventListener('click', function(){
       console.log('клик по стрелке назад')
       swiper2.slidePrev()
      });

      next2.addEventListener('click', function(){
       console.log('клик по стрелке вперед')
       swiper2.slideNext()
      });



      $('.accordion-header').on('click', function(e){
        e.preventDefault()
        $(this).toggleClass('.accordion-link--active')
      })


        const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });



        document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
    anchor.addEventListener('click', function (e) {  
        e.preventDefault();  
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });  
    });  
});  


 // ЭТО ПРИ НАЖАТИИ ВЫЛАЗИТ БУРГЕР МЕНЮ. ПРИ НАЖАТИИ ПОЯВЕЛСЯТ HEADER__TOP--OPEN
  $('.burger, .overlay').on('click', function(e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open'),
    $('.overlay').toggleClass('overlay--show')
  })
// и так же сделали для оверлея, просто добавили его к бургеру в начале, и при нажатии оверлай пропадает
  

  // $(window).on('scroll', function () {
  //   if ($(window).scrollTop() > 0) {
  //   $('.burger').addClass('burger--follow')
  // } else {
  //   $('.burger').removeClass('burger--follow')
  // }
  // })

// ЭТО SETINTEVAL ДЕЛАЕТ ПРОВЕРКУ КАЖДЫЕ 0 СЕК(ВСЕГДА ТИПА)  И СМОТРИТ, ГДЕ \
// НАХОДИТСЯ БУРГЕР, ЕСЛИ ОН <0, ТО НЕ ПОЯВЛЯЕТСЯ КРУГ, > 0 ПОЯВЛЯЕТСЯ И ТД
// И ТУТ СДЕЛАНО, ЕСЛИ МЕНЬШЕ 0 ТО ПРОСТО КЛАСС УДАЛЕТСЯ, А ЕСЛИ БОЛЬШЕ 
// ТО ДОБАВЛЯЕТСЯ И ПОЯВЕЛЯЕТСЯ КРУЖОК
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false ) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
  }, 0)

  
  
});


  
// document.addEventListener('DOMContentLoaded', function() {
//   var swiper = new Swiper('.swiper-container', {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//   });<script src="/slick/slick.min.js"></script>

  
// });

  













  
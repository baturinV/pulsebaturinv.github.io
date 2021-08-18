$(document).ready(function () {
   

   //слайдер

   $('.carousel__inner').slick({
      speed: 1000,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icon/arrowleft.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icon/arrowright.png"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
               arrows: false
            }
         }
      ]
   });

   //табы

   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
   });

   //перелистывание окон внутри карточки
   //создаем функцию toggleSlide с переменной item
   //перебераем элементы item и запоминаем его порядковый номер
   //при нажатии на элемент item запускаем функцию (е)
   //которая отменяет стандартное поведение браузера
   //и добавляет класс активности элементу (только элементу с порядковым номером (і))
   //.catalog-item__general
   //.catalog-item__details

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__general').eq(i).toggleClass('catalog-item__general_active');
            $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
         })
      })
   };
   toggleSlide('.catalog-item__link');
   toggleSlide('.details__link');

   //модальные окна
   //открываем модельное окно #consultation и .overlay
   //при клике на кнопку data-modal=consultation

   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn(500);
   });

   //закрываем любое из модальных окон при нажатии крестик (.modal__close)

   $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut(500);
   });

   //при нажатии на кнопку "купить" (.catalog-item__btn)
   //подставляем название товара из кароточки товара (.catalog-item__title)
   //в модальное окно #order, строку .modal__subtitle и открываем #order

   $('.catalog-item__btn').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
         $('.overlay, #order').fadeIn(500);
      })
   });

});
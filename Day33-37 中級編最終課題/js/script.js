
jQuery('.drawer-icon').on('click', function (e) {
   e.preventDefault();

   jQuery('.drawer-icon').toggleClass('is-active');
   jQuery('.drawer-content').toggleClass('is-active');
   jQuery('.drawer-background').toggleClass('is-active');

   return false;
});

/*Page-top*/
$(function () {
   var pagetop = $('#to-top');
   pagetop.hide();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         pagetop.fadeIn();
      } else {
         pagetop.fadeOut();
      }
   });

   pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
   });

});

/*Swiper*/
const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
   spaceBetween: 24,
   width: 274,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      768: {
         width: 400,
         spaceBetween: 40,
      }
   }
});

/*Slide toggle*/
jQuery('.qa_box_q').on('click', function () {
   jQuery(this).next().slideToggle();
   jQuery(this).children('.qa_box_icon').toggleClass('is-open');
})

/*Smoothscroll*/
$(function () {
   // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
   $('a[href^="#"]').click(function () {
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      var adjust = 0;
      // スクロールの速度（ミリ秒）
      var speed = 400;
      // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
      var href = $(this).attr("href");
      // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
      var position = target.offset().top + adjust;
      // スムーススクロール linear（等速） or swing（変速）
      $('body,html').animate(
         {
            scrollTop: position - $('#js-header').outerHeight()
         }, speed, 'swing');
      return false;
   });

   /*Wow-js*/
   new WOW().init();

   /* Google Form*/
   let $form = $('#js-form')
   $form.submit(function (e) {
      $.ajax({
         url: $form.attr('action'),
         data: $form.serialize(),
         type: "POST",
         dataType: "xml",
         statusCode: {
            0: function () {
               //送信に成功したときの処理
               $form.slideUp()
               $('#js-success').slideDown()
            },
            200: function () {
               //送信に失敗したときの処理
               $form.slideUp()
               $('#js-error').slideDown()
            }
         }
      });

      return false;
   });

   // formの入力確認
   let $submit = $('#js-submit')
   $('#js-form input, #js-form textarea').on('change', function () {
      if (
         $('#js-form input[type="text"] ').val() !== "" &&
         $('#js-form input[type="email"] ').val() !== "" &&
         $('#js-form input[name="entry.1203779331"] ').prop('checked') === true
      ) {
         //全て入力された時
         $submit.prop('disabled', false)
         $submit.addClass('-active')
      } else {
         //入力されていない時
         $submit.prop('disabled', true)
         $submit.removeClass('-active')
      }
   })
});



















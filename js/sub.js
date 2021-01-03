$(function () {

  // ナビメニュークリック時のスムーススクロール
  // $('.header__link').click(function () {
  //   var href = $(this).attr('href');
  //   var target = $(href == '#' || href == "" ? 'html' : href);
  //   var headerHeight = $('.header').height() + 80;
  //   var position = target.offset().top - headerHeight;
  //   $('html, body').animate({ scrollTop: position }, 1000);
  //   return false;
  // });

  // ナビメニュークリック時のスムーススクロール
  // $('.sp--nav__link').click(function () {
  //   var href = $(this).attr('href');
  //   var target = $(href == '#' || href == "" ? 'html' : href);
  //   var headerHeight = $('.header').height() + 71;
  //   var position = target.offset().top - headerHeight;
  //   $('html, body').animate({ scrollTop: position }, 1000);
  //   return false;
  // });

  // お問い合わせボタンクリック時のスムーススクロール
  // $('.common--button').click(function () {
  //   var href = $(this).attr('href');
  //   var target = $(href == '#' || href == "" ? 'html' : href);
  //   var headerHeight = $('.header').height() + 71;
  //   var position = target.offset().top - headerHeight;
  //   $('html, body').animate({ scrollTop: position }, 1000);
  //   return false;
  // });

  // const $submitBtn = $('#js-submit');
  // $('#form input, #form textarea').on('change', function () {
  //   if (
  //     $('#form input[type="text"]').val() !== "" &&
  //     $('#form input[type="email"]').val() !== "" &&
  //     $('#form textarea').val() !== "" &&
  //     $('#form #privacyCheck').prop('checked') === true
  //   ) {
  //     $submitBtn.prop('disabled', false);

  //   } else {
  //     $submitBtn.prop('disabled', true);
  //   }
  // });

  // $('#button').on('click', function () {
  //   $('html, body').addClass('scroll-prevent');
  //   $('.sp--nav').addClass('navopen');
  // });

  // $('.sp--nav__link').on('click', function () {
  //   $('html, body').removeClass('scroll-prevent');
  //   $('.sp--nav').removeClass('navopen');
  // });



// モーダル
  $('.header__button').on('click', function () {
    $('.modal').fadeIn();
    return false;
});
  $('.modal__icon, .modal__wrapper').on('click', function () {
    $('.modal').fadeOut();
    return false;
});

    // ドロワー
    $('.header__spButton').on('click', function () {
      $('.drawer').fadeIn();
      // $('.header').css('position', 'static');
      return false;
    });
    $('.drawer__icon').on('click', function () {
      $('.drawer').fadeOut();
      // $('.header').css('position', 'fixed');
      return false;
    });


});
$(function () {

  // アコーディオン
  // $('.faq__acordion-js').on('click', function () {

  //   if ($(this).next('.acordion-js').hasClass('open')) {
  //     // 全ての項目をclose
  //     $('.acordion-js').removeClass('open');
  //     $('.acordion-js').slideUp(300);
  //   } else {
  //     // 全ての項目をclose
  //     $('.acordion-js').removeClass('open');
  //     $('.acordion-js').slideUp(300);
  //     // その項目だけをopen
  //     $(this).next('.acordion-js').addClass('open');
  //     $(this).next('.acordion-js').slideDown(300);
  //   }
  // });

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

  // HTMLフォームのgoogleフォーム連携
  // $('#form').submit(function (event) {
  //   var formData = $('#form').serialize();
  //   $.ajax({
  //     url: "https://docs.google.com/forms/hogehoge",
  //     data: formData,
  //     type: "POST",
  //     dataType: "xml",
  //     statusCode: {
  //       0: function () {
  //         $(".end-message").slideDown();
  //         $(".contact__button").fadeOut();
  //         window.location.href = "thanks.html";
  //       },
  //       200: function () {
  //         $(".false-message").slideDown();
  //       }
  //     }
  //   });
  //   event.preventDefault();
  // });

  // swiper
  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  }
  new Swiper('.swiper-container', swipeOption);

  // モーダル
  $('.header__button').on('click', function () {
    $('.modal').fadeIn();
    return false;
  });
  $('.modal__icon, .modal__wrapper').on('click', function () {
    $('.modal').fadeOut();
    return false;
  });

//★タブクリックでコンテンツ差し替え//
  // ①タブをクリックしたら発動
  $('.info__tab').click(function () {

    // ②クリックされたタブの順番を変数に格納
    var index = $('.info__tab').index(this);

    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.info__tab').removeClass('active');

    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');

    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.info__container').removeClass('show').eq(index).addClass('show');
  });

  //ヘッダーのスクロールイベント//
  $(window).scroll(function () {
    // 特定の要素を超えた
    if ($(window).scrollTop()  > 20) {
      // header__logoのsrc変える
      $('.header__logo').attr('src', 'img/onsen/sub-header-logo.png') 
      // headerのbg変える
      $('.header').css('background-color', '#ffffff') 
      // header__linkの色変える
      $('.header__link').css('color', '#000000') 
    } else {
      // header__logoのsrc変える
      $('.header__logo').attr('src', 'img/top/top-header-logo.png') 
      // headerのbg変える
      $('.header').css('background-color', 'transparent') 
      // header__linkの色変える
      $('.header__link').css('color', '#ffffff') 
    }
  });

    // ドロワー
    $('.header__spButton').on('click', function () {
      $('.drawer').fadeIn();
      return false;
    });
    $('.drawer__icon').on('click', function () {
      $('.drawer').fadeOut();
      return false;
    });
  

  // 画像をフェードスライドさせる
  // $(window).load(function() {
  //   $('.fv').bgSwitcher({
  //     images: ['img/top/mainbg01.png', 'img/top/mainbg02.jpg', 'img/top/mainbg03.jpg'], // 切り替える背景画像を指定
  //     interval: 4000, // 背景画像を切り替える間隔を指定 3000=3秒
  //     loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
  //     shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
  //     effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
  //     duration: 2000, // エフェクトの時間を指定します。
  //     easing: "swing" // エフェクトのイージングをlinear,swingから指定

  //   });
  // });
});
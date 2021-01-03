$(function () {

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
  $('.header__button, .drawer__button').on('click', function () {
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
  
});
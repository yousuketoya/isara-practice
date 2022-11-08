$(function() {
  $('.faq dt').on('click', function() {
    // ここに処理の中身を書く
    $(this).next().slideToggle();
  })

  // 100pxを境にTOPに戻るに戻るボタンの表示・非表示を切り替える
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
});
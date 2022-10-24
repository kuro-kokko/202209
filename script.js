// スクロールボタン制御
$('.scroll-button').on('click', function(){
  var position = $('.table-area').offset().top;
    $('html,body').animate({
      scrollTop: position
    }, 500);
  return false;
});

//開くボタンをクリックしたらモーダルを表示する
$('.modal-open').on('click',function(){	
  $('.modal-container').addClass('active');
  return false;
});

//モーダルの外側をクリックしたらモーダルを閉じる
$(document).on('click',function(e) {
  if(!$(e.target).closest('.modal-body').length) {
    $('.modal-container').removeClass('active');
  }
});
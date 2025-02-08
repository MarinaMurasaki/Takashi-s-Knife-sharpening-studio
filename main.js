$(function(){
    
    $(window).scroll(function(){
      var y = $(this).scrollTop();    
      $(".content1").animate({top: y},0);
      if(y <= 850){
        $(".content1").animate({
            top: y
        },0);  
      }
      else {
        $(".content1").stop(true, true).animate({ top: 800 }, 0);
      }
    });

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();  // 現在のスクロール位置

        // スクロール位置が100px以上ならフォント色を変更
        if (scrollTop > 500) {
          $('.content1').css('color', 'white');
        } else {
          $('.content1').css('color', 'black');
        }
    });

    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      // dots: true,
      arrows: false,
      responsive: [
        {
            breakpoint: 600,  // 600px以下の画面幅で適用
            settings: {
                slidesToShow: 1,  // スライドを1つだけ表示
            }
        }
      ]
	  });

    $(document).ready(function() {
      // 初期状態で要素を200pxの位置に固定
      var initialTop = 200; // 初期位置を200pxに設定
      var $targetElement = $('.content1'); // 固定したい要素
  
      // 初期位置で要素を配置
      $targetElement.css({
          position: 'absolute', // 初期位置で絶対配置
          top: initialTop + 'px'
      });
  
      // スクロール時に要素の色を変更
      $(window).scroll(function() {
          var scrollTop = $(window).scrollTop();
  
          // スクロール位置が500px以上なら色を黒、500px未満なら白に変更
          if (scrollTop > 530) {
              $('.content1 p, .content1 h2').css('color', 'black');
          } else {
              $('.content1 p, .content1 h2').css('color', 'white');
          }
  
          // スクロール位置が200px未満なら、要素を最初の位置（200px）に固定
          if (scrollTop < initialTop) {
              $targetElement.css({
                  position: 'absolute',
                  top: initialTop + 'px'
              });
          
            } 
            // else {
          //     // それ以上スクロールされたら、要素は固定位置に移動
          //     $targetElement.css({
          //         position: 'fixed', // スクロール位置に合わせて固定
          //         top: '0px'
          //     });
          // }
      });
  });
});
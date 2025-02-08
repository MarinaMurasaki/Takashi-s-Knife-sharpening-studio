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
        $(".content1").stop(true, true).animate({ top: 850 }, 0);
      }
    });

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 500) {
          $('.content1').css('color', 'white');
        } else {
          $('.content1').css('color', 'black');
        }
    });

    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
            breakpoint: 600,  
            settings: {
                slidesToShow: 1, 
            }
        }
      ]
	  });

    $(document).ready(function() {
      var initialTop = 200;
      var $targetElement = $('.content1');
  
      $targetElement.css({
          position: 'absolute',
          top: initialTop + 'px'
      });
  
      $(window).scroll(function() {
          var scrollTop = $(window).scrollTop();
  
          if (scrollTop > 530) {
              $('.content1 p, .content1 h2').css('color', 'black');
          } else {
              $('.content1 p, .content1 h2').css('color', 'white');
          }
  
          if (scrollTop < initialTop) {
              $targetElement.css({
                  position: 'absolute',
                  top: initialTop + 'px'
              });
          
            } 
      });
  });
});

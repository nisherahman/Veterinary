$(document).ready(function(){

    // scroll position
    $(window).on('scroll',function(){
      var scrolling = $(this).scrollTop();
  
      // back to top appearance 
      if(scrolling > 100){
        $('.back-to-top').fadeIn();
      }else{
        $('.back-to-top').fadeOut();  
      }
      // navbar class 
      if(scrolling > 150){
        $('nav').addClass('nav-fix');
      }else{
        $('nav').removeClass('nav-fix');
      }
  
    });
  
      // counter up 
      $('.counter').counterUp({
        delay: 10,
        time: 800,
      });
 
  
  });
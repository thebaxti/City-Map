$('.menu').click(function(){
$('.navbar-ul').toggleClass('active');
$("body").toggleClass("active");
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
  
    if (scroll >= 10) {
        $("nav").addClass("active");
        $("header").addClass("active");
    }
    else{
        $("nav").removeClass("active");
        $("header").removeClass("active");
    }
  });
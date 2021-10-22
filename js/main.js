$(function(){
  //back to top button
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//venobox js
$('.venobox').venobox(); 
$('.counter').counterUp({
  delay: 10,
  time: 1000
});


})

  


  


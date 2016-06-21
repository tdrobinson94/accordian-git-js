$('.sec-one').on('click', function(){
  $('.first').toggleClass('closed');
  $('.second').addClass('closed');
  $('.third').addClass('closed');
});

$('.sec-two').on('click', function(){
  $('.second').toggleClass('closed');
  $('.first').addClass('closed');
  $('.third').addClass('closed');
});

$('.sec-three').on('click', function(){
  $('.third').toggleClass('closed');
  $('.first').addClass('closed');
  $('.second').addClass('closed');
});

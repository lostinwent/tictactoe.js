$(document).ready(function(){


  $('.alert-close').on('click', function(event) {
    $('.alert-warning').fadeOut('slow', function(event) {
      $(this).remove();
    });
  });


});

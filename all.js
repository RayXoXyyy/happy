$(document).ready(function() {
     $('img').hide()
      $('happy').hide()
     
     
     
     $('p').click(function(event){
     
          $('p').toggleClass('close');
     
     $('img').toggle()
     
     $('happy').toggle()
     });

});
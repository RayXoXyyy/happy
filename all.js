$(document).ready(function() {
     $('img').hide()
      $('happy').hide()
      $('.container').hide()
     
     
     $('p').click(function(event){
     
          $('p').toggleClass('close');
     
     $('img').toggle()
     
     $('happy').toggle()
     $('.container').toggle()
       $('.moving-image ').toggle()
moving-image     
});



    $(document).ready(function () {

      $('.moving-image').show();


      function moveRight() {
        let containerWidth = $('.container').width();
        let imageWidth = $('.moving-image').width();
        let distance = containerWidth - imageWidth;

        $('.moving-image').animate({ left: distance + 'px' }, 2000, moveLeft);
      }

      function moveLeft() {
        $('.moving-image').animate({ left: '0px' }, 2000, moveRight);
      }

      moveRight(); 
    });
});
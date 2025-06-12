$(document).ready(function() {
     $('img').hide()
     
     $('p').click(function(event){
     $('p').toggleClass('close');
     });
     
     $('p').click(function(event){
     $('img').toggle()
     });

});
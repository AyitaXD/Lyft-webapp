$(document).ready(function() {
  setTimeout(function(){
    $(".splashScreen").fadeOut();
    $('.pagPrincipal').removeClass('hide')
  },3000);

  $("#chile").click(function(event){
  event.preventDefault();
  $(this).unbind(event);

  $("#showflag").attr("src", "assets/img/chile.png");
  $("#inputt").attr("placeholder", "123 123 123");
  $("#code").text("+56");
  $("#inputt").click(function(ev){
      ev.preventDefault();
      if($(".required").val() == "" || $(".required").length != 9){
          $("#next-button").hide();
          $(".alert").text("You must enter 9 numbers");
       }else{
          $("#next-button").show();
       }
  });

});

  $("#mex").click(function(event){
  event.preventDefault();
  $(this).unbind(event);

  $("#showflag").attr("src", "assets/img/mexico.png");
  $("#inputt").attr("placeholder", "123 123 1234 ");
  $("#code").text("+52");
  $("#inputt").click(function(ev){
      ev.preventDefault();
      if($(".required").val() == "" || $(".required").length != 10){
          $("#next-button").hide();
          $(".alert").text("You must enter 10 numbers");
       }else{
          $("#next-button").show();
       }
  });

});
  $("#peru").click(function(event){
  event.preventDefault();
  $(this).unbind(event);

  $("#showflag").attr("src", "assets/img/peru.png");
  $("#inputt").attr("placeholder", "123 123 123");
  $("#code").text("+51");
  $("#inputt").click(function(ev){
      ev.preventDefault();
      if($(".required").val() == "" || $(".required").length != 9){
          $("#next-button").hide();
          $(".alert").text("You must enter 9 numbers");
       }else{
          $("#next-button").show();
       }
  });
});
$("#next-button").hide();

    $('.required').on('keyup', function (){
           ToggleSubmitButton();
    });
});

function ToggleSubmitButton(){

    $("#next-button").hide();
    var getRequiredLength = $('.required').length;
    var nonempty = $('.required').filter(function(){
        return this.value != ''
    }).length;

    if(getRequiredLength == nonempty){
        $("#next-button").show();
    }
}

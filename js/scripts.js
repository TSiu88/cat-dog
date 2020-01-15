$(document).ready(function() {
  $(".btn.cat").click(function() {
    // $(".cat.text").show();
    $(".dog.text").fadeToggle();
    // $(".cat.text").append("<p>Meow!</p>");
    // $(".dog.text").append("<p>Bark!</p>");
    $(".dog.text").text("Bark!");
  })
  $(".btn.dog").click(function() {
    // $(".dog.text").show();
    $(".cat.text").fadeToggle();
    // $(".dog.text").append("<p>Bark!</p>");
    // $(".cat.text").append("<p>Meow!</p>");
    $(".cat.text").text("Meow!");
  })

  $(".btn.catToy").click(function(){
    $("img.cat").after("<img src='img/cat-toy.jpg' alt='cat toy' title='click to remove' class='toy'>");
    $("img.toy").click(function(){
      $(this).remove();
    });
  });

  $(".btn.dogToy").click(function(){
    $("img.dog").after("<img src='img/dog-toy.jpg' alt='dog toy' title='click to remove' class='toy'>");
    $("img.toy").click(function(){
      $(this).remove();
    });
  });
});
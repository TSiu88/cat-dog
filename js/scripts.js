$(document).ready(function() {
  $(".btn.cat").click(function() {
    // $(".cat.text").show();
    $(".dog.text").show();
    // $(".cat.text").append("<p>Meow!</p>");
    $(".dog.text").append("<p>Bark!</p>");
  })
  $(".btn.dog").click(function() {
    // $(".dog.text").show();
    $(".cat.text").show();
    // $(".dog.text").append("<p>Bark!</p>");
    $(".cat.text").append("<p>Meow!</p>");
  })

  $(".btn.catToy").click(function(){
    $("img.cat").after("<img src='img/cat-toy.jpg' alt='cat toy' class='toy'>");
  });

  $(".btn.dogToy").click(function(){
    $("img.dog").after("<img src='img/dog-toy.jpg' alt='dog toy' class='toy'>");
  });
});
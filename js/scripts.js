
$(document).ready(function() {
  $("#p1").wrap()
  
  $("#clickable").click(function() {
    ("#p1").wrap("<div class='clickable'></div>");
  });

  $("button#p2").click(function() {
    $("body").addClass(".highlight");

  });
  
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });
});


$(".clickable1").click(function() {
  $("#aardvark-showing").wrap();
  $("#aardvark-hidden").wrap();
});
$(".clickable2").click(function() {
  $("#aardvark-showing").wrap();
  $("#aardvark-hidden").wrap();
});
$(".clickable3").click(function() {
  $("#aardvark-showing").wrap();
  $("#aardvark-hidden").wrap();
$(document).ready(function($) {
  function draw() {
    var left = $("#block").css("left");
    $("#block").css("left", parseInt(left) + 1 + "px");
  }

  window.setInterval(draw, 100);

  // $(document).keydown(function(e) {
  //   var key = e.which;
  //   var left = 37;
  //   var up = 38;
  //   var right = 39;
  //   var down = 40;
  //   var change = 10;
  //
  //   if (key == left) {
  //     var left = $("#block").css("left");
  //     console.log("left", left);
  //     $("#block").css("left", parseInt(left) - change + "px");
  //   }
  //
  //   if (key == up) {
  //     var top = $("#block").css("top");
  //     console.log("top", top);
  //     $("#block").css("top", parseInt(top) - change + "px");
  //   }
  //
  //   if (key == right) {
  //     var left = $("#block").css("left");
  //     console.log("left", left);
  //     $("#block").css("left", parseInt(left) + change + "px");
  //   }
  //
  //   if (key == down) {
  //     var top = $("#block").css("top");
  //     console.log("top", top);
  //     $("#block").css("top", parseInt(top) + change + "px");
  //   }
  //
  //   e.preventDefault(); // prevent the default action (scroll / move caret)
  // });
});

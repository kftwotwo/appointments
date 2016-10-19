$(document).ready(function() {
  $(".input form").submit(function(event) {
    /*var name = $("#name").val();
    var date = $("#date").val();
    var start = $("#start").val();
    var end = $("#end").val();*/

    $(".name").text($("#name").val());
    $(".date").text($("#date").val());
    $(".start").text($("#start").val());
    $(".end").text($("#end").val());

    $(".output").show();
    $(".input").hide();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("form").submit(function(event) {

    var environment = $("#environment").val();
    var apps = $("#apps").val();
    var websites = $("#websites").val();
    var truthvbeauty = $("#truthvbeauty").val();
    var frontorback = $("#frontorback").val();

    if (environment === "Startup - I don't mind taking a risk on an exiting new venture.") {
      $("#hideruby").show();
      $("#hidephp").show();
      $("#hidejava").show();
    }

    if (environment === "large") {
      $("#hidec").show();
      $("#hidephp").show();
      $("#hidejava").show();
    }

    if (truthvbeauty === "Logic") {
      $("#hidec").show();
      $("#hideruby").show();
      $("#hidephp").show();
    }

    if (truthvbeauty === "Aesthetics") {
      $("#hidedesign").show();
      $("#hidecss").show();
    }
    event.preventDefault();
  });
});

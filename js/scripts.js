$(document).ready(function() {
  $("form").submit(function(event) {

    var environment = $("#environment").val();
    var apps = $("#apps").val();
    var websites = $("#websites").val();
    var truthvbeauty = $("#truthvbeauty").val();
    var frontorback = $("#frontorback").val();

    if (environment === "Startup - I don't mind taking a risk on an exiting new venture.") {
      $("#hidec").hide();
      $("#hideruby").show();
      $("#hidephp").show();
      $("#hidejava").show();
    }
    if (environment === "large") {
      $("#hideruby").hide();
      $("#hidec").show();
      $("#hidephp").show();
      $("#hidejava").show();
    }

    if (truthvbeauty === "Logic") {
      $("#hidedesign").hide();
      $("#hidecss").hide();
      $("#hidec").show();
      $("#hideruby").show();
      $("#hidephp").show();
    }
    if (truthvbeauty === "Aesthetics") {
      $("#hidec").hide();
      $("#hideruby").hide();
      $("#hidephp").hide();
      $("#hidedesign").show();
      $("#hidecss").show();
    }

    if (apps === "Web") {
      $("#hidejavascript").show();
    }


    event.preventDefault();
  });
});

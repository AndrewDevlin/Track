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

    if (apps === "Web") {
      $("#hidejavascript").show();
      $("#hideruby").show();
      $("#hidephp").show();
      $("#hidedesign").show();
    }
    if (apps === "Desktop") {
      $("#hidejavascript").show();
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

    if (frontorback === "Front-end developement - I want to create an experience the user will enjoy and remember.") {
      $("#hidec").hide();
      $("#hidejava").hide();
      $("#hidephp").hide();
      $("#hideruby").hide();
      $("#hidecss").show();
      $("#hidedesign").show();
    }

    if (frontorback === "Back-end developement - Let's see whats going on under the hood.") {
      $("#hidecss").hide();
      $("#hidedesign").hide();
      $("#hidec").show();
      $("#hidejava").show();
      $("#hidephp").show();
      $("#hideruby").show();
    }

    event.preventDefault();
  });
});

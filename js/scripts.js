$(document).ready(function() {
  var environment = $("#environment").val();
  var apps = $("#apps").val();
  var websites = $("#websites").val();
  var truthvbeauty = $("#truthvbeauty").val();
  var frontorback = $("#frontorback").val();

  if (environment === "Startup - I don't mind taking a risk on an exiting new venture.") {
    $("#ruby").show();
    $("#php").show();
    $("#java").show();
  }

  if (environment === "Large and established - I want security and a clear path for advancment.") {
    $("#c").show();
    $("#php").show();
    $("#java").show();
  }

  if (truthvbeauty === "Logic") {
    $("#c").show();
    $("#ruby").show();
    $("#php").show();
  }

  if (truthvbeauty === "Aesthetics") {
    $("#design").show();
    $("#css").show();
  }

});

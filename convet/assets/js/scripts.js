$('.our-work-div').mouseenter(function() {
  console.log("check")
  $(this).find(".our-work-div-info").show();
  $(this).find( ".our-work-title" ).hide();
  $(this).find("img").animate({
    opacity: ".2",
  }, 1)
  $(this).animate({
      backgroundColor: "#f28423",
      opacity: ".9",
    }, 1500)
}).mouseleave(function() {
  $( ".our-work-div").find("img").animate({
    opacity: "1",
  }, 1)
  $( ".our-work-div-info" ).hide();
  $(this).find( ".our-work-title" ).show();
  $(this).animate({
      backgroundColor: "#fff",
    }, 1200)
})
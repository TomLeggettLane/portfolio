$(".nav-item a").on("click", function() {
    $(".nav-item a").removeClass("active");
    $(this).addClass("active");
    console.log("clicked!");
  });


$('body').scrollspy({target: "#navbar-main"})
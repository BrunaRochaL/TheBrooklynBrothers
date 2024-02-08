$(document).ready(function () {
  $(".intibiome-header-hamburger").click(function () {
    $(this).toggleClass("active");
    $(".intibiome-primary-navbar").toggleClass("active");
    $(".intibiome-nav-menu.nav-mobile").toggleClass("active");
    $(".intibiome-content").toggleClass("hide");
  });

  $(".intibiome-nav-link").mouseenter(function () {
    var navbarId = $(this).data("navbar");
    if (navbarId) {
      if ($(".intibiome-content").hasClass("hide")) {
        return;
      }
      $("#" + navbarId)
        .stop(true, true)
        .fadeIn();
    }
  });

  $(".intibiome-nav-link").mouseleave(function () {
    var navbarId = $(this).data("navbar");
    if (navbarId) {
      setTimeout(function () {
        if (
          !$("#" + navbarId + ":hover").length &&
          !$('.intibiome-nav-link[data-navbar="' + navbarId + '"]:hover').length
        ) {
          $("#" + navbarId)
            .stop(true, true)
            .fadeOut(50);
        }
      }, 80);
    }
  });

  $(".intibiome-secondary-navbar")
    .mouseenter(function () {
      $(this).stop(true, true).fadeIn(100);
    })
    .mouseleave(function () {
      $(this).stop(true, true).fadeOut(50);
    });
});

(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });


  $(document).ready(function () {

    if ($(window).width() > 767) {
      $('#map-iframe').attr('src', 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJje_T-1CUEkcRbWiPdOp-fhM&key=AIzaSyDqvcZbtfvXpL6eqUV95z1v3diMkSZD6dw');
    }

    $('#clock').countdown('2020/09/12 15:00:00', function (event) {
      $(this).html(event.strftime(
        '<div class="countdown_wrap d-flex"><div  class="single_countdown"><h3>%D</h3><span>Dny</span></div><div class="single_countdown"><h3>%H</h3><span>Hodiny</span></div><div class="single_countdown"><h3>%M</h3><span>Minuty</span></div><div class="single_countdown"><h3>%S</h3><span>Sekundy</span></div></div>'
      ));
    });

    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-',
        closeOnClick: true
      });
    };

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });


    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }


  });
  //------- Mailchimp js --------//
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

})(jQuery);
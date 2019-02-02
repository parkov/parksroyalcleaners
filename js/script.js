$(document).ready(function() {
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
        }
      }
    });

  $(window).scroll(function() {
    var offset = $(window).scrollTop();
    $('.navbar').toggleClass('navbar-bg', offset > 50);
  });

  var date  = new Date();
  date.setDate(date.getDate() + 7);
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  $('.date').text(date.toLocaleDateString("en-US", options));

  var offset = $(window).scrollTop();
  $('.navbar').toggleClass('navbar-bg', offset > 50);
});

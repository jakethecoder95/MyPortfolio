function alignWidth() {
  var imageWidth = document.getElementsByClassName('project-img').offsetWidth;
  var headers = document.getElementsByClassName('project-subheader');
  for (i = 0; i < headers.length; i++) {
    headers[i].style.width = imageWidth;
  }
}

function disabledMessege() {
  alert("This link is temporarily disabled until some bugs are fixed.  Thank you for your patience.");
}

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
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
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

function addActiveClass(elem){
    var active = document.getElementsByClassName('btn-nav')
    for (i = 0; i < active.length; i++) {
        active[i].classList.remove('active');
    }
    elem.classList.add('active');
}


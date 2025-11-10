$(document).ready(function() {

  // =======================
  // NAVBAR SCROLL EFFECT
  // =======================
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 60) {
      $('.netflix-nav').addClass('scrolled');
    } else {
      $('.netflix-nav').removeClass('scrolled');
    }
  });

  // =======================
  // SMOOTH SCROLL FOR NAV LINKS
  // =======================
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if ($(target).length) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 65
      }, 800);
    }
  });

  // =======================
  // FADE-IN SECTIONS ON SCROLL
  // =======================
  // Initialize fade-section class
  $('section').addClass('fade-section');

  $(window).on('scroll', function() {
    $('.fade-section').each(function() {
      const top_of_element = $(this).offset().top;
      const bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > top_of_element + 50) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Trigger scroll once on page load to show any sections in view
  $(window).trigger('scroll');

  // =======================
  // TRAILER MODAL VIDEO STOP
  // =======================
  $('#trailerModal').on('hidden.bs.modal', function () {
    const iframe = $('#trailerVideo');
    iframe.attr('src', iframe.attr('src')); // Stops video playback
  });

  // =======================
  // CONTACT FORM VALIDATION
  // =======================
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();
    const consent = $('#consent').is(':checked');

    // Reset border colors
    $('#name, #email, #message').css('border-color', '');

    // Check required fields
    if (!name || !email || !message || !consent) {
      alert('Please fill in all fields and give consent.');

      if (!name) $('#name').css('border-color', '#e50914');
      if (!email) $('#email').css('border-color', '#e50914');
      if (!message) $('#message').css('border-color', '#e50914');

      return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      $('#email').css('border-color', '#e50914').focus();
      return;
    }

    // Success message
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    this.reset();
  });

});

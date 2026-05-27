(function ($) {
  "use strict";

  /* ── Preloader ───────────────────────────────────────────── */
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(400).fadeOut('slow', function () { $(this).remove(); });
    }
  });

  /* ── Smooth scrolling ────────────────────────────────────── */
  $(document).on('click', 'a[href*="#"]', function (e) {
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: target.offset().top - 60 }, 750, 'easeInOutExpo');
      }
    }
  });

  /* ── Active nav link on scroll ───────────────────────────── */
  var sections = $('section[id]');

  function updateActiveNav() {
    var scrollPos = $(window).scrollTop() + 80;
    sections.each(function () {
      var top    = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var id     = $(this).attr('id');
      if (scrollPos >= top && scrollPos < bottom) {
        $('.nav-menu li').removeClass('active');
        $('.nav-menu a[href="#' + id + '"]').parent('li').addClass('active');
      }
    });
    if ($(window).scrollTop() < 100) {
      $('.nav-menu li').removeClass('active');
      $('.nav-menu li:first-child').addClass('active');
    }
  }
  $(window).on('scroll', updateActiveNav);
  updateActiveNav();

  /* ── Mobile nav toggle ───────────────────────────────────── */
  $(document).on('click', '.mobile-nav-toggle', function () {
    $('body').toggleClass('mobile-nav-active');
  });
  $(document).on('click', '.nav-menu a', function () {
    $('body').removeClass('mobile-nav-active');
  });
  $(document).on('click', function (e) {
    if (
      $('body').hasClass('mobile-nav-active') &&
      !$(e.target).closest('#header').length &&
      !$(e.target).closest('.mobile-nav-toggle').length
    ) {
      $('body').removeClass('mobile-nav-active');
    }
  });

  /* ── Back to top ─────────────────────────────────────────── */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').addClass('active');
    } else {
      $('.back-to-top').removeClass('active');
    }
  });

  /* ── Typed.js ────────────────────────────────────────────── */
  if ($('.typed').length) {
    var items = $('.typed').data('typed-items');
    if (items) {
      new Typed('.typed', {
        strings:        items.split(',').map(function (s) { return s.trim(); }),
        loop:           true,
        typeSpeed:      75,
        backSpeed:      38,
        backDelay:      1800,
        smartBackspace: true
      });
    }
  }

  /* ── Skill bar animation ─────────────────────────────────── */
  var skillsDone = false;
  function animateSkillBars() {
    if (skillsDone) { return; }
    skillsDone = true;
    $('.skill-bar[data-width]').each(function () {
      $(this).find('.skill-fill').css('width', $(this).data('width') + '%');
    });
  }

  /* ── Stat counter animation ──────────────────────────────── */
  $('.stat-num').waypoint(function () {
    $(this.element).counterUp({ delay: 10, time: 1200 });
  }, { offset: '88%' });

  /* ── Trigger skills when section scrolls into view ───────── */
  $(window).on('scroll', function () {
    if (!skillsDone && $('#skills').length) {
      if ($(this).scrollTop() + $(this).height() > $('#skills').offset().top + 80) {
        animateSkillBars();
      }
    }
  });
  $(window).trigger('scroll');

  /* ── AOS init ────────────────────────────────────────────── */
  AOS.init({
    duration: 750,
    easing:   'ease-in-out',
    once:     true,
    mirror:   false,
    offset:   55
  });

})(jQuery);

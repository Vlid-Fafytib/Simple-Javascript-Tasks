/* begin begin Back to Top button  */
(function() {
    'use strict';
  var check = false;
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        
        if (scrolled > coords) {
            goTopBtn.classList.add('show');
            goBotBtn.classList.remove('show');
            check = false;
        }

        if (scrolled < coords) {
            goTopBtn.classList.remove('show');
            goBotBtn.classList.add('show');
            check = true;
        }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -30);
        setTimeout(backToTop, 0);
      }
    }

    function backToBot() {
        var match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);
        if (match != document.documentElement.scrollHeight) {
          window.scrollBy(0, 30);
          setTimeout(backToBot, 0);
        }
      }
  
    var goTopBtn = document.querySelector('.back-to-top');
    var goBotBtn = document.querySelector('.back-to-bot');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
    goBotBtn.addEventListener('click', backToBot);
  })();
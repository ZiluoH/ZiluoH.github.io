// smooth scroll navbar
$(document).ready(function(){
	// add scrollspy to <body>
	$('body').scrollspy({target:".navbar", offset:50});

	// add smooth scrolling on all links inside the navbar
	$('#navbarResponsive a').on('click', function(e){
		// make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// prevent default anchor click behavior
			e.preventDefault();

			// store hash
			var hash = this.hash;

			// use jQuery's animate() method to add smooth page scroll
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 95
			}, 600)
		}
		// end if
	})
});




(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();

var slides = document.querySelectorAll('.cover-img');
var length = slides.length;

(function() {
    var iterator = 0;
    window.setInterval(function() {
	iterator %= length;
	for (var i = 0; i < length; i++) {
	    var f = (iterator == i) ? 1.0 : 0.0;
	    slides[i].style.opacity = f;
	}
	iterator += 1;
    }, 5000);
})();

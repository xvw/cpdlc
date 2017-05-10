var slides = document.querySelectorAll('.cover-img');
var length = slides.length;
var dateb  = document.getElementById('countdown');
var due    = new Date(dateb.getAttribute('data-due')).getTime();

function formatDate(date) {
    m  = date.getMonth();
    d  = date.getDay();
    h  = date.getHours();
    mi = date.getMinutes();
    s  = date.getSeconds();
    v  = "" + m + " mois, ";
    v += d + " jours, ";
    v += h + " heures, ";
    v += mi + " minutes et " + s + ' secondes !'
    return v;

}


(function() {

    var iterator  = 0;
    var pulsation = 0;

    window.setInterval(function() {
	iterator %= length;
	for (var i = 0; i < length; i++) {
	    var f = (iterator == i) ? 1.0 : 0.0;
	    slides[i].style.opacity = f;
	}
	iterator += 1;
    }, 5000);


    window.setInterval(function() {
	pulsation %= 2;
	var f = (pulsation == 0) ? 1.0 : 0.8;
	var now  = new Date().getTime();
	var count= new Date(due - now);
	dateb.innerHTML = formatDate(count);
	dateb.style.opacity = f;
	pulsation += 1;
    }, 1000);


})();

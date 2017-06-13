//var slides = $('.cover-img');
//var length = slides.length;


function countdown() {
  var obj = $('#countdown')
  var dt = new Date(obj.attr('data-due')).getTime();
  window.setInterval(function() {
    var now = (new Date()).getTime()
    var distance = dt - now; 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var x = "" + days + ", " + hours + ":" + minutes + ":" + seconds
    obj.text(x)
  }, 1000)
}

function scrollTo(speed) {
  $("#down_arrow").on('click', function() {
    var page = $(this).attr('href');
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
			return false;
  })
}

function slider() {

  var slides = $(".cover-img")
  var length = slides.length
  var iterator = 0;

  window.setInterval(function () {
    iterator %= length;
    for (var i = 0; i < length; i++) {
      var f = (iterator == i) ? 1.0 : 0.0;
      slides[i].style.opacity = f;
    }
    iterator += 1;
  }, 5000);

}


$(document).ready(function() { 
  scrollTo(1024);
  slider();
  countdown();
})

/*
(function () {

    var iterator = 0;
    //var pulsation = 0;

    window.setInterval(function () {
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


})();*/
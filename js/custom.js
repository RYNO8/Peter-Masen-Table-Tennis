// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

// make sure the colours of the background images contrast with the colour of the foreground text
var backgrounds = ["background-0.jpg", "background-1.jpg", "background-2.jpg"];

// how many milliseconds to wait between each background image transition
// must be  >= transition duration
var WAITTIME = 10000; 

var header = document.getElementById("content_0")
var i = 0;
changeBackground = function() {
	header.style.backgroundImage = `url('images/${backgrounds[i]}')`;
	i = (i + 1) % backgrounds.length;
	setTimeout(changeBackground, WAITTIME);
}
changeBackground();
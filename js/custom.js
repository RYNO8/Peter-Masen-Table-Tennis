// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

/* NOTE: if there are 3 images:
label them background-0.jpg, background-1.jpg, background-2.jpg
set TOTALIMAGES to 3*/
// make sure the colours of the background images contrast with the white foreground text
var backgrounds = ["background-0.jpg", "background-1.jpg", "background-2.jpg"];
var WAITTIME = 12000; // how many milliseconds to wait between each background image transition

var header = document.getElementById("header")
var i = 0;
changeBackground = function() {
	header.style.backgroundImage = `url('images/${backgrounds[i]}')`;
	i = (i + 1) % backgrounds.length;
	setTimeout(changeBackground, WAITTIME);
}
changeBackground();
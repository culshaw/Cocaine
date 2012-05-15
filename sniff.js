// Javascript sniffing technique by feature detection
window.sniffer = function() {
	var w = window
	if(w.webkitRequestAnimationFrame) return 'chrome'
	if(w.msRequestAnimationFrame) return 'ie'
	if(w.oRequestAnimationFrame) return 'opera'
	if(w.mozRequestAnimationFrame) return 'firefox'
	
	// We still haven't picked the browser up, try a secondary measure
	if(w.navigate) return 'opera' // Version 11.01
	if(w.chrome) return 'chrome'
}
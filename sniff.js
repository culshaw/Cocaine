// Javascript sniffing technique by feature detection Ian Culshaw 2012!
window.sniffer = function() {
	var w = window
	for(e in w) {
		if(e.indexOf('ms') == 0) return 'ie'
		if(e.indexOf('webkit') == 0) return 'webkit'
		if(e.indexOf('moz') == 0) return 'firefox'			
	}
	
	// some fallbacks
	if(w.webkitRequestAnimationFrame) return 'chrome'
	if(w.msRequestAnimationFrame || w.maxConnectionsPerServer) return 'ie'
	if(w.oRequestAnimationFrame) return 'opera'
	if(w.mozRequestAnimationFrame) return 'firefox'
	
	// We still haven't picked the browser up, try a secondary measure
	if(w.opera) return 'opera' // Version 11.01
	if(w.chrome) return 'chrome'
}

console.log(sniffer())
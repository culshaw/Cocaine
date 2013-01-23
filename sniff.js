// Javascript sniffing technique by feature detection Ian Culshaw 2012!
window.sniffer = function() {
	var w = window,
		sniffBrowser = function() {
			for(e in w) {
				if(e.indexOf('ms') == 0) return 'ie'
				if(e.indexOf('webkit') == 0) return 'webkit'
				if(e.indexOf('moz') == 0) return 'firefox'			
				document.write(e+'<br>');
			}
	
			// some fallbacks
			if(w.webkitRequestAnimationFrame) return 'chrome'
			if(w.msRequestAnimationFrame || w.maxConnectionsPerServer) return 'ie'
			if(w.oRequestAnimationFrame) return 'opera'
			if(w.mozRequestAnimationFrame) return 'firefox'
	
			// We still haven't picked the browser up, try a secondary measure
			if(w.opera) return 'opera' // Version 11.01
			if(w.chrome) return 'chrome'
		},
		detect = function(key, val) {
			if(key === val) {
				return true;
			}
			return false;
		}
		sniffFeatures = function(browser) {
			var json,geolocation;
			xhttp = detect(typeof(XMLHttpRequest), 'function') // lt IE6
			json = detect(typeof(JSON), 'object'); // 'object' for supported. lt IE7
			geolocation = detect(typeof(navigator.geolocation), 'object'); // lt IE9
			worker = detect(typeof(Worker), 'function'); // lt IE10
		};
	
	
	
	// Return methods to screen
	var browser = sniffBrowser(),
		features = sniffFeatures(browser);
		
		
	return {
		browser: browser,
		features: features
	};
}

document.write(sniffer().features)

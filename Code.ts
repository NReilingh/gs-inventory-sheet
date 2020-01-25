const HASH_WORDS = 'https://us-central1-hashwords.cloudfunctions.net/hashWords';

function HASHHOST(input, prefix) {
  if (typeof input === 'undefined') return null;
  if (typeof input === 'number') {
    input = input.toString();
  }
  if (!input.hasOwnProperty('length') || input.length < 1) return null;
  const length = 15 - prefix.length;
  var response = UrlFetchApp.fetch(HASH_WORDS, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      stringData: input,
      length: length
    })
  });
  return prefix + response.getContentText().toUpperCase();
}

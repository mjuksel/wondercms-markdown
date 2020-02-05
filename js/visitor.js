$(() => {
  var cont = $('#content');
  var testChildren = cont.children().length;
  /* check if content has chilren, should only have plain text in Markdown formatting */
  if (testChildren === 0) {
    cont.before(snarkdown(cont.text())).hide();
  }
});

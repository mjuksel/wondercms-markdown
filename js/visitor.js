$(function() {
  const cont = $('#content');
  const testChildren = cont.children().length;
  /*
   * Check if content has children.
   * Should (?) only have plain text in Markdown formatting
   * Finally render content + hide source area.
   */
  if (testChildren === 0) {
  const txt = marked(cont.text());
  cont.before(`<div class="markdown-body">${txt}</div>`).hide();
  }
});

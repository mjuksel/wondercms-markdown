$(function() {
  const cont = $('#content');
  const testChildren = cont.children().length;
  const txt = marked(cont.text());
  /*
   * check if content has children.
   * should (?) only have plain text in Markdown formatting
   * finally render content + hide source area.
   */
  if (testChildren === 0) {
    cont.before(`<div class="markdown-body">${txt}</div>`).hide();
  }
});

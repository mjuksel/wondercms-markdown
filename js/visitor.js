/*
 Short function that creates regular HTML for the visitors :)
*/
marked.setOptions({
  breaks: true
});
$(() => {
  var cont = $('#content');
  if(cont.children().length === 0) {
    cont.html(marked(cont.html()));
  }
});
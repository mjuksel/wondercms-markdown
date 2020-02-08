/*
 Short function that creates regular HTML for the visitors :)
*/
marked.setOptions({
  breaks: true
});
$(() => {
  $('#content').html(marked($('#content').html()))
});
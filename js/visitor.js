/*
 Short function that creates regular HTML for the visitors :)
*/
marked.setOptions({
  breaks: true
});
const sect = document.querySelectorAll('section');
sect.forEach(element => {
  let txt = element.textContent.trim();
  if (txt != '') element.innerHTML = marked(txt);
});
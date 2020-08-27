/*
 Short function that creates regular HTML for the visitors :)
*/
const sect = document.querySelectorAll('section');

marked.setOptions({
  breaks: true
});

sect.forEach(element => {
  let txt = element.textContent.trim();
  if (txt != '') element.innerHTML = marked(txt);
});
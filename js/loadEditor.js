function post(url, data) {
  const response = fetch(url, {
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-requested-with": "XMLHttpRequest"
    },
    body: `fieldname=${data.fieldname}&content=${data.content}&target=${data.target}&token=${data.token}`,
    method: "POST"
  });
  return response;
}

document.querySelectorAll('.editable').forEach(el => {
  let tAr = document.createElement('textarea');
  tAr.value = el.textContent;
  el.replaceWith(tAr);
  let simplemde = new SimpleMDE({
    element: tAr,
    toolbar: [
      'bold', 'italic', 'heading', '|',
      'code', 'quote', '|',
      'unordered-list', 'ordered-list', 'horizontal-rule', '|',
      'link', 'image', '|',
      'table', 'clean-block', '|',
      'preview', 'side-by-side', 'fullscreen', '|',
      {
        name: 'save',
        action: editor => {
          post('', {
            fieldname: el.id,
            content: editor.value(),
            target: el.dataset.target,
            token: token
          })
          .then(() => {
            document.querySelector('#save').style.display = 'block';
            setTimeout(() => {
              document.querySelector('#save').removeAttribute('style');
            }, 250);
          });
        },
        className: 'fa fa-save',
        title: 'Save!'
      }
    ]
  });
});

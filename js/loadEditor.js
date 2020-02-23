window.addEventListener('load', () => {
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
            fieldSave(el.id, editor.value(), el.dataset.target);
          },
          className: 'fa fa-save',
          title: 'Save!'
        }
      ]
    });
  });
});

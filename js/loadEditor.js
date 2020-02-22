window.addEventListener('load', () => {
  document.querySelectorAll('.editable').forEach((el) => {
    let simplemde = new SimpleMDE({
      element: el,
      toolbar: [
        'bold','italic','heading','|',
        'code','quote','|',
        'unordered-list','ordered-list','horizontal-rule','|',
        'link','image','|',
        'table','clean-block','|',
        'preview','side-by-side','fullscreen','|',
        {
          name: 'save',
          action: editor => {
            fieldSave(el.id, editor.value(), a.dataset.target);
          },
          className: 'fa fa-save',
          title: 'Save!'
        }
      ]
    });
  });
});

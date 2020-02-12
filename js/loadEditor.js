$(function() {
  $('.editable').one('click', function() {
    const a = $(this);
    const title = a.attr('id');
    console.log(`Editing #${title}!`);
    setTimeout(() => {
      $('textarea').attr('onblur', null);
      const simplemde = new SimpleMDE({
        element: $('textarea')[0],
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
              fieldSave(a.attr('id'), editor.value(), a.data('target'), a.data('menu'), a.data('visibility'));
            },
            className: 'fa fa-save',
            title: 'Save!',
          },
        ],
      });
      return (WMD = simplemde); // return the editor for consoling
    }, 100);
  });
});

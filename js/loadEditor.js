$(function() {
  $('.editText').one('click', function() {
    (a = $(this)), (title = a.attr('id'));
    setTimeout(() => {
      a.children(':first').removeAttr('onblur');
      let simplemde = new SimpleMDE({
        element: $('textarea')[0],
        toolbar: [
          'bold','italic','heading','|',
          'code','quote','|',
          'unordered-list','ordered-list','horizontal-rule','|',
          'link','image','|',
          'table','clean-block','|',
          'preview','side-by-side','fullscreen','|',
          {
            name: 'save',
            action: function(editor) {
              fieldSave(a.attr('id'), editor.value(), a.data('target'), a.data('menu'), a.data('visibility'));
              // console.log(editor.value());
            },
            className: 'fa fa-save',
            title: 'Save!',
          },
        ],
      });
    }, 50);
  });
});
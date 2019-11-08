$(function() {
    $('.js-submit').on('submit', function(event) {
      event.preventDefault();
      $('#shopping-list-entry').val('');
      const newItem = $('#shopping-list-entry').val()
      $('.shopping-list').html(      `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });

  $('.shopping-item-toggle').click(function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
  $('.shopping-item-delete').click(function() {
    $(this).closest('li').remove();
  })

})

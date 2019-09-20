$(function(){
    let addedItems = [];
    
    $('#js-shopping-list-form').submit(event => {
      
      event.preventDefault();
   
      let item = $("shopping-list-entry").val();
  
      $('#shopping-list-entry').val('');
  
  
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
      )
      
    });
  
  
   //strikes thru checked items
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
      $(this).closest('li').remove(); 
      });
  
    //if I click the delete button, I want to remove the item
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
  
  });
  
  
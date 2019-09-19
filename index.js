$(function(){
    let addedItems = [];
    
    //once I click on the Add item button I want to be able to store values into my array and then display the items of the array on my html page
    $('#js-shopping-list-form').submit(event => {
      
      event.preventDefault();
     //not sure how to store the value of the entered item into this variable
      let item = $(event.currentTarget).find(
        "shopping-list-entry").val();
      
    })
  
  
   //not sure how to strike only specific instances of the item
    $('.shopping-item-toggle').click(event => {
      $('span.shopping-item').toggleClass('shopping-item__checked');
    })
  
    //if I click the delete button, I want to remove the item
    $('button.shopping-item-delete').click(event => {
      this.remove();
    })
  
  });
  
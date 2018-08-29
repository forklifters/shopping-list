
function addNewItem (newItem) {
  $('.shopping-list').prepend(
    '<li>' +
      '<span class="shopping-item">'+ newItem  +'</span>' +
      '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
          '<span class="button-label">check</span>' +
      '</button>' +
        '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button>' +
      '</div>' +
    '</li>')
}

function cleanInput () {
  $('#shopping-list-entry').val('')
}

function getNewItem () {
  return $('#shopping-list-entry').val()
}

function onSubmitHandler (event) {
  // Stop the default browser behaviour
  event.preventDefault()

  // Getting the calue
  var newItem = getNewItem()

  // Cleaning the input
  cleanInput()

  // Adding to the Dom
  addNewItem(newItem)
}

function getShoppingItem (event) {
  return $(event.currentTarget).closest('li').find('.shopping-item')
}

function getItemList (event) {
  return $(event.currentTarget).closest('li')
}

function onToggleHandler (event) {
  var item = getShoppingItem(event)
  item.toggleClass('shopping-item__checked')
}

function onDeleteHandler (event) {
  var listItem = getItemList(event)
  listItem.remove()
}

function init () {
  $('.shopping-list')
    .on('click', 'button.shopping-item-toggle', onToggleHandler)
    .on('click', 'button.shopping-item-delete', onDeleteHandler)

  $('button[type="submit"]').click(onSubmitHandler)
}

init()

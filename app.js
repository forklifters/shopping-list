'use strict';

// single state object

var state = {
    items: []
};

function addItem(state, item) {
   state.items.push(item);
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    parent.removeChild(state);
    target.insertBefore(state, target.childNodes[0])
}


function deleteItem(state, item) {
   state.items.splice(item);
   console.log(this) 
    // Get the node name of the parent node of a <li> element
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
};

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + 
                '<span class="shopping-item shopping-item"></span>' +
                '<div class="shopping-item-controls">' +
                    '<button class="shopping-item-toggle">' +
                        '<span class="button-label">check</span>' +
                    '</button>' +
                    '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
                    '</button>' +
                 '</div>' + 
                '</li>';
    });
    element.html(itemsHTML);
};


// function to allow user to purchase by entering text and hitting "return" or clicking "add item" button
$(function(event) {
    console.log("event fired");
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
    event.preventDefault();
    $('form').each(function() {
        $(this).find('input').keypress(function(e) {
            //enter pressed
            if(e.which == 10 || e.which == 13) {
                this.form.submit();
            }
        });
        $(this).find('input[type=submit').hide();
    });
});

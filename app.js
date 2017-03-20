'use strict';

// I don't see the selectors and event handlers for:
// the add, check and delete events

// We will need a way to identificate the the items in the DOM (HTML LI elements)
// in order to find them on the state. We must use IDs on the items.
// I will teach you first how to do it without Ids but only for a learning purpose.

// You have to understand what a reference is. We will save a reference of each element on the state. 

// I will teach you how to save the state on the localStorage
// in order to persist the state when the user reload the page

// single state object
var state = {
    items: []
};

function addItem(state, item) {
    state.items.push(item);
    // Why don't add it using jQuery .prepend()?
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    parent.removeChild(state);
    target.insertBefore(state, target.childNodes[0])
}


function deleteItem(state, item) {
   // .splice(a, 1) // a is the index of the element to be removed
   state.items.splice(item);
   // Why use this?
   console.log(this) 
    // Get the node name of the parent node of a <li> element
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    // Why don't remove it using jQuery .remove()?
    parent.removeChild(item);
};

var renderList = function(state, element) {
    // I like this! Very nice use of map()
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
    // This looks great in terms of performance
    element.html(itemsHTML);
};


// function to allow user to purchase by entering text and hitting "return" or clicking "add item" button
$(function(event) {
    // This is the onLoad event triggered when the HTML is loaded and ready to be selected.
    console.log("event fired");
    // There is no element with the class shopping-list-add-input |o| 
    addItem(state, $('.shopping-list-add-input').val());
    // Why pass the state if it's global?
    renderList(state, $('.shopping-list'));
    // Why preventDefault() if this is not an user action event? 
    event.preventDefault();
    // Why iterate form elements if there is only one?
    $('form').each(function() {
        // Why don't access directly to the input by ID #shopping-list-entry?
        // Why don't use the onSubmit event on the form to detect when the user press enter?
        $(this).find('input').keypress(function(e) {
            //enter pressed
            if(e.which == 10 || e.which == 13) {
                this.form.submit();
            }
        });
        // Why find the submit button inside the form intead of directly?
        $(this).find('input[type=submit').hide();
    });
});

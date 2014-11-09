var TodoApp = {
  initialize: function() {
    // $('#create-todo-button').click(function(event) {
    //   event.preventDefault();
    // });

    $('#todo-form').submit(this.addTodo);
    $('#todo-list').on('click', 'li', this.markDone);
  },

//var test = $('<button>Test</button>')
  addTodo: function(event) {
    //var inputValidate = $('#todo-field').val();
    //var newTodo = new TodoItem($('#todo-field').val()); // newTodo = Obj made by TodoItem constructor

    var newTodo = $('#todo-field').val();
    //ADD A BUTTON! - for proof of concept
    if(newTodo !== ''){
      var newTodoItem = $('<li>').text(newTodo);
      $('#todo-list').append(newTodoItem);
      $('#todo-field').val('');
    }
    event.preventDefault();
  },
  markDone: function() { //I add to Done AND REMOVE FROM TODO WOOHOO!
    var newDone = $(this).text();
    var newDoneItem = $('<li>').text(newDone);
    $('#done-list').append(newDoneItem);
    $(this).remove(); //Removes only specific li clicked(!!)
  }
};
// In the $(document).ready() handler, add a click event handler to your "Create" button that calls a function on TodoApp, which will create the item from the text in the form field
$(document).ready(function() { TodoApp.initialize(); });
//Namespace / Class (like DemoApp)
//Has a function which sorts lists alphabetically or by creation/completion date
  //Called by click handler
//Handles:
  //Creating
  //Inserting
  //Relocating
  //Deleting
  //Storing
      //Array of TodoItem objects

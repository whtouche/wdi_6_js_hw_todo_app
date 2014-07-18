var TodoApp = {
  initialize: function() {
    // $('#create-todo-button').click(function(event) {
    //   event.preventDefault();
    // });

    $('#todo-form').submit(this.addTodo);
    $('#todo-list').on('click', 'li', this.markDone);
  },


  addTodo: function(event) {
    var newTodo = $('#todo-field').val();

    if(newTodo !== ''){
      var newTodoItem = $('<li>').text(newTodo);
      $('#todo-list').append(newTodoItem);
      $('#todo-field').val('');
    }
    event.preventDefault();
  },
  markDone: function() {
    var newDone = $(this).val();
    var newDoneItem = $('<li>').text(newDone);
    $('#done-list').append(newDoneItem);
  }
};

$(document).ready(function() { TodoApp.initialize(); });
//Namespace / Class (like DemoApp)
//Has a function which sorts lists alphabetically or by creation/completion date
  //Called by click handler
//Handles:
  //Inserting
  //Relocating
  //Deleting
  //Storing
      //Array of TodoItem objects

var TodoItem = function(name, createdAt, completedAt){

  this.name = name;
  createdAt = date.now();
  completedAt = null;
  completeButton = $('<button>Complete</button>');
  deleteButton = $('<button>Delete</button>');
};

//Individual TodoItem
//Handles:
  //Constructing DOM elements for displaying itself
  //Prevents blank items from being created (like validators in Rails)
//Includes:
  //'Complete' and 'Delete' buttons
  //"created at" and "completed at", set at the appropriate points in code, and incorporate info into item's "rendered" DOM node

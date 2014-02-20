# JS Todo App

The goal of this lab is to build a simple client-side JavaScript "todo" application that makes use of DOM manipulation, user interaction through events, and testing with Jasmine.

## Application structure

You should have two classes for this app: `TodoApp` and `TodoItem`.

`TodoApp` combines all the functions that are useful for working with the app. It creates and appends new tasks to the DOM and also retrieves an array of finished and unfinished tasks.

`TodoItem` constructs the actual DOM element to represent a task. The functions that return "complete" and "delete" buttons also bind a function that handles the click events for those buttons. The "render" function returns a DOM object containing the task and the two buttons.

## Step-by-step instructions

Be sure to have a solid grasp on functions used as constructors for objects. [See this article](http://pivotallabs.com/javascript-constructors-prototypes-and-the-new-keyword/) for details on exactly how it all works.

### Step 1

Build out the DOM structure in `index.html`:

- A container div with id 'container' for the app, containing:
  - A div with an 'unfinished' id for holding new tasks, containing:
    - An input field with the 'new-task-field' id for getting user input
    - A button with an 'add-item' id for submitting a new task
    - An orderd list with a 'todo-items' id for holding new tasks
  - A div with an 'unfinished' id for completed tasks, containing:
    - An unordered list with a 'completed-items' id for holding completed tasks

### Step 2

Build out the structure of the JavaScript app in `src`:

- An empty TodoApp object
- An empty TodoItem object

### Step 3

Implement the basic item-adding functionality:

- Use the `window.onload` event to pick out the 'add-item' button
- Add an `onclick` event handler that will call a todoApp createTask method and input from the 'new-task-field' field as an argument
- Implement the todoApp createTask method to:
  - create a new instance of a todoItem object
  - Use the new task objects setTaskText method to set the task text from the argument
  - call the todoApp appendTask method passing the new task object as an argument
- Implement the todoApp appendTask method to:
  - check that the new task name isn't blank
  - call the new task render method that returns a DOM object and append it to the 'todo-items'
- Implement the necessary todoItem methods:
  - setTaskText method to set the taskName attribute
  - render method to return an 'li' element with a div for holding the task text

### Step 4

Implement the complete button:

- (TDD) Write a test to make sure that the todoApp completedButton method returns a button
- Make a todoItem completedButton method that will return a button DOM object:
  - create the button
  - set the onclick function to do some DOM manipulation:
    - (remember to save a reference to the todoItem 'this' in the function's scope by storing it in a variable)
    - remove the task from 'todo-items' and append it to 'completed-items'

### Step 5

Implement the delete button

- (TDD) Write a test to make sure that the todoApp deleteButton method returns a button
- Make a todoItem deleteButton method that will return a button DOM object:
  - create the button
  - set the onclick function to do some DOM manipulation:
    - (remember to save a reference to the todoItem 'this' in the function's scope by storing it in a variable)
    - remove the task from the DOM

### Step 6 (Optional)

You may want to refactor some code, add helper methods to clean up the repeated parts or abstract out some parts, and add styling by adding CSS classes.

### Step 7 (Optional)

Add a 'created on:' and 'completed on:' section to the tasks to keep track of the date when the tasks were created and completed.

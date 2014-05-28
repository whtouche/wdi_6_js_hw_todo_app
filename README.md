# JS Todo App

The goal of this assignment is to build a simple client-side JavaScript/jQuery "todo" app. Users of your app should see a list of finished items, a list of unfinished items, and a form with a single text field and a "Create" button to add new items. It should not be possible to add blank items. New items are unfinished by default, and move to finished when the user clicks a "Complete" button attached to the item. All items also have a "Delete" button that removes them from the app.

## Application structure

You should have two classes for this app: `TodoApp` and `TodoItem`.

`TodoApp` holds the app functions not related to individual todo items. Since there is only one app, there will be no *instances* of this class; data and functions will be stored and called directly on the class itself. It handles inserting, relocating, and deleting elements from the DOM, and stores an array of all todo items.

`TodoItem` represents an individual todo item, and handles constructing the actual DOM elements for displaying itself. These elements will need to include "complete" and "delete" buttons, with appropriate functions bound to their click events.

**Note:** There is a Jasmine-Rails setup in this repository, see if you can make do this with testing!

## Things you'll need to do

* Build a DOM structure for the app with useful IDs and classes that will allow easy manipulation from JavaScript &ndash; Bootstrap has been included and there are some pre-built styles in `todo.css`
* In a `$(document).ready()` handler, add a click event handler to your "Create" button that calls a function on `TodoApp`, which will create the item from the text in the form field
* Create a constructor for `TodoItem`, and implement a function that creates and returns an HTML element with the appropriate properties that `TodoApp` can insert
* Add `TodoItem` functions to generate the Complete and Delete buttons with onclick functions that perform those actions, and incorporate the buttons into the "rendered" DOM node
* Make `TodoItem` responsible for preventing blank items from being created (think validators in Rails)

## Grading Rubric (20 points)

- (1) Strong use of Git, making several commits along the way with clear messages
- (1) Application is deployed to Heroku and visible online
- (1) Leverage the given CSS (modifying if desired) to make this look great
- (1) Consistent and clear JavaScript style following best practices and/or a style-guide
- (1) HTML uses appropriate DOM structure with useful IDs and Classes, including a form for adding Todo items
- (2) Create specified event handler on Create button
- (2) Create specified constructor to TodoItem
- (2) Create `TodoItem` functions (completed, delete buttons) and implement buttons/events as specified
- (1) Prevent blank `TodoItem` from being created
- (2) TodoApp is tested with Jasmine
- (2) TodoItem is tested with Jasmine
- (2) TodoItem has "created at" and "completed at" to keep track of the date each item was created and completed. Note that`todos.css` has a class that would be appropriate for displaying this info.
- (2) Add links that allow the user to sort items either by creation/completion date or alphabetically. Storing item arrays on the `TodoApp` class will be useful for this.


# JS Todo App

The goal of this assignment is to build a simple client-side JavaScript "todo" app. Users of your app should see a list of finished items, a list of unfinished items, and a form with a single text field and a "Create" button to add new items. It should not be possible to add blank items. New items are unfinished by default, and move to finished when the user clicks a "Complete" button attached to the item. All items also have a "Delete" button that removes them from the app.

## Application structure

You should have two classes for this app: `TodoApp` and `TodoItem`.

`TodoApp` holds the app functions not related to individual todo items. Since there is only one app, there will be no *instances* of this class; data and functions will be stored and called directly on the class itself. It creates and appends new tasks to the DOM, and stores arrays of finished and unfinished items.

`TodoItem` represents an individual todo item, and handles constructing the actual DOM elements for displaying itself. These elements will need to include "complete" and "delete" buttons, with appropriate functions bound to their click events.

**Note:** There is a Jasmine setup in this repository, but since we don't yet have the tools to test JavaScript that interacts with the DOM, testing is optional for this assignment. If you can make it work, great! If not, don't worry about it.

## Things you'll need to do

* Build a DOM structure for the app with useful IDs and classes that will allow easy manipulation from JavaScript &ndash; there are some defined in `style.css` already
* In an onload handler, add an onclick handler to your "Create" button that calls a function on `TodoApp`, which will create the item from the text in the form field
* Create an appropriate constructor for `TodoItem` and implement a function that "renders" the item into a DOM node that `TodoApp` can insert
* Add `TodoItem` functions to generate the Complete and Delete buttons with onclick functions that perform those actions, and incorporate the buttons into the "rendered" DOM node
* Make `TodoItem` responsible for preventing blank items from being created (think validators in Rails)

## Bonus stage unlocked!

**Bonus:** Add "created at" and "completed at" properties to `TodoItem` to keep track of the date each item was created and completed. `style.css` has a class that would be appropriate for displaying this info.

**Super Bonus:** Add links that allow the user to sort items either by creation/completion date or alphabetically. This is where storing those item arrays on the `TodoApp` class will definitely come in handy!

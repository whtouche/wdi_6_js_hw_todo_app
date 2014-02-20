# JS Todo App

The goal of this assignment is to build a simple client-side JavaScript "todo" application that makes use of DOM manipulation, user interaction through events, and testing with Jasmine.

Users of your app should see a list of finished items, a list of unfinished items, and a form with a single text field and a "Create" button to add new items. New items are unfinished by default, and move to finished when the user clicks a "Complete" button. Items have a "Delete" button that removes them from the app.

## Application structure

You should have two classes for this app: `TodoApp` and `TodoItem`.

`TodoApp` holds the app functions not related to individual todo items. Since there is only one app, you should only create one instance of this class. It creates and appends new tasks to the DOM, and stores arrays of finished and unfinished items.

`TodoItem` represents an individual todo item, and handles constructing the actual DOM elements for displaying itself. These elements will need to include "complete" and "delete" buttons, with appropriate functions bound to their click events.

Each new function you write for these classes (including the constructor) should be test-driven using Jasmine.

## Things you'll need to do

* Build a DOM structure for the app with useful IDs and classes that will allow easy manipulation from JavaScript &ndash; there are some defined in `style.css` already
* Add a click handler to your "Create" button that calls a function on your `TodoApp` instance to create the item &ndash; you'll need to do this within an onload function, no `onclick` attributes in your HTML!
* Create an appropriate constructor for `TodoItem` and implement a function that "renders" the item into a DOM node that `TodoApp` can insert
* Add `TodoItem` functions to generate the Complete and Delete buttons with onclick functions that perform those actions, and incorporate the buttons into the "rendered" DOM node

## Bonus stage unlocked!

Add "created at" and "completed at" properties to `TodoItem` to keep track of the date each item was created and completed. `style.css` has a class that would be appropriate for displaying this info.

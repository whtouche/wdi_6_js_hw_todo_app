# jQuery Todo App

The goal of this assignment is to build a simple client-side JavaScript/jQuery "todo" app. Users of your app should see a list of finished items, a list of unfinished items, and a form with a single text field and a "Create" button to add new items. It should not be possible to add blank items. New items are unfinished by default, and move to finished when the user clicks a "Complete" button attached to the item. All items also have a "Delete" button that removes them from the app. Finally, items should keep track of both the date/time they were created, and the date/time they were completed.

## Application structure

There are two main components to this app: `TodoApp` and `TodoItem`.

`TodoApp` is a namespace containing app functions not related to individual todo items. Since there is only one app, this is only a namespace and not a class. It should handle inserting, relocating, and deleting elements from the DOM, and store an array of current `TodoItem` objects.

`TodoItem` represents an individual todo item, and handles constructing the DOM elements for displaying itself. These elements will need to include "complete" and "delete" buttons, with appropriate functions bound to their click events.

**Note:** `jasmine-rails` is set up in this app, but you don't have to test-drive anything &ndash; in fact this would be quite difficult, since Jasmine only does isolated unit tests and can't interact with the DOM. However, if you see an opportunity for testing, go for it!

## Things you'll need to do

* Build a DOM structure for the app with useful IDs and classes that will allow easy manipulation from JavaScript
* In the `$(document).ready()` handler, add a click event handler to your "Create" button that calls a function on `TodoApp`, which will create the item from the text in the form field
* Create a constructor for `TodoItem`, and implement a function that creates and returns an HTML element with the appropriate properties that `TodoApp` can insert
* Add `TodoItem` functions to generate the Complete and Delete buttons, and incorporate them into the "rendered" DOM node
* Make `TodoItem` responsible for preventing blank items from being created (think validators in Rails)
* Add properties on `TodoItem` for "created at" and "completed at", set them at the appropriate points in the code, and incorporate this info into the item's "rendered" DOM node
* Add links to both lists for sorting items either by creation/completion date or alphabetically, with click handlers that call a function on `TodoApp` which does the sorting

## Grading

- **(1)** HTML uses appropriate DOM structure with useful IDs and Classes
- **(2)** Create specified event handler on Create button and corresponding function
- **(2)** Create specified constructor to TodoItem
- **(2)** Create `TodoItem` "rendering" functions and implement buttons/events as specified
- **(1)** Blank todo items cannot be created
- **(2)** TodoItem has "created at" and "completed at" properties that are set at the appropriate times
- **(2)** Todo items can be sorted either by creation/completion date or alphabetically
- **(1)** Strong use of Git, making several commits along the way with clear messages
- **(1)** Leverage Bootstrap or write your own CSS styles to make this look great
- **(1)** Consistent and clear JavaScript style following best practices and/or a style guide

Total points: **15**

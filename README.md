# Reusing components in Angular

## Task 1

Create a new branch when working on the solution for this task. 
While being on branch task1, use something like
`git checkout -b my-task1-solution`

Create a component "FunComponent" that displays a title and some paragraphs.

Both the title the paragraphs are input properties of the component.

The title is a string. The pragraphs are a string array.

The component should fill all the available space within its html parent element. If the parent is 200px wide, so is FunComponent. If the parent is 40vh high, so is FunComponent.

The component has a distinct background color, a small padding and no borders.

If the content of FunComponent overflows the content should scroll vertically. You know that the parent of the component will always be at least 200px high. Scrolling should only happen for the paragraphs, the title remains where it is when scrolling down the paragraphs.

Test your component by placing it in a parent div of specific width and height. Use as many paragraphs as necessary to test the scrolling behavior.

If you haven't done so yet, commit your changes once the task is complete.

## Task 2

Start working on a new branch. You should build upon your own solution from task1. This can be done in 2 steps.

You should be on the branch task2 now.
First checkout a new branch from here:
`git checkout -b my-task2-solution`
Now you are on the new branch. Merge your task1 solution into it.
`git merge my-task1-solution`

Create a wrapper component "FunViewer" that displays the FunComponent.

FunViewer fills the whole screen (viewport).

It should be able to display FunComponent either on the lower half of the screen, or on the right half of the screen.

FunViewer has a property "isHorizontal" of type boolean. By default, this is false.

If isHorizontal is true, it displays FunComponent on the lower 50% of the screen.

If it is false, it displays FunComponent on the right 50% of the screen.

The other part of FunViewer should display the title "Choose your category".

Also, FunViewer contains a button "Toggle layout". When the button is pressed, FunViewer's isHorizontal property is toggled.

FunViewer has a distinct background color and no padding.

FunViewer displays FunComponent with the title input "Test Title" and the paragraphs input ["This is paragraph 1", "This is paragraph 2", ... , "This is paragraph 20"]. Generate this data programatically in the ngOnInit() method.

If you haven't done so yet, commit your changes once the task is complete.

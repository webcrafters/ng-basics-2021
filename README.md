# ng-basics-2021

This project was created with Angular 11 and contains several assignments.

Find them on their respective branches.

The tasks build upon each other, they are to be completed in order.


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


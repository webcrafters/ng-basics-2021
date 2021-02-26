# Reusing components in Angular



## Task 1

Create a component "FunComponent" that displays a title and some paragraphs.

Both the title the paragraphs are input properties of the component.

The title is a string. The pragraphs are a string array.

The component should fill all the available space within its html parent element. If the parent is 200px wide, so is FunComponent. If the parent is 40vh high, so is FunComponent.

The component has a distinct background color, a small padding and no borders.

If the content of FunComponent overflows, vertical scrolling should be possible.

## Task 2

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

## Task 3

Instead of hardcoded dummy data, let's use lorem ipsum as input for the FunComponent.

Install a lorem ipsum generator from npm.

Use the generator to create the data within the FunViewer's ngOnInit() method and set it as input for the FunComponent.

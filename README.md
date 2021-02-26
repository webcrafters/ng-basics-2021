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


## Task 4

Instead of the lorem ipsum generator, let us create and use a service ChuckNorrisService that fetches chuck norris facts from a REST API. 

The service exposes the method

fetchFact(): Observable<string>

which returns an observable that emits one random Chuck Norris joke

FunViewer injects the ChuckNorrisService and uses it to set the joke as input for the FunComponent.

In this first implementation, there would only be one joke to display. Since our FunComponent looks better with many paragraphs, let us replicate the joke from fetchFact() 20 times, such that the paragraphs input is of the form 

["Chuck Norris once went to ... ", "Chuck Norris once went to ... ", ... ]  (20 times)

The Chuck Norris Jokes API can be used with a GET request to "https://api.chucknorris.io/jokes/random". 

See the details of how the response is structured at "https://api.chucknorris.io/#!", or just try the request in your browser.



## Task 5

The Chuck Norris API also gives us a list of available categories. -> GET "https://api.chucknorris.io/jokes/categories"

ChuckNorrisService should also have a method 

fetchCategories(): Observable<string[]>

to retrieve those categories.

FunViewer should use the method in order to obtain the categories, then list these categories below the title "Choose your category".

The list elements should be interactive. When one of the elements is clicked, the input data for FunComponent is updated.

ChuckNorrisService now has a more sophisticated fetchFact method:

fetchFact(category?: string): Observable<string>

If a category is provided as a parameter, the request to the API can be made accordingly:

"https://api.chucknorris.io/jokes/random?category={category}"

If no category is provided, the request goes out without any query parameter.

When FunViewer is initialized, before any category is clicked, there should still be displayed a random joke in the FunComponent.


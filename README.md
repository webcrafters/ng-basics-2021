# ng-basics-2021

This project was created with Angular 11 and contains several assignments.

Find them on their respective branches.

The tasks build upon each other, they are to be completed in order.

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

## Task 3

Start working on a new branch, like you did when starting the work on task 2.
You should be on the branch task3. Execute
`git checkout -b my-task3-solution`
`git merge my-task2-solution`

Instead of hardcoded dummy data, let's use lorem ipsum as input for the FunComponent.

Install a lorem ipsum generator from npm.

Use the generator to create the data within the FunViewer's ngOnInit() method and set it as input for the FunComponent.

If you haven't done so yet, commit your changes once the task is complete.

## Task 4

Start working on a new branch, like you did when starting the work on earlier tasks.

Instead of the lorem ipsum generator, let us create and use a service ChuckNorrisService that fetches chuck norris facts from a REST API. 

The service exposes the method

`fetchFact(): Observable<string>`

which returns an observable that emits one random Chuck Norris joke

FunViewer injects the ChuckNorrisService and uses it to set the joke as input for the FunComponent.

In this first implementation, there would only be one joke to display. Since our FunComponent looks better with many paragraphs, let us replicate the joke from fetchFact() 20 times, such that the paragraphs input is of the form 

`["Chuck Norris once went to ... ", "Chuck Norris once went to ... ", ... ] ` (20 times)

The Chuck Norris Jokes API can be used with a GET request to "https://api.chucknorris.io/jokes/random". 

See the details of how the response is structured at "https:  //api.chucknorris.io/#!", or just try the request in your browser.

If you haven't done so yet, commit your changes once the task is complete.

## Task 5

Start working on a new branch, like you did when starting the work on earlier tasks.

The Chuck Norris API also gives us a list of available categories. -> GET "https://api.chucknorris.io/jokes/categories"

ChuckNorrisService should also have a method 

`fetchCategories(): Observable<string[]>`

to retrieve those categories.

FunViewer should use the method in order to obtain the categories, then list these categories below the title "Choose your category".

The list elements should be interactive. When one of the elements is clicked, the input data for FunComponent is updated.

The list should be scrollable on overflow, just like the paragraphs in the FunComponent. The title "Choose your category" doesn't scroll, only the list content.

ChuckNorrisService now has a more sophisticated fetchFact method:

`fetchFact(category?: string): Observable<string>`

If a category is provided as a parameter, the request to the API can be made accordingly:

"https://api.chucknorris.io/jokes/random?category={category}"

If no category is provided, the request goes out without any query parameter.

When FunViewer is initialized, before any category is clicked, there should still be displayed a random joke in the FunComponent.

When a category is chosen, the title of FunComponent displays the name of that category in the form "Chuck Norris Facts - category".

At first, before any category is chosen, the title displays simply "Chuck Norris Facts".

If you haven't done so yet, commit your changes once the task is complete.

## Task 6

Start working on a new branch, like you did when starting the work on earlier tasks.

ChuckNorrisService should expose the methods

`fetchCategories(): string[]`
`fetchFacts(category?: string): string[]`

The first returns an array of fact categories. The second method returns an array of 10 chuck norris facts. 

All of this happens synchronously. Nn observables, no promises.

Implementation: fetchFacts() and fetchCategories() return directly some dummy data, in the form

`return ['category1', 'category2'];`
and
`return ['fact1', 'fact2'];`

Now FunViewer can fetch the categories syncrhonously. Also, it can synchronously fetch a few facts from the service.

If you haven't done so yet, commit your changes once the task is complete.


## Task 7

Start working on a new branch, like you did when starting the work on earlier tasks.

Add one more element to the list category. "ALL" should be the text. 

When the user chooses the "ALL" category, the fetchFacts() methods fetches random jokes without specifying any category.

"ALL" should appear as selected by default, when the component initializes, according to the actual state.

If you haven't done so yet, commit your changes once the task is complete.
## Task 8

Start working on a new branch, like you did when starting the work on earlier tasks.

Jokes should only be loaded when a dedicated "Load" button inside FunViewer is clicked.

Jokes should be accumulated on the page. After each click on "Load", there should be more jokes than before.

Choosing a category should not fetch any jokes now. When jokes are fetched by clicking on "Load", the currently selected category should be used.

If you haven't done so yet, commit your changes once the task is complete.

## Task 8.1

Start working on a new branch, like you did when starting the work on earlier tasks.

Add routing to the project.

There should be two routes: 'chucknorris' and 'dadjokes'. 

On the 'chucknorris' route we display the FunViewer component that we've already created.

On the 'dadjokes' route we display a new component called DadJokesViewer. It behaves similarly to the FunViewer, except:

- instead of the FunComponent, it displays the DadJokesComponent. This is a new component. Create it and leave it with the default html `<p>DadJokesComponent works!<p>`.
- instead of a list of selectable categories, it displays a simple text field with an "Apply" button. Here, the user doesn't choose a category from a fixed set, but enters a search term. In a later task we will use the search term when fetching dad jokes.

The route '' should redirect to 'chucknorris'.

If you haven't done so yet, commit your changes once the task is complete.



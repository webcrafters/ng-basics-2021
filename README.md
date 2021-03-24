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

See the details of how the response is structured at "https://api.chucknorris.io/#!", or just try the request in your browser.

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

Fetch multiple jokes in parallel.

ChuckNorrisService should expose the method

`fetchFacts(category?: string): Observable<string[]>`

The method returns an Observable which emits exactly one value, an array of 10 jokes. 

Implementation: fetchFacts() sends 10 get requests and returns a join of them all (forkJoin operator).

Now FunViewer doesn't have to copy jokes, it can receive several jokes at once.

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
## Task 8.2

Start working on a new branch, like you did when starting the work on earlier tasks.

The DadJokesComponent should behave in a way similar to the FunComponent. Paragraphs should be Dad Jokes instead of Chuck Norris Facts.

We can fetch dad jokes from the Dad Jokes API: `https://icanhazdadjoke.com/`. 

Create a DadJokesService similar to the ChuckNorrisService.

Let's start simple: A simple get request to the API will give us a random joke. Check out `https://icanhazdadjoke.com/api` for the documentation, or try a request in your browser, in order to see how the response json is formatted.

Our DadJokesService uses the GET request for a random joke in a similar way to the ChuckNorrisService in our solution for Task6.
It has a method

`fetchJokes(howMany?: number) : Observable<string[]>`

The method returns a stream of string[] by forkJoining several separate requests to the API.

For now, we ignore the search term entered by the user. 

When this task is done, your DadJokesViewer should allow users to load 20 random jokes from the API. This should only happen when the "Load" button is clicked. You can pass the value 20 explicitly when calling fetchJokes, or you can implement the method by providing the default value 20.

If you haven't done so yet, commit your changes once the task is complete.
## Task 8.3

Start working on a new branch, like you did when starting the work on earlier tasks.

Smart search!

The Dad Jokes API is smarter than the Chuck Norris Facts API. We have the url: `https://icanhazdadjoke.com/search` which can be used with optional query params.

Check out the docs at `https://icanhazdadjoke.com/api` to see how search is used. 

Make the following changes to your code:

- fetchJokes() should be called with a search parameter; the method signature changes: now we have `fetchJokes(howMany?: number, searchTerm?: string) : Observable<string[]>`
- the fetchJokes() implementation should consider the cases when no searchTerm is passed in, and then use the default value ""
- as specified before, the fetchJokes method is called only when the user clicks "Load"; when that happens, search term that is currently entered in the search field should be passed to fetchJokes()
- you can remove the "Apply" button
- the title of the DadJokesComponent always displays the search term that was used for the latest fetching


- EXTRA challenge: implement the search field without any explicit state in the component (i.e., no [(ngModel)]); you should be able to get the value from the text field without this two-way binding; after you've succeeded with that, find a way to reset the search field to "" whenever "Load" is clicked and new jokes are fetched

Commit your changes once the task is complete.

## Task 8.4

Start working on a new branch, like you did when starting the work on earlier tasks.

Add another textfield to the DadJokesViewer. This one is numeric and represents the number of jokes to fetch on each request. The default value is 20. Refer to the documentation on `https://icanhazdadjoke.com/api` regarding how to configure the number of jokes.

When calling fetchJokes(), make sure to also pass in the value from the numeric text field. 

If the value is not a positive integer, fetchJokes() should not be called when "Load" is clicked. Instead, an error message should appear below the numeric input field.

EXTRA CHALLENGE: when new jokes are fetched, reset the numeric field too. This should not happen if the user clicks on "Load" and the value is invalid. Only if fetchJokes() is actually called.

Commit your changes once the task is complete.

## Task 8.5

Start working on a new branch, like you did when starting the work on earlier tasks.

Loading dad jokes should also be possible by pressing ENTER while focus is on any of the two input fields: search term or number of jokes.

Commit your changes once the task is complete.
## Task 8.6

Start working on a new branch, like you did when starting the work on earlier tasks.

Implement the DadJokesViewer functionality by using Angular Reactive Forms.

EXTRA CHALLENGE: So far, the validation of your numeric input field should only happen when "Load" is clicked. Use a custom validator in your reactive form control, such that the validation happens on every input change.

Commit your changes once the task is complete.

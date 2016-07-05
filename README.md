Feed Reader Testing
===================

##Description
Udacity Front-end Nanodegree project where Jasmine is used to test the functionality of an app that reads RSS feeds.

##Tests
A number of tests have been written using Jasmine. These check the underlying business logic of the application, as well as the event handling and DOM manipulation. Tests include:

* Looping through each feed in the `allFeeds` object and ensuring it has a **URL defined** and that the **URL is not empty**.

* Looping through each feed in the `allFeeds` object and ensuring it has a **name defined** and that the **name is not empty**.

* A new test suite named **"The menu"**, which tests to ensure that the **menu element is hidden by default** and that the **menu changes visibility when the menu icon is clicked**.

* Ensuring that when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

* Ensuring that when a new feed is loaded by the `loadFeed` function, **the content actually changes**.

##Usage
To run the app, you can download the files, or clone the repository, and then open the `index.html` file.

Alternatively, a live version of the project can be found [here](http://andrewalderton.github.io/frontend-nanodegree-feedreader).

Jasmine test results will display at the bottom of the page.

To review the test code for this project, open the `feedreader.js` file located at `jasmine/spec`.

##Reference
Jasmine documentation: [Jasmine 2.1](http://jasmine.github.io/2.1/introduction.html).


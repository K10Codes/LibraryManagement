# About

This project is built to manage a library system with basic features:
1. View books in a library
2. Able to borrow a book from library
3. View all books borrowed by user. 
4. Able to return the book back to library. 

## Constraints/Assumptions :
1. For the sake of simplicity the app only runs for one user.
2. The user is hard-coded into the application as "User1".
3. The UI can only show books associated with User1. 
4. This can be extended in future to dynamically ask for 
requests for a user.
5. The list of books to display on the initial load is hard coded in the in-memory(mongo) db.
The operations like borrow book, return book etc. modify the same in-memory list to achieve all the features.

## Tech-Stack

1. Java with Spring Boot
2. EmberJS
3. In-memory Mongo DB.
4. Gradle

### Building
Right now, this app is to built as UI and backend separate.
For backend :
* Run `gradlew clean build` from within the root directory. This would run
a spring boot application hosted on port 8080.
 
For UI :
* Run `ember s --proxy "http://localhost:8080"` inside the 'web-app' directory to build the UI for the project .


## Running

* Visit the app at [http://localhost:4200](http://localhost:4200).


##Design Thoughts/Approach :

## For story #1 :

####Backend : 
A get end-point `/library/books/all`
####UI :
A landing page route(at '/' ) which renders an `all-books` component that lists the books.

## For story #2 : 

####Backend:
a. A get end-point `/library/books/available` which lists the books that have not been issued yet 
b. A post end-point `/library/books/available/{bookId}/borrow` to issue the book to user(User hard-coded
as 'User1' as per assumption). 
c. A get end-point `/library/books/issued` which lists the books that have been issued by user. 

####UI:
a. The landing page includes two tabs : All Books and My Books.
b. The logic in ui component all-books extracted to a common `book-listing` component
c. The all-books component calls this component by passing the list of books, table headers and an action button
for performing borrow action.
d. A new component `user-books` which also calls the `book-listing` component but has no action buttons and is just 
used to display the books issued by user.
 
## For story #3 :

####Backend:
a. A get end-point `/library/books/availableCopies` which lists the books that have not been issued 
yet alongwith the number of available copies.
b. A post end-point `/library/books/availableCopies/{bookId}/borrow` to issue the book to 
user(User hard-codedas 'User1' as per assumption). 

####Ui:
a. The `all-books` component extended to send a column for showing number of copies for each book to the `book-listing`
component.

## For story #4 :
####Backend: 
a. A post end-point `/library/books/{bookId}/return` which returns the given book back to the library. 

####Ui:
a. The `user-books` component extended to send a button(clicking on which places a return request) to the `book-listing`
component.

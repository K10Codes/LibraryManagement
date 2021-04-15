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

### Build
* Run `gradlew clean build` from the root directory to build the project.
* Run `gradlew bootRun` from the root directory. This would host an instance of the application on 8080 port.


## Running

* Visit the app at [http://localhost:8080](http://localhost:8080).


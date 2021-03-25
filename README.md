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
* Run `ember s --proxy "http://localhost:8080"` to build the UI for the project.


## Running

* Visit the app at [http://localhost:4200](http://localhost:4200).

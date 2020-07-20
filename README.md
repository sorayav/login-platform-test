# Login platform test
This repository includes the code for a login platform application developed for Karumi. It's been developed with JavaScript and Firebase authentication. 

As per the [user story](https://github.com/sorayav/login-platform-test/issues/1), the application allows the user to log in with their email and password into the platform. This log in process will generate a session token that persists into the application so they don't have to type their credentials when opening the app again. Once the user is logged in, there's a logout button to close the user session.

## Screenshots
![Mobile view](https://media.giphy.com/media/JsgclMCxpbUL6TK0Xj/giphy.gif)

![Desktop view](https://media.giphy.com/media/kG2sSVXkoDH7dn9km5/giphy.gif)

## Usage
For a live demo, you can check the [Github page of the project](https://sorayav.github.io/login-platform-test). 

To use locally: 
1. Download or clone the repository:
`git clone https://github.com/sorayav/login-platform-test.git`
2. Install the Node package manager with `npm install` (requires [Node](https://nodejs.org) and the task runner [Gulp](https://gulpjs.com)) and run the application by typing  `npm start`.

To test the app, use the following mock user details:
Email: `user@karumi.dev`
Password: `123456`

## Development
The project has been planned and developed under Agile philosophy and divided in two sprints:
#### First sprint:
During the first sprint, all the planning, research and designing process took place. Each task was previously thought and laid out using the Github tools: a project board was created with automatic tasks to track progression, every issue was added to the board automatically, along with its status (*Backlog / In progress / To review / Done*) and these were closed when indicated, also automatically, in a PR; the CI was handled with Github actions to create a log of all the PRs.

In this stage, I researched and decided to use Firestore authentication to fake implementation in lack of an API. This provided an easy and light solution for a login platform that could grow if necessary. For this same reason, the app has been built with HTML partials and SASS, as both help create a code effortlessly expandable and readable.

For the design system, I used [Karumi' style guide](https://github.com/Karumi/project-quality-assurance/blob/master/design-collaboration-guidelines.md) as a reference for colours and typography.

The review for the first sprint concluded with a working application:
 - User can login and is redirected to the dashboard. Dashboard contains a logout button and redirects back to home.
- UI follows user story guidelines.

#### Second sprint:

The second sprint was dedicated to test and improve the performance of the application and the quality and legibility of the code. Other additions to the UX were added in this phase:
 - A loader for both the login and logout to show a change in the state of the application.
 - Hover for the buttons.
 - Animations on the form inputs and height change.
 - The error messages on log-in were added to the interface instead of using an alert as firstly implemented. These messages will disappear once the user starts typing either the email or the password again.

---

Thank you for checking!
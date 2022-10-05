This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


--
# Testing Overview

## Why Test?

- For product quality!
- For developer condfidence

## Software Lifecycle Phases 
* Planning => Design (UI/UX or Architecture) => 

Develop (Implementation) => *Testing* => Deploy / Release (Production)


## Levels of Testing (Org-Wise)

--- Development

0. Linting 
- (eslint, prettier) 
- Standardization
- Type checking

-> dev-wise

1. Feature Testing
- each feature or iteration before production

2. Integration Testing
- integration part: merging of work between two different contexts

3. End-to-End Testing
- from user to database scope

4. Regression Testing
- Making sure that the previous features released still works!

--- Release to Production

5. Post-Production Testing
- the database being used here is on prod!


## Levels of Testing (Dev-Wise)

0. Static Testing 
- Linting / Typechecking
1. Unit Testing 
- testing a function (e.g. utility)
2. Component Testing
- whole React component
3. Integration Testing
- Feature level
4. End-to-End
- App level
- Playwright , Puppeteer
- Headless (browser runs in the background, without ui), Headful (browser literally opens)


Types Testing
Behavior Driven (Kung ano yung business rules, and most critical, yun muna)
Test-Driven
- RED -> Green -> Refactor

AAA
Arrange -> render (render, screen)
Act -> fireEvent (input username and password then click submit)
Assert -> assertion of expectation (it should redirect to dashboard if user credentials is correct)


# RoR
- Rspec

Tests - QA Testing
Specs - Specification, Codebase is a documentation of the Busines Rules, Dev Testing




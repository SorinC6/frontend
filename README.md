# Niyon

You can find the deployed project at https://niyonapp.com/

## Contributors

Check our about page at https://niyonapp.com/about

<br>
<br>

## Project Overview

[Trello Board] https://trello.com/b/fvJgJWWA/niyon

[Product Canvas] https://www.notion.so/Niyon-c215b4850eaf4cc39162e9c455993155

[UX Design files] https://whimsical.com/51S63ddNuAZB5d7azZ9L9d

Find a mentor.
Niyon is a platform for connecting young professionals with mentors in West Africa.
We connect you with mentors who are located in the same city, town or local government area you are in.

### 4️⃣ Key Features

- Create your account or login with your social account
- Connect with mentors and mentees
- Chat with them

## Tech Stack

### Front end built using:

## Front End Frameworks & Libraries

### **React**

- is such a popular library, many modules are available, as is plenty of up-to-date information about it.
- Performance - ReactJS its using a virtual DOM that provides superior performance
- reusable Components - React provides a component based structure. You can re-use components anywhere you need. As a result, (1) your app has consistent look and feel, (2) code re-use makes it easier to maintain and grow your codebase, and (3) it is easier to develop your app.
- native Approach: React can be use to create mobile application( react native) .React code its really reusable. So at the same time someone can make IOS , Android application

### **Next JS**

Handles routing (replaces React Router), clear separation between pages and components. Client-side rendered which makes loading faster.

### **Hooks**

Hooks makes it easier to update state, there's also no need for class components or lifecycle methods like componentDidMount.

### **Redux**

Provides one source of truth for state, easier to manage the application state if working in a group.

Our team has extensive experience in ReactJS and NextJS was chosen over React because of the server side rendering and integrated tooling/router.

Hooks enable us to manage our state such as (form handling, dropdown menu etc) in a functional components.

Redux provides us with the ability to manage our state in a central store that can be accessed by all components.

### **Styled Components**

Can have reusable components (easier to have a style guide), easier to organize than other CSS in JS methods (e.g. components can be kept in one file or sorted by type) :

- scoped styles
- normal CSS syntax
- props based conditional style
- create reusable style
- native mobile support - for teams with a React codebase who also use React Native for mobile development, styled-components is one of the best-unified solution out there

## User Auth

### Passport JS

Passport JS is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped into any Express-based web application. It has a social authentication feature that helps with authenticating users via their social handles like facebook, twitter, etc by interacting with these social handle API. It is compatible to use, free, flexible and secured.

For users registering directly to our platform, we will use JSON Web Token.

PassportJS allows us to integrate a lot of different auth providers (facebook, etc.) and also enables us to integrate OAuth (all different versions).

## Chat

### socket.io

[Socket.io](http://socket.io) is a chat framework that performs real-time chat analytics and is compatible across all platforms (web, mobile) and devices.

### ⇒ Our choice: socket.io

We choose [socket.io](http://socket.io) over Pusher because it gives us more flexibility, isn't a third party service (limited plan available for free).

Moreover, [socket.io](http://socket.io) have the following 3 unique features:

- Real-time analytics - Push data to clients that gets represented as real-time counters, charts or logs.
- Binary streaming - Starting in 1.0, it's possible to send any blob back and forth: image, audio, video.
- Instant messaging and chat - Socket.IO's "Hello world" is a chat app in just a few lines of code.

#### Front end deployed to:

### **Heroku - Development, Staging (Backend + Front-end)**

Heroku is a platform as a service for Amazon Web Services. Heroku makes it easy to set up an AWS deployment by handling most of the set up. This is ideal for development and staging as we can test projects without having to worry about too much set up.

### **Circle CI - Testing**

Continuous integration is crucial in modern web development as it ensures all automated tests pass before merging branches and deploying. This ensures bugs are caught at the earliest possible stage.

### **Now - Production (Front-end )**

ZEIT Now is a really simple and scalable way to deploy your application. Pages are deployed as server-less functions meaning billing only occurs in 100ms increments when the site is actually being used. Also as we are using Next.js, also a Zeit product, this allows a seem-less deployment process with two products designed to work together.

#### [Back end] https://github.com/labseu2-niyon/backend built using:

#### 🚫 back end framework goes here

- point one
- point two
- point three

🚫 List the rest of the back end end features and libraries in the same format as the framework above

# APIs

## 2️⃣ Authentication API here

🚫Replace text below with a description of the API

Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things A little happy sunlight shining through there. Let all these little things happen. Don't fight them. Learn to use them. Even the worst thing we can do here is good.

## 2️⃣ Payment API here

🚫Replace text below with a description of the API

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

When you do it your way you can go anywhere you choose. Let your heart take you to wherever you want to be. If I paint something, I don't want to have to explain what it is. A tree needs to be your friend if you're going to paint him. That's a son of a gun of a cloud. Even the worst thing we can do here is good.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

Volunteering your time; it pays you and your whole community fantastic dividends. Maybe there's a happy little waterfall happening over here. You can spend all day playing with mountains. We don't have to be committed. We are just playing here. You have freedom here. The only guide is your heart. It's cold, but it's beautiful.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# 4️⃣ Testing

🚫Document what you used for testing and why

# 4️⃣ Installation Instructions

🚫explain how to install the required dependencies to get this project up and running with yarn and NPM

## Other Scripts

🚫replace these examples with your own

    * typecheck - runs the TypeScript compiler
    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See https://github.com/labseu2-niyon/backend/blob/development/README.md for details on the backend of our project.

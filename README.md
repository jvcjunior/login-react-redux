# Login app with React, Redux, and Firebase
Firebase Login is a simple, easy-to-use authentication service built on top of Firebase Login, allowing you to authenticate users without any server-side code.

Firebase Login offers several types of authentication: email/password, and third-party integration with Facebook, GitHub, Google, and Twitter. 
It allows you to authenticate your users without having to manually store authentication credentials or run a server.

This app was built with React, Redux, and Firebase.

# Demo

Try the demo at https://login-react-redux.firebaseapp.com. 

## Stack

- React
- React-Hot-Loader `3.0.0-beta.5`
- React-Redux
- React-Router
- React-Router-Redux
- Redux
- Redux-Thunk
- Firebase SDK 3 with OAuth authentication
- Babel
- Immutable
- Reselect
- SASS
- Webpack


Quick Start
-----------

```shell
$ git clone https://github.com/jvcjunior/login-react-redux
$ cd reminder-react-redux
$ npm install
$ npm start
```

NPM Commands
------------

|Script|Description|
|---|---|
|npm start|Start webpack development server @ **localhost:3000**|
|npm test|Run unit tests with Karma and Jasmine|
|npm run test:watch|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|


## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```javascript
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```
```javascript
// src/core/firebase/config.js

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```
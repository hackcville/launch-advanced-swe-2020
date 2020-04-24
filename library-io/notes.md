# Creating our server

Initialize project: `npm init -y`

`npm i express isomorphic-fetch`!

Create `app.js` --> run with `node app`!

```js
const express = require('express');
const app = express();

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
```

```js
app.get('/some/path', (req, res) => {
  // ....
  res.send('Hello world!');
  // or...
  res.json({ hello: 'world!' });
});
```

Use the Google Books API to fetch some data and return to the user!

Grab these fields (or any others you'd like to show the user): id, title, author, description, rating, image

# React!

Create our project:

```
npx create-react-app your-app
```

Feel free to do some pruning to remove css files / test packages if you want.

Make sure to add this property to your `package.json`!

```diff
{
  "name": "library-io",
  "version": "0.1.0",
  "dependencies": {
    ...
  },
  ...
+ "proxy": "http://localhost:8080"
}

```

You can now make relative requests in React:

```js
fetch('/api/books?title=the+outsiders')
  .then(res => res.json())
  .then(console.log);
```

# Nicer dev environment

Install Nodemon for auto-reloading for Node:

```bash
npm i nodemon --save-dev
```

Edit our `package.json` scripts:

```json
{
  "scripts": {
    "start": "node app",
    "dev:server": "nodemon app.js --watch app.js",
    "dev:client": "react-scripts start",
    "build": "react-scripts build"
  }
}
```

Now we can just `npm run dev:server` and `npm run dev:client` in development.

# Firebase Configuration

Configure a new project on the Firebase console. When you choose to configure a new web app (on the main dashboard screen), take note of the configuration values it gives you. Add the following fields to your `.env` (with the values from Firebase filled in):

```
REACT_APP_API_KEY=XXXXxxxx
REACT_APP_AUTH_DOMAIN=xxxxXXXX.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxxXXXX.firebaseio.com
REACT_APP_PROJECT_ID=xxxxXXXX
```

In your React app, create a `firebase.js` with following contents:

```js
import firebase from 'firebase/app';
// Import any Firebase features you'll be using in your app
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID
};

firebase.initializeApp(config);
export default firebase;
```

Now, anywhere in your project, you can just import our custom Firebase file and use any features:

```js
import firebase from './firebase';

const db = firebase.firestore();
// Perform some db action
// https://firebase.google.com/docs/firestore/manage-data/add-data
// https://firebase.google.com/docs/firestore/query-data/get-data
```

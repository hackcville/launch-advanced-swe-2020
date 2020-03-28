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

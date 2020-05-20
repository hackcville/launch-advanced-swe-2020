Query example:

```js
// /api/info?id=someshortid&name=something
app.get('/api/info', (req, res) => {
  const { id, name } = req.query;
});
```

Params example:

```js
// /api/info/someshortid
app.get('/api/info/:id/:name', (req, res) => {
  const { id, name } = req.params;
});
```

POST body example:

```js
app.post('/api/create', (req, res) => {
  // creating links
  const { url } = req.body;
});
```

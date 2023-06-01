const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

const readFile = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeFile = (file, content) => fs.writeFileSync(file, JSON.stringify(content));

// CRUD
app.get('/posts', (req, res) => {
  const db = readFile('db.json');
  res.send(db.posts);
});

app.post('/posts', (req, res) => {
  const db = readFile('db.json');
  const newPost = { id: uuidv4(), ...req.body };
  db.posts.push(newPost);
  writeFile('db.json', db);
  res.send(newPost);
});

// am crezut ca fac arrow function-ul gresit, dar de fapt problema era la ===
// nu aveau acelasi tip, de aia post-ul era undefined

// app.get('/posts/:id', (req, res) => {
//   const db = readFile('db.json');
//   console.log("aici", req.params.id);
//   const post = db.posts.find((p) => p.id === req.params.id);
//   console.log("aici2", post, db.posts);
//   res.send(post);
// });

app.get('/posts/:id', function(req, res) {
  const db = readFile('db.json');
  console.log("aici", req.params.id);

  const post = db.posts.find(function(p) {
    console.log("p", p.id);
    return p.id == req.params.id;
  });

  console.log("aici2", post);
  res.send(post);
});


app.put('/posts/:id', (req, res) => {
  const db = readFile('db.json');
  const postIndex = db.posts.findIndex((p) => p.id == req.params.id);
  if (postIndex !== -1) {
    db.posts[postIndex] = { ...db.posts[postIndex], ...req.body };
    writeFile('db.json', db);
    res.send(db.posts[postIndex]);
  } else {
    res.status(404).send('Post negasit');
  }
});

app.delete('/posts/:id', (req, res) => {
  const db = readFile('db.json');
  const postIndex = db.posts.findIndex((p) => p.id == req.params.id);
  if (postIndex !== -1) {
    const deletedPost = db.posts.splice(postIndex, 1);
    writeFile('db.json', db);
    res.send(deletedPost);
  } else {
    res.status(404).send('Post negasit');
  }
});

app.listen(3000, () => console.log('Testam conexiunea. PORT3000'));

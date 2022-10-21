const express =  require("express");

const path =  require("path");

const app = new express();

app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/app/views'));

const { http } =  require("@serverless/cloud");

http.use(app);

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
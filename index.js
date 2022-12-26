const express = require('express');

const personRouter = require('./routes/person.route.js');
const todoRouter = require('./routes/todo.route.js');

const PORT = process.env.PORT || 5000;
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log("Url: " + request.url);
//     console.log(request.headers);
// });
// server.listen(PORT);

const app = express();
app.use(express.json());
// app.use('/', (req, res) => {
//     console.log('it works');
//     res.json('<h1>halo</h1>')
// });
app.use('/person', personRouter);
app.use('/person/:pid/todos', todoRouter);

app.listen(PORT, (err) => {
    if (err)
        console.log(err);
    else
        console.log(`SERVER STARTED ON PORT ${PORT}`);
});

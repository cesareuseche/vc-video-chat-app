const express = require('express');


const app = express();

const port = process.env.PORT || 8080;

const sever = app.listen(port, () => console.log(`Server started on port ${port}`))

app.use('/', express.static('public'))
app.get("/server", (req, res) => res.send('server its working on port 3000 as well'))

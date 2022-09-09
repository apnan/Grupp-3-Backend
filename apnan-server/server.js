const express = require('express');
const app = express();


app.get('/posts', (req, res) => {
    res.send('Hello Apnan');
});




app.listen(3000);


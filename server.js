const express = require('express');
const app = express();
const PORT = 5000;
require('dotenv').config()

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    let jobsApplied = [
        {
            companyName: "Green Wave Electronics",
            dateApplied: "september 1st, 2022"
        }
    ]
    res.send("hello world")
})

app.listen(PORT, (req, res) => {
    console.log(`listening to app at http://localhost:${PORT}`);
})

const express = require("express")
const path = require("path");
const extrasRouter = require("./controllers/extras");

const app = express()

// all request will go through assests folder
// if any file matches url endpoint, it will get serve
// example.json file is present in assets folder
// so if user hit domain/example.json, express will send example.json file in response
app.use(express.static(path.join(__dirname, 'assets')));

// if you want to serve assets only if some prefix present in url then
// you can do
app.use("/static", express.static(path.join(__dirname, 'assets')));
// here if any request comes with domain/static/example.json
// it will try to find example.json in assets folder and send if exist

// by using use mathod, you can add router on that route
app.use('/extras', extrasRouter);


app.use((req, res) => {
    res.status(404).json({ message: "Path not found", path: req.path, status: 404 });
})

app.use((err, req, res) => {
    res.status(500).json({message: "Something went wrong"});
})

app.listen(3000, ()=> {
    console.log("Server started on: localhost:3000");
})
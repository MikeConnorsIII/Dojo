//import express and store it in a varaible
const express = require("express")

//initialize express and store it in a variable
const app = express()

const port = 8000

app.use(express.json())
// parses into json
app.use(express.urlencoded({extended: true}))


const menuItems = [
    {name: "Calamari", price: 12.00},
    {name: "Lobster Roll", price: 15.00},
    {name: "Cajun Shrimp", price: 20.00},
    {name: "Crab Cakes", price: 24.00},
    {name: "Lasagna", price: 12.00}
]

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

// create
app.post("/api/menu", (req, res) => {
    console.log(res.body)
    menuItems.push(req.body)
    res.json({
        count: menuItems.length,
        results: menuItems})
})

// read all
app.get("/api/menu", (req, res) => {
    res.json({results: menuItems})
})
// read one
app.get("/api/menu/:idx", (req, res) => {
    res.json({results: menuItems[req.params.idx]})
})

// update (put)
app.put("/api/menu/:idx", (req, res) => {
    menuItems[req.params.idx] = req.body
    res.json({count: menuItems.length, results: menuItems})
})

// delete
app.delete("/api/menu/:idx", (req, res) => {
    menuItems.splice(req.params.idx, 1)
    res.json({results: menuItems})
})

app.listen(port, () => console.log('Welcome to the Death Star! You are on bridge port: ${port}'))
const express = require("express")
const app = express()
const exphbs = require("express-handlebars")

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})


app.engine('handlebars',hbs.engine())
app.set("view engine", "handlebars")

app.get("/dashboard",(_,res)=>{

    const itens = ['camisa', 'bermuda', 'tenis']



    res.render("dashboard",{itens})
})

app.get("/post",(req,res)=>{
    const post = {
        title: 'node.js',
        category: 'javascript',
        comments: 4,
    }

    res.render('blogpost',{post})
})

app.get('/blog',(req,res)=>{
    const posts = [{
        title: "javascript",
        category: "node.js",
        body:"teste",
        comments: 4 
    },
    {
        title: "python",
        category: ".anaconda",
        body:"teste",
        comments: 4 
    },
    {
        title: "java",
        category: "java",
        body:"teste",
        comments: 4 
    },
]
})


app.get("/", (req,res)=>{

    const user ={
    name: 'Carlos',
    surname: 'Mota',
    }


    const auth = false

    const apprved = true

    res.render("home",{user: user, auth, apprved})
})





app.listen(3000, ()=>{
    console.log("Server rodando...");
})
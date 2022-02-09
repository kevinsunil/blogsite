const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const articleRouter = require('./routes/articles')


mongoose.connect('mongodb://localhost/blog',{useNewUrlParser: true, useUnifiedTopology: true})
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })

app.set('view engine', 'ejs')

app.use('/articles',articleRouter)

app.get('/',(req,res)=> {
    const articles = [{
        title: 'test',
        createdAt: new Date(),
        description: 'this a short description'
    }]
    res.render("articles/index",{articles: articles})
})

app.listen(5000);
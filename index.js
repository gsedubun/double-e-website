const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// Express-handlebars layout file.
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


// Routes to render handlebars pages.
app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/destination', (req,res)=>{
    res.render('destination')
})

// Map static resources (css,js,image,video) to public folder.
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require('express')
const hbs = require('hbs');
const app = express();
require('dotenv').config()


const port = process.env.PORT;

//Handlebars

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');



//midleware Servir contenido estatico
app.use(express.static('public'))




app.get('/',  (req, res)=> {
  res.render('home', {
    nombre: 'Erland Ruiz',
    titulo: 'Curso de Node '
  })
});


app.get('/generic',  (req, res)=> {
  res.render('generic', {
    nombre: 'Erland Ruiz',
    titulo: 'Curso de Node '
  })
});

// app.get('/generic',  (req, res)=> {
//   res.sendFile(__dirname + '/public/generic.html')
// });

app.get('/elements',  (req, res)=> {
  res.render('elements', {
    nombre: 'Erland Ruiz',
    titulo: 'Curso de Node '
  })
});

// app.get('/elements',  (req, res)=> {
//   res.sendFile(__dirname + '/public/elements.html')

  
// });

app.get('/hola-mundo',  (req, res)=> {
  res.send('Hello mundo en su respectiva ruta')
})
app.get('/*',  (req, res)=> {
  res.sendFile(__dirname +'/public/404.html')

  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
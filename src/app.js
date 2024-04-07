const express = require("express"); // 1 instale expres (node_modules, package(lock).json);
const path = require("path");
const port= 3000;
const app = express();


// CONFIG

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))


// MIDDLEWARE
app.use(express.static(path.join(__dirname,'../public')));//defino archivos estaticos
app.use(express.urlencoded({extended:false})); //si o si colocar si vas a leer contenido de un formulario
app.use(express.json());

// ROUTES
const formulario = require('./routes/formulario.routes')


// ROUTERS
app.use('/', formulario);



app.listen(port,() => console.log(`http://localhost:${port}/formulario`));





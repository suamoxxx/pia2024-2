import express from 'express';
import routes from './routes/routes.users.js'
import database from './database.config.js'
import morgan from 'morgan';
import login from './controller/login.js'
import applications from './controller/applications.js'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';
import cors from 'cors'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const corsOptions = {
    origin: 'http:127.0.0.1:3006',
    optionsSuccessStatus: 200 
  }
const app = express();
app.use(cors(corsOptions));
app.set('port', process.env.PORT || 3006);
app.use(express.json())
app.use('/users', routes)//Ruta de autenticacion para los usuarios
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "view")));

//Api Rest para la ruta principal de comic-verse

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
})

//Servidor escuchando por el puerto
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}`);
})
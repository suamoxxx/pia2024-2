import express from 'express';
import routes from './routes/routes.users.js'
import database from './database.config.js'
import morgan from 'morgan';
import login from './controller/login.js'
import applications from './controller/applications.js'

const app = express();
app.set('port', process.env.PORT || 3006);
app.use(express.json())
app.use('/users', routes)//Ruta de autenticacion para los usuarios
app.use(morgan('dev'))

//Api Rest para la ruta principal de comic-verse
app.get('/',login, applications)

//Servidor escuchando por el puerto
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}`);
})
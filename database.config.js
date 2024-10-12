import mongoose from "mongoose";
const uri = process.env.URI
// Conexion a la base de datos
mongoose.connect(uri).then(db => console.log('Established connection to DB')).
catch(err=>console.log(`Refused connection ${err}`));

export default mongoose
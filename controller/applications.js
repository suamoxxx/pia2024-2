import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta principal para comic-verse

const applications = async (req, res, next)=>{
 try {
  res.json({message: "logueado"})
    const cbrFilePath = join(__dirname, 'CBR/prueba.cbr');
    //const images = await pkg.extract(cbrFilePath); 
    res.json(images)

   


 } catch (error) {
  console.log(`error in main applications ${error}`)
 } 
 
}

export default applications

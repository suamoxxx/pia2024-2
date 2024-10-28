import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Webpack toma  el archivo .js index  de react con notacion JSX  y lo empaqueta en el archivo .js bundle 
export default  {
            entry: './view/Components/index.js',
            output: {
                path:__dirname + '/view/',
                filename: 'bundle.js'
            },
            module: {
                    rules: [
                        {
                            test: /\.js$/, 
                            exclude: /node_modules/,
                            use: {
                                loader:  'babel-loader',
                                options: {
                                    presets: []
                                }
                            }
                        },
                        
                        {
                            test: /\.css$/, 
                            use:  ['style-loader','css-loader']
                         },        
                         {
                            test: /\.(png|jpe?g|gif)$/i,
                            use: [{loader: 'url-loader'}]
                         }

                        
                   ]
            }
};
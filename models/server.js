
const express = require('express')
var cors = require('cors')

class Server {

    constructor (){
        this.app = express();
        this.port = process.env.PORT || 3000;

        //paths
        this.Paths = {
            user: '/api/usuarios'
        }

        //Middlewars: funciones que se van a ejecutar cuando levante mi servidor
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //lectura y parseo del body: de esta manera cualquier información que venga desde una peticiíon post, put o delete, va a ser transformada a un formato json
        this.app.use( express.json() );

        //con la palabra clave "use", estamos diciendo que es un middleware
        this.app.use( express.static('public'));
    }

    routes (){
       this.app.use(this.Paths.user, require("../routes/userRoute"));
    }
    
    listen (){
        this.app.listen( this.port, ()=>{
            console.log("Servidor corriendo en el puerto " + this.port);
        })
    }
}

module.exports = Server;

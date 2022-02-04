import express from 'express'
import routerProductos from './router/productos.js'
import routerCarrito from "./router/carrito.js"
import DB_Mongo from './model/DB_Mongo.js'
import config from "./config.js"



if (config.TIPO_DE_PERSISTENCIA == "MONGODB") {
    /* ------- Conexión hacia mongoDB ----------- */
    // Esto es una conexión hacia mongoDB (esto me garantiza la conexión hacia la base de datos). Para verificar veo que en la consola me aparece el mensaje Base de datos conectada!
    DB_Mongo.conectarDB()
/* ------------------------------------------ */
}

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', routerProductos)
app.use('/api/productos', routerCarrito)



/* ------------ LISTEN DEL SERVIDOR --------------- */
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`))

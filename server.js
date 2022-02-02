import express from 'express'
import routerProductos from './router/productos.js'

/* ------- Conexión hacia mongoDB ----------- */
// Esto es una conexión hacia mongoDB (esto me garantiza la conexión hacia la base de datos). Para verificar veo que en la consola me aparece el mensaje Base de datos conectada!
import DB_Mongo from './model/DB_Mongo.js'
DB_Mongo.conectarDB()
/* ------------------------------------------ */

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', routerProductos)


/* ------------ LISTEN DEL SERVIDOR --------------- */
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`))

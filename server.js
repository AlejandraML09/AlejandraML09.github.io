import express from 'express'
import routerProductos from './router/productos.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', routerProductos)


/* ------------ LISTEN DEL SERVIDOR --------------- */
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor express: ${error.message}`) )
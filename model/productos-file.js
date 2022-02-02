import fs from 'fs'


function getNextId(productos) {
    let id = 1
    try { id = Number(productos[productos.length - 1].id) + 1 }
    catch { }

    return id.toString()
}

function getIndex(productos, id) {
    return productos.findIndex(prod => prod.id === id)
}

const nombreArchivo = 'productos.dat'

async function leerArchivo() {
    try {
        let productos = JSON.parse(await fs.promises.readFile(nombreArchivo, 'utf-8'))
        return productos
    }
    catch (error) {
        console.log(error.message)
        return []
    }
}

async function guardarArchivo(productos) {
    await fs.promises.writeFile(nombreArchivo, JSON.stringify(productos, null, '\t'))
}


/* -------- CRUD -> C : Create -------  */
const createProducto = async producto => {
    let productos = await leerArchivo()

    producto.id = getNextId(productos)
    productos.push(producto)

    await guardarArchivo(productos)

    return producto
}

/* -------- CRUD -> R : Read one -------  */
const readProducto = async id => {
    let productos = await leerArchivo()

    let index = getIndex(productos, id)
    let producto = productos[index] || {}
    return producto
}

/* -------- CRUD -> R : Read all -------  */
const readProductos = async () => {
    let productos = await leerArchivo()
    return productos
}

/* -------- CRUD -> U : Update one -------  */
const updateProducto = async (id, producto) => {
    let productos = await leerArchivo()

    producto.id = id
    let index = getIndex(productos, id)
    productos.splice(index, 1, producto)

    await guardarArchivo(productos)

    return producto
}

/* -------- CRUD -> D : Delete one -------  */
const deleteProducto = async id => {
    let productos = await leerArchivo()

    let index = getIndex(productos, id)
    let producto = productos.splice(index, 1)[0]

    await guardarArchivo(productos)

    return producto
}

export default {
    createProducto,
    readProducto,
    readProductos,
    updateProducto,
    deleteProducto
}
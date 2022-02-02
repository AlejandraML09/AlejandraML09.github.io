const productos = []


function getNextId() {
    let id = 1
    try { id = Number(productos[productos.length - 1].id) + 1 }
    catch { }

    return id.toString()
}

function getIndex(productos, id) {
    return productos.findIndex(prod => prod.id === id)
}

/* -------- CRUD -> C : Create -------  */
const createProducto = async producto => {
    producto.id = getNextId()
    productos.push(producto)

    return producto
}

/* -------- CRUD -> R : Read one -------  */
const readProducto = async id => {
    let index = getIndex(productos, id)
    let producto = productos[index] || {}
    return producto
}

/* -------- CRUD -> R : Read all -------  */
const readProductos = async () => {
    return productos
}

/* -------- CRUD -> U : Update one -------  */
const updateProducto = async (id, producto) => {
    producto.id = id
    let index = getIndex(productos, id)
    productos.splice(index, 1, producto)

    return producto
}

/* -------- CRUD -> D : Delete one -------  */
const deleteProducto = async id => {
    let index = getIndex(productos, id)
    let producto = productos.splice(index, 1)[0]

    return producto
}

export default {
    createProducto,
    readProducto,
    readProductos,
    updateProducto,
    deleteProducto
}
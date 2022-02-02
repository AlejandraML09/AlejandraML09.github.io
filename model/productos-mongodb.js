// Esto tampoco lo necesitamos porque MongoDB va a almacenar productos adentro de la base de datos, no en un array.
// const productos = []

// Esto no lo usamos porque ya MongoDB se encarga de calcular el próximo ID y el índice, es decir lo hace solo.
// function getNextId() {
//     let id = 1
//     try { id = Number(productos[productos.length-1].id) + 1 }
//     catch {}

//     return id.toString()
// }

// function getIndex(productos, id) {
//     return productos.findIndex( prod => prod.id === id )
// }



/* -------- CRUD -> C : Create -------  */
const createProducto = async producto => {


    return producto
}

/* -------- CRUD -> R : Read one -------  */
const readProducto = async id => {

    return {}
}

/* -------- CRUD -> R : Read all -------  */
const readProductos = async () => {
    return []
}

/* -------- CRUD -> U : Update one -------  */
const updateProducto = async (id, producto) => {
    producto.id = id

    return producto
}

/* -------- CRUD -> D : Delete one -------  */
const deleteProducto = async id => {


    return {}
}

export default {
    createProducto,
    readProducto,
    readProductos,
    updateProducto,
    deleteProducto
}
import mongoose from 'mongoose'
import DB_Mongo from '../model/DB_Mongo.js'

//--- Esquema del documento producto. ESto es almacenado en la colección productos. 
const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    // Chequear Categoría
    categoria: String,
    foto: String,
    detalles: String,
    envio: Boolean,
})


//---- Modelo del Documento almacenado en una colección - Es un esquema aplicado a una colección. Se pone el nombre de la colección, que es "productos" y el esquema del documento para ser almacenado.
const ProductoModel = mongoose.model('productos', productoSchema)



/* -------- CRUD -> C : Create -------  */
const createProducto = async producto => {
    if (!DB_Mongo.conexionOk) return {}

    try {
        const productoSave = new ProductoModel(producto)
        // Con esto guardamos en la base de datos. 
        await productoSave.save()

        let productos = await ProductoModel.find({}).lean()
        let productosGuardado = productos[productos.length - 1]
        // Retornamos el producto que incorporamos.
        return DB_Mongo.genIdKey(productosGuardado)
    }
    catch (error) {
        console.log(`Error en createProducto: ${error.message}`)
        return {}
    }
}

/* -------- CRUD -> R : Read one -------  */
const readProducto = async id => {
    if (!DB_Mongo.conexionOk) return {}

    try {
        let producto = await ProductoModel.findOne({ _id: id }).lean()
        //console.log(producto)
        return DB_Mongo.genIdKey(producto)
    }
    catch (error) {
        console.log(`Error en readProducto: ${error.message}`)
        return {}
    }
}

/* -------- CRUD -> R : Read all -------  */
const readProductos = async () => {
    if (!DB_Mongo.conexionOk) return []

    try {
        let productos = await ProductoModel.find({}).lean()
        //console.log(productos)
        return DB_Mongo.genIdKey(productos)
    }
    catch (error) {
        console.log(`Error en readProductos: ${error.message}`)
        return {}
    }
}

/* -------- CRUD -> U : Update one -------  */
const updateProducto = async (id, producto) => {
    if (!DB_Mongo.conexionOk) return {}

    try {
        await ProductoModel.updateOne({ _id: id }, { $set: producto })

        let productoActualizado = await ProductoModel.findOne({ _id: id }).lean()

        return DB_Mongo.genIdKey(productoActualizado)
    }
    catch (error) {
        console.log(`Error en updateProducto: ${error.message}`)
        return {}
    }

}

/* -------- CRUD -> D : Delete one -------  */
const deleteProducto = async id => {
    if (!DB_Mongo.conexionOk) return {}

    try {

        let productoBorrado = await ProductoModel.findOne({ _id: id }).lean()
        await ProductoModel.deleteOne({ _id: id })

        return DB_Mongo.genIdKey(productoBorrado)
    }
    catch (error) {
        console.log(`Error en updateProducto: ${error.message}`)
        return {}
    }

}

export default {
    createProducto,
    readProducto,
    readProductos,
    updateProducto,
    deleteProducto
}
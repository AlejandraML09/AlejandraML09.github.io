class CarritoController {

    constructor() {
        try {
            carritoModel.inicializar(JSON.parse(localStorage.getItem("carrito")) || [])
        }
        catch {
            carritoModel.inicializar([])
            localStorage.setItem("carrito", carritoModel.obtener())
        }
    }
    agregarAlCarrito(producto) {
        if (!carritoModel.productoExiste(producto)) {
            producto.cantidad = 1
        }
        // Si el producto existe, lo que hago es obtener ese producto del carrito y le aumento la cantidad.
        else {
            let productoDeCarrito = carritoModel.obtenerProducto(producto)
            productoDeCarrito.cantidad++
        }
        // Guardar es el método que se encuentra en el modelo carrito.js
        carritoModel.guardar(producto)
        // Cada vez que agreguemos un producto lo vamos a persistir ahí. 
        localStorage.setItem("carrito", JSON.stringify(carritoModel.obtener()))
    }
    async borrarProducto(id) {
        console.log("borrarProducto", id)
        // Cada vez que borro un producto del carrito, guardo todo de nuevo en el localStorage
        carritoModel.borrar(id)
        localStorage.setItem("carrito", JSON.stringify(carritoModel.obtener()))
        //Una vez que borramos el carrito y llamamos al localStorage, lo llamo acá y obtengo el carrito y se refresca de nuevo lo que se ve.
        await renderCarrito(carritoModel.obtener())
    }
    // La idea es crear un servicio para que mande todo a la nube. El controlador carrito debe usar un servicio que basicamente lo envie
    async enviarCarrito() {
        var elemSectionCarrito = document.querySelector(".section-carrito")
        elemSectionCarrito.innerHTML = "<h2>Enviando Carrito...<h2>"
        // Envio al carrito al backend
        await carritoService.guardarCarrito(carritoModel.obtener())
        elemSectionCarrito.innerHTML = "<h2>Carrito Enviado!<h2>"
        //Borrando el carrito del modelo y del local storage porque ya se envió
        carritoModel.inicializar([])
        localStorage.setItem("carrito", carritoModel.obtener())


        // ------ cierro la ventana del menú del carrito un tiempo después ------
        setTimeout(() => {
            elemSectionCarrito.classList.remove('section-carrito--visible')
            mostrarCarrito = false
        }, 1500)
    }

}

const carritoController = new CarritoController()
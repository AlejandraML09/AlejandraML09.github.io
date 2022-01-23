let mostrarCarrito = false;


// Modificación 18/01/2022
// Muestra los productos que se le pasen por parametro en pantalla
async function renderCarrito(carrito) {
    // Obtiene la plantilla inicio.hbs (plantilla de Handlebars)
    let plantilla = await fetch('vistas/carrito.hbs').then(r => r.text())
    // compile the template
    var template = Handlebars.compile(plantilla);
    // Le pasa a la plantilla los productos que tiene que mostrar
    let html = template({ carrito: carrito });
    // Pone en el elemento con clase "listado-productos" a los elementos estos generados en base a la plantilla y los productos
    // que se le pasaron a la plantilla
    // Modificación 18/01/2022 - Acá usamos la class cards-container del HTML - No sé si no va la clase "card-category-container"
    document.querySelector(".section-carrito").innerHTML = html
        
}

function initCarrito() {
    let btnCarrito = document.querySelector(".search-bar__carrito-container")
    let elemSectionCarrito = document.querySelector(".section-carrito")

    btnCarrito.addEventListener("click", async () => {
        mostrarCarrito = !mostrarCarrito
        if (mostrarCarrito) {
            await renderCarrito(carritoModel.obtener())
            elemSectionCarrito.classList.add("section-carrito--visible")
        }
        else {
            elemSectionCarrito.classList.remove("section-carrito--visible")
        }
    })
}

initCarrito()
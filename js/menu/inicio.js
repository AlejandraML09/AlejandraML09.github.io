// /*Acá creamos varias Cards*/
// var keyboardCard1 = new Card("teclado-logitech.jpg", "Logitech Series G Prodigy G213", "Teclado Gamer Logitech Serie G Prodigy G213 QWERTY.Lenguaje español.Color Negro con luz RGB.", "$7.028");
// var keyboardCard2 = new Card("Teclado-gamer-HyperX.jpg", "HyperX Alloy Core", "Teclado gamer HyperX Alloy Core RGB QWERTY.Lenguaje español latinoamérica.Color negro con luz RGB.", "$13.712");
// var keyboardCard3 = new Card("teclado-razer.jpg", "Razer Huntsman Tournament Edition", "Teclado Gamer Razer Huntsman Tournament Edition Qwerty Linear Optical. Lenguaje Inglés US. Color Negro con Luz Rgb.", "$16.000");
// var keyboardCard4 = new Card("redragon-teclado.jpg", "Redragon Magic Wand Pro", "Teclado Gamer Redragon Magic Wand Pro K587 - PRO QWERTY Redragon Opto - Mecánico.Lenguaje español latinoamérica.Color negro con luz RGB.", "$8.499");

// arrayKeyboards = [keyboardCard1, keyboardCard2, keyboardCard3, keyboardCard4];

// var microphoneCard1 = new Card("microfono_razer.jpg", "Razer Seiren Mini", "Microfóno Razer Seiren Mini condensador supercardioide rosa cuarzo.", "$8.899");
// var microphoneCard2 = new Card("microfono_hyperX.jpg", "HyperX QuadCast", "Micrófono HyperX QuadCast condensador multipatrón negro.", "$13.450");
// var microphoneCard3 = new Card("microfono_yeti.png", "Blue Yeti X Profesional", "Blue Yeti X, micrófono condensador USB profesional con indicadores de alta resolución, iluminación LED y efectos Blue VOICE para gaming, streaming y podcasting en PC / Mac.", "$15.530");
// var microphoneCard4 = new Card("microfono_snowball.jpg", "Blue Snowball Ice", "Recomendado para computadora, grabaciones, streaming,instrumentos, voces, podcast. Formato: de mesa. Conectores de salida: usb.", "$7.499");

// arrayMicrophones = [microphoneCard1, microphoneCard2, microphoneCard3, microphoneCard4];

// var headsetsCard1 = new Card("headset_hyperX.jpg", "HyperX Cloud II", "Compatible con PS4 y Xbox One. Micrófono flexible incorporado. Tipo de conector: Jack 3.5 mm.", "$16.065");
// var headsetsCard2 = new Card("headset_logitech.png", "Logitech Series G733", "Compatible con PS4. Alcance inalámbrico de 20 m.La batería dura 29 h.Con micrófono incorporado.Sonido superior y sin límites.", "$18.600");
// var headsetsCard3 = new Card("headset_razer.png", "Razer Kraken 7.1", "Motor avanzado de sonido envolvente virtual 7.1 Micrófono digital de alta calidad. Diseñado para una mayor comodidad durante el juego. Con Synapse 2.0. Potentes diafragmas que ofrecen un audio de juego de máxima calidad.", "$16.000");
// var headsetsCard4 = new Card("headset_redragon.png", "Redragon Zeus black", "Compatible con PS4, Xbox One y Nintendo Switch y PS3.Con micrófono incorporado.Tipo de conector: Jack 3.5 mm / USB. Sonido superior y sin límites.", "$7.409");

// arrayHeadsets = [headsetsCard1, headsetsCard2, headsetsCard3, headsetsCard4];

// function loadCards() {
//     putCardsInContainerWithID(arrayKeyboards, "keyboard-container");

//     putCardsInContainerWithID(arrayMicrophones, "microphones__container");

//     putCardsInContainerWithID(arrayHeadsets, "headsets__container");

// }

// function initInicio() {
//     loadCards();
// }


// Modificación 18/01/2022
// Muestra los productos que se le pasen por parametro en pantalla
function renderCards(productos) {
    // Obtiene la plantilla inicio.hbs (plantilla de Handlebars)
    fetch('vistas/inicio.hbs')
        // Se queda solo con el texto
        .then(r => r.text())
        .then(plantilla => {
            // compile the template
            var template = Handlebars.compile(plantilla);
            // Le pasa a la plantilla los productos que tiene que mostrar
            let html = template({ productos: productos });
            // Pone en el elemento con clase "listado-productos" a los elementos estos generados en base a la plantilla y los productos
            // que se le pasaron a la plantilla
            // Modificación 18/01/2022 - Acá usamos la class cards-container del HTML - No sé si no va la clase "card-category-container"
            document.querySelector('.cards-container').innerHTML = html
        })
}

// Modificación 18/01/2022 - Esto recibe el id - Todo el código de inicio rige cuando está cargada la plantilla de vista de inicio.html y en inicio.html (en .cards-container) está cargado todo. Nosotros tenemos los productos en el modelo, el modelo es una capa en nuestro desarrollo que nos permite interactuar con los productos. 
function agregarAlCarrito(id) {
    let producto = productosModel.obtener(id)
    // Este controlador agrega el carrito al modelo
    carritoController.agregarAlCarrito(producto)
}


// Modificación 18/01/2022
async function initInicio() {
    console.warn("initInicio")
    // Modificación 18/01/2022 - Le ponemos la función inicializar que se encuentra en products.js en Modelos.
    productosModel.inicializar(await productosController.obtenerProductos()) // []
    let productos = productosModel.obtener()
    // Mostramos los productos en pantalla
    renderCards(productos)
    let lg = productos.length
    // Mostramos la cantidad de productos -> Usamos operador ternario para que si NO hay nada en productos.length (o sea no hay productos), que no muestre el mensaje.
    document.querySelector(".card-category-container h1").innerHTML = lg ? `Se encontraron ${lg} productos` : ""
}



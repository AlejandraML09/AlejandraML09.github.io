//Funcion para simplificar los llamados HTTP.
// Con esto obtengo el HTML que yo quiera, así cuando la página carga veo el contenido del HTML.
// si hacemos ajax('plantillas/alta.html') va a enviar un request de tipo GET, que va a intentar conseguir el archivo 'plantillas/alta.html'
// si hacemos ajax('plantillas/alta.html', 'post') va a enviar un request de tipo POST, hacia la URL donde está 'plantillas/alta.html'
function ajax(url, metodo) {
    let xhr = new XMLHttpRequest
    xhr.open(metodo || 'get', url)
    xhr.send()

    return xhr
}

// Dado un id, obtiene un archivo.
// Por ejemplo, si le pedimos el archivo del id 'alta', nos va a devolver 'plantillas/alta.html'
function getNombreArchivo(id) {
    return 'plantillas/' + id + '.html'
}


/**
 * Dado un id de página, pone en el elemento main el contenido de esa plantilla.
 * Por ejemplo, si hacemos cargarPlantilla('nosotros'), en el main se va a ver el contenido de nosotros.html
 * 
 */
function cargarPlantilla(id) {
    let main = document.querySelector('main')
    let archivo = getNombreArchivo(id)
    let xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if (xhr.status = 200) {

            //Cargo el HTML de la plantilla elegida
            main.innerHTML = xhr.response
            //Cargo el JS de la plantilla elegida -> Acá se inicializan las cosas (como cards)
            initJS(id)
        }
    })
}

/* Función que dado un id corre la función de incialización correspondiente 
Ej = Si yo corro initJS("inicio"), se va a correr la función de incialización de inicio.js
*/
function initJS(id) {
    if (id == "inicio") {
        initInicio();
    }
}



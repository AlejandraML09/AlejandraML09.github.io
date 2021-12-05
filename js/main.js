class Card {
    constructor(image, heading, description, price) {
        this.image = image;
        this.heading = heading;
        this.description = description;
        this.price = price;
    }
    getCardHTML() {
        return `
            <a href="#" class="card">
                            <article class="card__article">
                                <div class="card__flip">
                                    <div class="card__image-container">
                                        <img
                                            src="imagenes/${this.image}"
                                            alt="Chromecast"
                                            class="card__image"
                                        />
                                    </div>
                                    <div class="card__content">
                                        <div class="card__heading">
                                            <h2>
                                                ${this.heading}
                                              </h2>
                                            <h3>${this.price}</h3>
                                        </div>
                                        <div class="card__description">
                                            <p>
                                           ${this.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </a>
`
    }
}


var card1 = new Card("teclado-logitech.jpg", "Logitech Series G Prodigy G213", "Teclado Gamer Logitech Serie G Prodigy G213 QWERTY.Lenguaje español.Color Negro con luz RGB.", "$7.028");

var card2 = new Card("Teclado-gamer-HyperX.jpg", "HyperX Alloy Core", "Teclado gamer HyperX Alloy Core RGB QWERTY.Lenguaje español                latinoamérica.Color negro con luz RGB.", "$13.712");

var card3 = new Card("teclado-razer.jpg", "Razer Huntsman Tournament Edition", "Teclado Gamer Razer Huntsman Tournament Edition Qwerty Linear Optical. Lenguaje Inglés US. Color Negro con Luz Rgb.", "$16.000");

var card4 = new Card("redragon-teclado.jpg", "Redragon Magic Wand Pro", " Teclado Gamer Redragon Magic Wand Pro K587 - PRO QWERTY Redragon Opto - Mecánico.Lenguaje español latinoamérica.Color negro con luz RGB.", "$8.499");



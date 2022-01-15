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

function putCardsInContainerWithID(arrayCards, containerID) {
    var keyboardsContainer = document.getElementById(containerID);
    for (eachCard of arrayCards) {
        keyboardsContainer.innerHTML += eachCard.getCardHTML();
    }

}
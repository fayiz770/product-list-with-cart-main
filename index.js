import desserts from '/desserts.js'
const container = document.getElementById('container')

const newDessertsArray = Array.from(desserts)

const width = () => window.innerWidth > 768 ? true : false;

const dessertsElements = newDessertsArray.forEach(dessert => {
    container.innerHTML += 
    `   <div class="dessert-container">
            <div class="image-and-card-button-container">
                <img class="main-image" src="assets/images/${width ? dessert.imageDesktop : dessert.imageMobile}" alt="${dessert.description}">
                <div class="floting-cart-button">
                    <img src="assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart">
                    <span>Add to Cart</span>
                </div>
            </div>
            <div class="info-container">
                <p class="name">${dessert.name}</p>
                <p class="description">${dessert.description}</p>
                <p class="cost">$${dessert.cost}</p>
            </div>
        </div>
    `
})

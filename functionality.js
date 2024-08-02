import desserts from "./desserts.js"


const stuffs = []
const findDessert = (id) => desserts.find(dessert => dessert.id === id)
const stuffEl = document.getElementById('stuffs-container')

document.addEventListener('click', (e) => render(e))

const preparingStuffs = (e) => {
    let id = Number(e.target.dataset.id)
    const dessert = findDessert(id)
    const compare = stuffs.find(stuff => stuff.id === dessert.id)
    if(compare){
        compare.valume += 1
    }else {
        stuffs.push(dessert)
    }
}


const render = (e) => {
    preparingStuffs(e)
    const wow = stuffs.map(stuff => {
        `
            <div class="stuff">
                <div class="info">
                <p class="cart-stuff-name">${stuff.name}</p>
                <div class="cost-calculation">
                    <span class="x">${stuff.valume}x</span>
                    <span class="at">@ ${stuff.cost}</span>
                    <span class="total">$${stuff.valume * stuff.cost}</span>
                </div>
                </div>
                <div class="x-icon">
                <img src="assets/images/icon-remove-item.svg" alt="icon-remove-item">
                </div>
            </div>
        `
    })
    console.log(wow)
}
import desserts from "./desserts.js"

// constant variables

const stuffs = []
const stuffEl = document.getElementById('stuffs-container')
const summary = document.getElementById('summary')
const delivery = document.getElementById('delivery')
const button = document.getElementById('button')
const summaryTotal = document.getElementById('summary-total')
const numberOfDessertsSelected = document.getElementById('number-of-desserts-selected')

// letral variables

let total = 0

// find the selected dessert

const findDessert = id => desserts.find(dessert => dessert.id === id)

document.addEventListener('click', e => {
    const id = e.target.dataset.id
    const increment = Number(e.target.dataset.increment)
    const decrement = Number(e.target.dataset.decrement)
    const selectedAddToCartButton = document.getElementById('I' + id)
    
    if(id){
        render(e)
        selectedAddToCartButton.innerHTML = 
        `   
        <div class="decrement pointer" data-decrement="${id}">
        <img data-decrement="${id}" src="assets/images/icon-decrement-quantity.svg" alt="icon-remove-item">
        </div>
        <span class="increment-number">1</span>
        <div class="increment pointer" data-increment="${id}">
        <img data-increment="${id}" src="assets/images/icon-increment-quantity.svg" alt="icon-remove-item">
        </div>
        `
        selectedAddToCartButton.style.background = 'var(--red)'
        selectedAddToCartButton.style.color = 'white'
    }

    if(increment){
        render(e)
    }

    if(decrement){
        render(e)
    }
})


const preparingStuffs = e => {
    const id = Number(e.target.dataset.id)
    const increment = Number(e.target.dataset.increment)
    const decrement = Number(e.target.dataset.decrement)
    if(id){
        const dessert = findDessert(id)
        const compare = stuffs.find(stuff => stuff.id === dessert.id)
        if(compare){
            compare.valume += 1
        }else {
            stuffs.push(dessert)
        }
    }

    if(increment){
        const dessert = findDessert(increment)
        const compare = stuffs.find(stuff => stuff.id === dessert.id)
        if(compare){
            compare.valume += 1
        }
    }

    if(decrement){
        const dessert = findDessert(decrement)
        const compare = stuffs.find(stuff => stuff.id === dessert.id)
        if(compare){
            compare.valume -= 1
            if(compare.valume === 0){
                console.log(`s${decrement}`)
                const element = document.getElementById(`s${decrement}`)
                element.style.display = 'none'
            }
        }
    }
}


const render = e => {
    preparingStuffs(e)
    stuffEl.innerHTML = ''
    stuffs.forEach(stuff => {
        stuffEl.innerHTML += 
        `
            <div class="stuff" id="s${stuff.id}">
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
    
    numberOfDessertsSelected.textContent = stuffs.length
    summary.style.display = 'flex'
    delivery.style.display = 'flex'
    button.style.display = 'block'
    
    totalCalculate()
    summaryTotal.textContent = "$" + total
}

const totalCalculate = () => {
    total = 0
    stuffs.forEach(stuff => total += (stuff.valume * stuff.cost))
}
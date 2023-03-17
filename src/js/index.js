const cards = document.querySelectorAll('.card')
const btn_back = document.querySelector('.btn-back')
const btn_prev = document.querySelector('.btn-prev')
let contCard = 0

btn_prev.addEventListener('click', ()=> {
    const totalCard = cards.length - 1;
    if(contCard == totalCard){
        return;
    }
    
    contCard++   
    removeCard()
    addCard()
})

btn_back.addEventListener('click', ()=> {
    if(contCard === 0){
        return;
    }
    contCard--
    removeCard()
    addCard()
})

function removeCard() {
    cards.forEach(card => {
        console.log('card', card)
        card.classList.remove('selected')
    })
}

function addCard(){
    cards[contCard].classList.add('selected')
}
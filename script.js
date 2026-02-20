let btnEl = document.querySelector('.button')
let hTagEl = document.querySelector('.h1')
btnEl.addEventListener('click',() => {
    hTagEl.textContent = 'Clicked!'
})
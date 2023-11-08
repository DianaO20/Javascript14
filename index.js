let currnetValue = localStorage.getItem('count')?localStorage.getItem('count') : 0

const container = document.getElementById('count')


const count = document.createElement('p')
count.innerText =currnetValue
const incrementButton =document.createElement('button')
incrementButton.innerText ='+'
const decrementButton =document.createElement('button')
decrementButton.innerText ='-'




const incrementCount =() =>{
    currnetValue++
count.innerText = currnetValue
localStorage.setItem('count', currnetValue)
}
incrementButton.addEventListener('click', incrementCount)

const decrementCount =() =>{
    currnetValue--
count.innerText = currnetValue
localStorage.setItem('count', currnetValue)
}
decrementButton.addEventListener('click', decrementCount)

container.appendChild(count)
container.appendChild(incrementButton)
container.appendChild(decrementButton)
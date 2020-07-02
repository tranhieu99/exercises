window.addEventListener('DOMContentLoaded', function() {
let guessBtn = document.getElementById('guessButton')
let randomNumber = Math.floor(Math.random() * 11)
let limit = 10;


const handleBtnClick = () =>{
let inputValue = document.querySelector('#number').value
let message = document.querySelector('#message')
if(inputValue > 10){
    message.innerHTML = '<p class="red"> Please Input a number less than 10 </p>'
}
else{
    console.log(randomNumber)
    if(parseInt(randomNumber) === parseInt(inputValue)){
        message.innerHTML = '<p class="success"> Yeah you are the lord of the guess </p>'
    }
    else if(parseInt(randomNumber) < parseInt(inputValue)){
        message.innerHTML = `<p class="red"> your guess are too high. You have ${limit} left </p>`
        limit -= 1;
    }
    else{
        message.innerHTML = `<p class="red"> your guess are too low. You have ${limit} left </p>`
        limit -= 1;
    }
    if(limit <= 0){
        message.innerHTML = `<p class="red"> Limited </p>`

    }
}
}
guessBtn.addEventListener('click', handleBtnClick)
});
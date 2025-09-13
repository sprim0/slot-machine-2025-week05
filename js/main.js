

let coins = 1000 
document.querySelector ('span.coins').innerText = coins

document.querySelector ('button.minBtn').addEventListener('click', minBtn)
function minBtn (){
    addSubtract(5)
}
document.querySelector ('button.maxBtn').addEventListener('click', maxBtn)
function maxBtn (){
    addSubtract(50)
}
function addSubtract(bet){
    coins -= bet
    if( coins <=0){
        window.alert('Insert More Coins')
    }
    document.querySelector ('span.coins').innerText = coins

let images =[ ':img/chase.jpg', ':img/Skye.png', ':img/rocky.jpg' ]
let img1 = Math.floor(Math.random()*3)
document.querySelector ('.reel1 img').src=images [img1]
let img2 = Math.floor(Math.random()*3)
document.querySelector ('.reel2 img').src=images [img2]
let img3 = Math.floor(Math.random()*3)
document.querySelector ('.reel3 img').src=images [img3]

if(img1 == img2 && img3 == img2){
coins += bet*10 
document.querySelector ('span.coins').innerText = coins
}
}




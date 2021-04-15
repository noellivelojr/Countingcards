cardCount1 = () => {
    let count = 0; 
    let seq = document.getElementById('sequence').value;   
    cardFun = (card) => {    
        card == 2 || card == 3 || card == 4 || card == 5 || card == 6 ? count ++ : console.log()
        card == 7 || card == 8 || card == 9 ? count : console.log()
        card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A' ? count -- : console.log()
        result = count + (count > 0 ? " Bet" : " Hold");
        return count;
    }
    if(seq === '1'){
        document.querySelector('#score', cardFun(2) + cardFun(3) + cardFun(4) + cardFun(5) + cardFun(6)).textContent = result;
    }
    if(seq === '2'){
        document.querySelector('#score', cardFun(7) + cardFun(8) + cardFun(9)).textContent = result;
    }
    if(seq === '3'){
        document.querySelector('#score', cardFun(10) + cardFun('J') + cardFun('Q') + cardFun('K') + cardFun('A')).textContent = result;
    }
    if(seq === '4'){
        document.querySelector('#score', cardFun(3) + cardFun(7) + cardFun('Q') + cardFun(8) + cardFun('A')).textContent = result;
    }
    if(seq === '5'){
        document.querySelector('#score', cardFun(2) + cardFun('J') + cardFun(9) + cardFun(2) + cardFun(7)).textContent = result;
    }
    if(seq === '6'){
        document.querySelector('#score', cardFun(2) + cardFun(2) + cardFun(10)).textContent = result;
    }
    if(seq === '7'){
        document.querySelector('#score', cardFun(3) + cardFun(2) + cardFun('A') + cardFun(10) + cardFun('K')).textContent = result;
    }
}
reset = (clear) =>{
    clear = document.querySelector("#score").textContent = "-----";
}

 
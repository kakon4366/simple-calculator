
document.getElementById('calc-btns').addEventListener('click', function(event){
    const number = event.target.innerText;
    const displayInput = document.getElementById('display-input');

    
    // switch 
    if(number.length <= 3){

    switch(number){
        case 'C':
            displayInput.value = '';
            break;
        case 'DEL':
            displayInput.value = displayInput.value.slice(0, -1);
            break;
        case '=':
            displayInput.value = eval(displayInput.value);
            break;
        case '+/-':
            if(displayInput.value > 0){
                displayInput.value = '-' + displayInput.value;
            }else if(displayInput.value < 0){
                displayInput.value = displayInput.value.replace('-', '');
                // displayInput.value = '+' + displayInput.value;
            }
            break;
        default:
            displayInput.value += number;
    }

    }

    console.log(typeof displayInput.value);
})


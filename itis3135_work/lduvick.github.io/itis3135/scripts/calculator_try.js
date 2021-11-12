const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display= document.querySelector('.calculator__display');
const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum

keys.addEventListener('click', e=>{
    if(e.target.matches('button')){
        const key=e.target;
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        Array.from(key.parentNode.children)
        .forEach(k=>k.classList.remove('is-depressed'))
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-depressed')
            
            calculator.dataset.previousKeyType = 'operator'
          }
    }
})
const key=e.target;
const action=key.dataset.action;
if (action !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
}
if(!action){
    if(displayedNum==='0'||previousKeyType==='operator'||previousKeyType==='calculate'){
        display.textContent=keyContent;
    }else{
        display.textContent=displayedNum+keyContent;
    }
    calculator.dataset.previousKey='number'
    console.log('number key');
}
if(action==='add'||action==='multiply'||action==='subtract'||action==='divide'){
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
    // Note: It's sufficient to check for firstValue and operator because secondValue always exists
    if (firstValue &&operator &&previousKeyType !== 'operator' &&previousKeyType !== 'calculate') {
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue
        calculator.dataset.firstValue = calcValue
      } else {
        calculator.dataset.firstValue = displayedNum
      }
      
    key.classList.add('is-depressed');
    console.log('operator key');
    calculator.dataset.firstValue=displayedNum
    calculator.dataset.operator=action
}
if(action==='decimal'){
    if(!displayedNum.includes('.')){
        display.textContent=displayedNum+'.';
    }else if(previousKeyType==='operator'||previousKeyType==='calculate'){
        display.textContent='0.'
    }
    calculator.dataset.previousKey='decimal';
    console.log('decimal key');
}
if(action==='calculate'){
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue=displayedNum;
    if(firstValue){
        if(previousKeyType==='calculate'){
            firstValue=displayedNum
            secondValue=calculator.dataset.modValue
        }
        display.textContent=calculate(firstValue,operator, secondValue)
    }
    console.log('calculate key');
    calculator.dataset.modValue=secondValue
    calculator.dataset.previousKeyType='calculate'
}
if(action==='clear'){
    console.log('clear key');
    if(key.textContent==='AC'){
        calculator.dataset.firstValue=''
        calculator.dataset.modValue=''
        calculator.dataset.operator=''
        calculator.dataset.previousKeyType=''
    }else{
        key.textContent='AC'
    }
    display.textContent=0
    
    calculator.dataset.previousKeyType='clear'
}
const calculate=(n1,operator,n2)=>{
    const firstNum=parseFloat(n1)
    const secondNum=parseFloat(n2)
    if(operator==='add'){
        return firstNum+secondNum
    }
    if(operator==='subtract'){
        return firstNum-secondNum
    }
    if(operator==='multiply'){
        return firstNum*secondNum
    }
    if(operator==='divide'){
        return firstNum/secondNum
    }
    return result
}
if (firstValue && operator && previousKeyType !== 'operator') {
    const calcValue = calculate(firstValue, operator, secondValue)
    display.textContent = calcValue 
    calculator.dataset.firstValue = calcValue
  } else {
    // If there are no calculations, set displayedNum as the firstValue
    calculator.dataset.firstValue = displayedNum
  }  
  key.classList.add('is-depressed')
  calculator.dataset.previousKeyType = 'operator'
  calculator.dataset.operator = action
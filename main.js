const DisValue = (content) =>{
    display.value += content
}

const clrScrn = () =>{
    display.value = ""
    display.placeholder = 0
}
const cal = () =>{
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = ""
        display.placeholder = "Syntax error"
    }
            
}
const delNum = () => {
    display.value = display.value.slice(0,-1)
}
const expo = () => {
    if(display.value == 0){
        display.value = ""
        display.placeholder = "Enter a number"
    }else{
        display.value = display.value ** 2
    }
}
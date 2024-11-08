let decrem = document.getElementById("decrement");
let increm = document.getElementById("increment");
let clear = document.getElementById("clear");
let counter = document.getElementById("counter")


let count = 0;

function updateDisplay(){
    document.getElementById("counter").textContent = "your current count is : "+ count;
    let warning = document.getElementById("warning");
    
    if(count === 0){
        warning.textContent = "'Error : Cannot go below 0'"
        warning.style.color = "red"
        decrem.style.cursor = "not-allowed"
    }else{
        warning.textContent = ""
        decrem.style.cursor = "pointer"
    }

}

increm.addEventListener('click',() =>{
    count++;
    updateDisplay();

})

decrem.addEventListener('click', () =>{
    if(count > 0) {
        count--;
    }
    updateDisplay();
})

clear.addEventListener('click', () =>{
    count =  0;
    // warning.textContent = "'Number not less then zero'"

    // // warning.textContent = "'Number not less then Zero'"
    // warning.style.color = "red"
    updateDisplay();
})


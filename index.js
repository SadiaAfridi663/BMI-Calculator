const mainContainer = document.querySelector("div")
const inputContainer = document.getElementById("inputs")
const catagory = document.getElementById("catagory")
const weightInput = document.getElementById("weight")
const heightInput = document.getElementById("height")
var calculateBtn = document.getElementById("calculatebtn")

calculateBtn.addEventListener("click", function(){
    var weight = +weightInput.value
var height = +heightInput.value

if((!weightInput.value.trim() || !heightInput.value.trim()) || (height <= 0 || weight <= 0)){

    console.log("or if")
    if(!heightInput.value.trim()  ){
        console.log("height if")
        heightError.textContent = "please enter height " 
    }
    else if(height <= 0){
        heightError.textContent = "height must be positive"
    }
    heightInput.addEventListener('input', function() {
            console.log("height input")
            heightError.textContent = "";
    });
    
    if(!weightInput.value.trim() ){
        console.log("weight if")
        weightError.textContent = "please enter weight "
    }
    else if(weight <= 0){
        console.log("weight else if")
        weightError.textContent = "weight must be positive"
    }

    weightInput.addEventListener('input', function() {
        console.log("weight input")
        weightError.textContent = "";
        });
}
else{
    var BMI = (weight / (height ** 2)).toFixed(2)
    if(BMI > 0 && BMI < 18.5){
        catagory.textContent = `UnderWeight: BMI ${BMI}`
    }
    else if(BMI >= 18.5 && BMI < 24.9){
        catagory.textContent = `Normal Weight: BMI ${BMI}`
    }
    else if(BMI >= 25 && BMI < 29.9){
        catagory.textContent = `OverWeight: BMI ${BMI}`
    }else{
        catagory.textContent = `Obesity: BMI ${BMI}`
    }
}
})

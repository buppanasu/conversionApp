


let convertBtn = document.getElementById("convert-btn")
const lengthDisplay = document.getElementById("length")
const volumeDisplay = document.getElementById("volume")
const massDisplay = document.getElementById("mass")

lengthDisplay.innerHTML = `<h2>Length (Meter/Feet)</h3>`
volumeDisplay.innerHTML = `<h2>Volume (Liters/Gallons)</h2>`
massDisplay.innerHTML = `<h2>Mass (Kilograms/Pounds)</h2>`

function resetDisplay(){
    lengthDisplay.innerHTML = `<h2>Length (Meter/Feet)</h3>`
    volumeDisplay.innerHTML = `<h2>Volume (Liters/Gallons)</h2>`
    massDisplay.innerHTML = `<h2>Mass (Kilograms/Pounds)</h2>`
}


convertBtn.addEventListener("click",function(){
    resetDisplay()
    let inputNum = document.getElementById("input-number").value
    lengthArray = convertForLength(inputNum)
    volumeArray = convertForVolume(inputNum)
    massArray = convertForMass(inputNum)
    lengthDisplay.innerHTML += `<p>${inputNum} meters = ${lengthArray[0]} feet | ${inputNum} feet = ${lengthArray[1]} meters</p>`
    volumeDisplay.innerHTML += `<p>${inputNum} gallons = ${volumeArray[0]} gallons | ${inputNum} gallons = ${volumeArray[1]} liters</p>`
    massDisplay.innerHTML += `<p>${inputNum} kilos = ${massArray[0]} pounds | ${inputNum} pounds = ${massArray[1]} kilos</p>`

    
})

function convertForLength(x){
    xMetersToFeet = x * 3.28084
    xFeetToMeters = x * 0.3048
    return [xMetersToFeet, xFeetToMeters]
}

function convertForVolume(x){
    xLitresToGallons = x * 0.251472
    xGallonsToLitres = x * 3.78541
    return [xLitresToGallons, xGallonsToLitres]
}

function convertForMass(x){
    xKilosToPounds = x * 2.20462
    xPoundsToKilos = x * 0.453592
    return [xKilosToPounds, xPoundsToKilos]
}
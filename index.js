// Code your solution in this file!

function distanceFromHqInBlocks(street){
    return Math.abs(street - 42)
}

const feet = 264
function distanceFromHqInFeet(street) {   
    return distanceFromHqInBlocks(street) * feet
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * feet
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}










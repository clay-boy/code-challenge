

function calculateDemeritPoints () {
    let speed = parseInt(prompt("Enter the speed of the car (km/h): "));

    if (speed < 70) {
        console.log("OK");
    } else {
        let demeritPoints = Math.floor((speed -70) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);        }
    }
}

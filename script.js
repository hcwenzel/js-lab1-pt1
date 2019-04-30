"use strict";

let userHealth = 40;
let grantHealth = 10;
let userDamage = 0;
let grantDamage = 0;
let userWins = 0;
let grantWins = 0;

let play = prompt("Do you want to play a game?", "Yes or No");
if (play === "Yes") {
    let user = prompt("Please enter your name.");
    while (userWins < 3 && grantWins < 1) {
        if (userHealth > 0 && grantHealth > 0) {
            userDamage = Math.floor((Math.random() * 2) + 1);
            grantDamage = Math.floor((Math.random() * 2) + 1);
            userHealth -= userDamage;
            console.log(`${user} has ${userHealth} health and ${userWins} wins.`);
            grantHealth -= grantDamage;
            console.log(`The Almighty Grant has ${grantHealth} health and ${grantWins} wins.`);
            if (grantHealth <= 0) {
                console.log(`${user} beat The Almighty Grant!`)
                userWins++;
                grantHealth = 10;
            } if (userWins === 3) {
                console.log(`${user} wins!`)
                break;
            } if (userHealth <= 0) {
                console.log(`${user} has died. The Almighty Grant wins.`)
                break;
            }
        }
    }
}
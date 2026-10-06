const attackElement = document.getElementById("attack");
const hpElement = document.getElementById("hp");
const resultElement = document.getElementById("result");

let hp = 67;

function attackDefender(){

    let damage = Math.floor(Math.random()*20)+5;
    let hit = Math.random();

    if(hit >= 0.67){
        resultElement.textContent = "The attack missed!";
        console.log ("Miss")
    }

    else if(hp-damage <= 0){
        hp = 0;
        resultElement.textContent = "It fainted!";
        attackElement.disabled = true;
        console.log("It Fainted!")
    }

    else{
        hp = hp-damage;
        resultElement.textContent = "The attack did " + damage + " damage! " + hp + " HP remaining.";
        console.log("Hit", damage)
    }

    hpElement.textContent = hp;
}

attackElement.addEventListener("click", attackDefender);
const attackElement = document.getElementById("attack");
const hpElement = document.getElementById("hp");
const resultElement = document.getElementById("result");

let hp = 100;

function attackDefender(){

    let damage = Math.floor(Math.random()*20)+5;
    let hit = Math.random();

    if(hit >= 0.67){
        result.textContent = "The attack missed!";
    }

    else if(hp-damage <= 0){
        hp = 0;
        result.textContent = "It fainted!";
        attackElement.disabled = true;
    }

    else{
        hp = hp-damage;
        result.textContent = "The attack did " + damage + " damage! " + hp + " HP remaining.";
    }

    hpElement.textContent = hp;
}

attackElement.addEventListener("click", attackDefender);
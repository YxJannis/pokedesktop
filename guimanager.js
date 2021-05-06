t1 = PokeType.BUG;
t2 = PokeType.GRASS;


document.getElementById("attack_icon").innerHTML = attackImg.outerHTML;
document.getElementById("spAttack_icon").innerHTML = spAttackImg.outerHTML;
document.getElementById("defense_icon").innerHTML = defenseImg.outerHTML;
document.getElementById("spDefense_icon").innerHTML = spDefenseImg.outerHTML;
document.getElementById("speed_icon").innerHTML = speedImg.outerHTML;
document.getElementById("health_icon").innerHTML = healthImg.outerHTML;


let item = document.getElementById("item");
let row = document.getElementById("row");

let row_items = 20;



for (const pokEntity in allPokemon){
    /*if (pokEntity % 20 === 0){
        row.appendChild(document.createElement("br"));
    }
    row.appendChild(item.cloneNode(true));*/
}
console.log(allPokemon[1].number);
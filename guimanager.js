t1 = PokeType.BUG;
t2 = PokeType.GRASS;


let attack_icon = document.createElement("div");
attack_icon.setAttribute("class", "attr_icon_container");
attack_icon.setAttribute("id", "attack_icon");
attack_icon.innerHTML = attackImg.outerHTML;

let spAttack_icon = document.createElement("div");
spAttack_icon.setAttribute("class", "attr_icon_container");
spAttack_icon.setAttribute("id", "spAttack_icon");
spAttack_icon.innerHTML = spAttackImg.outerHTML;

let speed_icon = document.createElement("div");
speed_icon.setAttribute("class", "attr_icon_container");
speed_icon.setAttribute("id", "speed_icon");
speed_icon.innerHTML = speedImg.outerHTML;

let defense_icon = document.createElement("div");
defense_icon.setAttribute("class", "attr_icon_container");
defense_icon.setAttribute("id", "defense_icon");
defense_icon.innerHTML = defenseImg.outerHTML;

let spDefense_icon = document.createElement("div");
spDefense_icon.setAttribute("class", "attr_icon_container");
spDefense_icon.setAttribute("id", "spDefense_icon");
spDefense_icon.innerHTML = spDefenseImg.outerHTML;

let health_icon = document.createElement("div");
health_icon.setAttribute("class", "attr_icon_container");
health_icon.setAttribute("id", "health_icon");
health_icon.innerHTML = healthImg.outerHTML;


let maingrid = document.getElementById("maingrid");
let br = document.createElement("br");



let row_items = 10;

console.log(allPokemon.length);

let row_counter = 0;
let item_counter = 0;

for (i = 0; i < allPokemon.length; i = i + row_items){
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row_" + row_counter);
    for (j = 0; j < row_items; j++){
        let item = document.createElement("div");
        item.setAttribute("class", "item");
        item.setAttribute("id", "item_" + item_counter);
        item.appendChild(attack_icon);
        item.appendChild(spAttack_icon);
        item.appendChild(speed_icon);
        item.appendChild(defense_icon);
        item.appendChild(spDefense_icon);
        item.appendChild(health_icon);
        row.appendChild(item.cloneNode(true));
        item_counter++;
    }
    maingrid.appendChild(row);
    row_counter++;
    //maingrid.appendChild(br.cloneNode(true));
}
console.log(allPokemon[1].number);
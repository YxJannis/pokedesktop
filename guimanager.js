t1 = PokeType.BUG;
t2 = PokeType.GRASS;

const pok = new Pokemon(20,20,10,40,12,40,"Squirtle",3,1,false,t1,t2);

document.getElementById("attack_icon").innerHTML = attackImg.outerHTML;
document.getElementById("spAttack_icon").innerHTML = spAttackImg.outerHTML;
document.getElementById("defense_icon").innerHTML = defenseImg.outerHTML;
document.getElementById("spDefense_icon").innerHTML = spDefenseImg.outerHTML;
document.getElementById("speed_icon").innerHTML = speedImg.outerHTML;
document.getElementById("health_icon").innerHTML = healthImg.outerHTML;
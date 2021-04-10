console.log(data[3]);

for (pokentity in data){

}

function getAttackScale(attack){
    if (attack > 185){
        attack = 185;
    }
    if (attack < 5){
        attack = 5;
    }
    baseValue = 0.2;
    return (Math.ceil((attack-4)/10.7)-1)*0.05+baseValue;
}

function getDefenseScale(defense){
    if (defense > 230){
        defense = 230;
    }
    if (defense < 5){
        defense = 5;
    }
    baseValue = 0.2;
    return (Math.ceil((defense-4)/13.3)-1)*0.05+baseValue;
}

function getSpAttackScale(spAttack){
    if (spAttack > 194){
        spAttack = 194;
    }
    if (spAttack < 10){
        spAttack = 10;
    }
    baseValue = 0.2;
    return (Math.ceil((spAttack-9)/10.9)-1)*0.05+baseValue;
}

function getSpDefenseScale(spDefense){
    if (spDefense > 230){
        spDefense = 230;
    }
    if (spDefense < 20){
        spDefense = 20;
    }
    baseValue = 0.2;
    return (Math.ceil((spDefense-19)/12.5)-1)*0.05+baseValue;
}

function getSpeedScale(speed){
    if (speed > 180){
        speed = 180;
    }
    if (speed < 5){
        speed = 5;
    }
    baseValue = 0.2;
    return (Math.ceil((speed-4)/10.4)-1)*0.05+baseValue;
}

function getHealthScale(health){
    if (health > 255){
        health = 255;
    }
    if (health < 1){
        health = 1;
    }
    baseValue = 0.2;
    return (Math.ceil((health)/15.0)-1)*0.05+baseValue;
}
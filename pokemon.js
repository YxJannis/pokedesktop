const PokeType = Object.freeze({
    FIRE : "Fire",
    WATER : "Water",
    NORMAL : "Normal",
    GRASS : "Grass",
    FIGHTING : "Fighting",
    FLYING : "Flying",
    POISON : "Poison",
    ELECTRIC : "Electric",
    GROUND : "Ground",
    PSYCHIC : "Psychic",
    ROCK : "Rock",
    ICE : "Ice",
    BUG : "Bug",
    DRAGON : "Dragon",
    GHOST : "Ghost",
    DARK : "Dark",
    STEEL : "Steel",
    FAIRY : "Fairy"
});

class Pokemon {
    constructor(attack, defense,  spAttack,  spDefense,  speed,  health,  name,
        number,  generation, legendary, type1, type2) {
        this.attack = attack;
        this.defense = defense;
        this.spAttack = spAttack;
        this.spDefense = spDefense;
        this.speed = speed;
        this.health = health;
    
        /*attackScale;
        defenseScale;
        spAttackScale;
        spDefenseScale;
        speedScale;
        healthScale;
        */

        this.name = name;
        this.number = number;
        this.generation = generation;
        this.legendary = legendary;
        this.type1 = type1;  // PokeType
        this.type2 = type2;  // PokeType
        //BufferedImage sprite;
        //Color pokeColor;
    
        this.chosenForTeam = false;
    }
}

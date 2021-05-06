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
    constructor(attack, defense,  sp_attack,  sp_defense,  speed,  health,  name,
        number,  generation, is_legendary, type1, type2) {
        this.attack = attack;
        this.defense = defense;
        this.sp_attack = sp_attack;
        this.sp_defense = sp_defense;
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
        this.is_legendary = is_legendary;
        this.type1 = type1;  // PokeType
        this.type2 = type2;  // PokeType
        //BufferedImage sprite;
        //Color pokeColor;
    
        this.chosenForTeam = false;
    }
}

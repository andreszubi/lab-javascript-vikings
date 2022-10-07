// Soldier
class Soldier {
    constructor(health, strength) {
       this.health = health;
       this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}



// Viking
class Viking extends Soldier {
     constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
     }
     receiveDamage(damage) {
     this.health -= damage;
     if (this.health === 0) {
        return `${this.name} has died in act of combat`;
     } else {
        return `${this.name} has received ${damage} points of damage`;
     }
     }
     battleCry() {
        return `Odin Owns You All!`;
     }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }
        }
    

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking) {
  this.vikingArmy.push(viking);
    }
    
    addSaxon(saxon) {
    this.saxonArmy.push(saxon);
    }

    vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
 

    let finalCount = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].attack()); 

    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex);
    }
    return finalCount;
    }

    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
        let finalCount = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomVikingIndex].attack());

        if (this.vikingArmy[randomVikingIndex].health <= 0) {
            this.vikingArmy.splice(randomVikingIndex);
        }
        return finalCount;
    }
    showStatus() {
        if ( this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`;
        } else if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        }
        else if ((this.saxonArmy.length && this.vikingArmy.length) > 0){
            return `Vikings and Saxons are still in the thick of battle.`;
        }
    }
}

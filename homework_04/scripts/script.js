var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = assign({}, defaults, options);

function assign(target, defaults, options) {
  var result = target;

  for (item in defaults) {
    result[item] = defaults[item]
  }
  for (item in options) {
    result[item] = options[item]
  }
  return result;
}

function Fighter(fighter) {
  this.name = fighter.name; 
  this.attack = fighter.attack;
  this.hitpoints = fighter.hitpoints;
  this.totalHitpoints = fighter.hitpoints;
  this.getHitpoints = function() {
    return this.hitpoints;
  }
  this.setHitpoints = function(hitpoints) {
    this.hitpoints = hitpoints;
  }
  this.getTotalHitpoints = function() {
    return this.totalHitpoints;
  }
  this.setTotalHitpoints = function(hitpoints) {
    this.totalHitpoints = hitpoints;
  }
  this.getAttack = function() {
    return this.attack;
  }
  this.setAttack = function(attack) {
    this.attack = attack;
  }
  this.fight = function(fighter) {
    if(this.name === fighter.name) {
      return "You can't beat yourself!!!";
    } else if(fighter.hitpoints <= 0) {
      return "Your opponent is DEAD!";
    }
    fighter.hitpoints = fighter.hitpoints - this.attack;

  }
  this.isAlive = function() {
    return this.hitpoints > 0;
  }
}


function Champion(fighter) {
  Fighter.apply(this, arguments);
  var fighterFight = this.fight;
  var isDefence = false;

  this.heal = function() {
    if(this.hitpoints + 5 >= this.totalHitpoints) {
      this.hitpoints = this.totalHitpoints;
    } else {
      this.hitpoints += 5;
    }
  }


  this.fight = function(fighter) {
    if(fighter.isDefence === true) {
      fighter.totalHitpoints += 1;
      fighter.isDefence = false;
    } else { 
      fighterFight.call(this, fighter);
      fighter.isAlive() ? null : this.attack++ ;
    }
  }

  this.defence = function() {
    this.isDefence = true;
  }
}

function Monster(fighter) {
  Fighter.apply(this, arguments);
  var fighterFight = this.fight;
  var enrage = 0;
  var fury = false;
  var defaultAttack = this.attack;

  this.fight = function(fighter) {
    if(this.enrage > 0) {
      fighterFight.call(this, fighter);
      this.enrage--;
      this.enrage === 0 ? this.attack = defaultAttack : null;
    } else if (this.fury === true && this.hitpoints > 5) { 
      this.hitpoints -= 5;
      this.totalHitpoints -= 5;
      this.attack = this.attack * 2;
      fighterFight.call(this, fighter);
      this.attack = defaultAttack;
    } else {
      fighterFight.call(this, fighter);
    }
    if(!fighter.isAlive()) { 
      this.hitpoints = this.hitpoints + Math.floor(fighter.totalHitpoints * 0.25);
      this.totalHitpoints = this.totalHitpoints + Math.floor(fighter.totalHitpoints * 0.1);
    }
  }

  this.enrage = function() {
    this.enrage = 2;
    this.attack = this.attack * 2;
  }
  this.fury = function() {
    this.fury = true;
  }
}


var hunter = new Champion({name: 'Rexxar', attack: 10, hitpoints: 60});
var beast = new Monster({name: 'King Krush', attack: 8, hitpoints: 80});

hunter.fight(beast);
beast.getHitpoints();
beast.enrage();
hunter.fight(beast);
beast.getHitpoints();
beast.fight(hunter);
hunter.getHitpoints();
hunter.fight(beast);
beast.isAlive(); 
hunter.getAttack();
hunter.getHitpoints(); 
hunter.heal();
hunter.getHitpoints();
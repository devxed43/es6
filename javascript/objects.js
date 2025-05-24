// =============== REFERENCE TYPE =================

// we create a box
// inside that box
// we put the value:10
let box1 = { value: 10 };

// we tell this new box to point to what's inside box 1
// box2 references box1
let box2 = box1;

// we create a third box, and inside it is value:10
let box3 = { value: 10 };

// when contents inside box1 change,
// box2 shows the changes as well
// because we say mirror what's in box1

// ============= CONTEXT OF THIS ===================

// global access - WINDOW OBJECT
console.log(this);

// still window object
// in browser we can type in window.a()
// still part of the window
function a() {
  console.log(this);
}

a();

// this creats an object with a function inside
// 'this' is now inside of a function that is inside a function
// it's nested now
const obj4 = {
  a: function () {
    console.log("inside a function inside an object", this);
  },
};

obj4.a();

// ================ INSTANTIATION ==================
// instances or multiple copies of an object

// a class is what you want to make a copy of
class Player {
  // this player can have a name and a type
  // we construct the player's attributes
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }

  //   we give the player the ability to introduce themself
  introduce() {
    // 'this' gives access to Player's attributes
    // 'this' is the object our function lives in
    // our fn lives in the Player Object.
    // 'this' => Player.name
    // 'this' => Player.type
    // this.introduce() to play the introduction
    console.log(`my name is ${this.name}. i'm a ${this.type}`);
  }
}

// this Wizard class now has all the attributes of Player
// We have to construct Wizard
// constructor accepts what we want from Player but shorthand
// super calls in the data we said we wanted in the constructor
// in super, it's the data we want to pass to the constructor
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type} type wizard`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shaun", "Dark Magic");

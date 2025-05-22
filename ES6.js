// let and const

// const player = "bobby";
// let experience = 100;

// calling wizard in browser results in false
// because wizardLevel is false globally
// down in the function, wizardLevel is different
// let wizardLevel = false;

// function scoped
// the interpreter reads this first
// if (experience > 90) {
//   let wizardLevel = true;
//   console.log("fn scope. inside fn", wizardLevel);
// }

// the interpreter reads this second
// console.log("global. outside fn", wizardLevel);

// reassigns variable
// experience = 80;

// i put this function inside a constant variable
// i want it to always find even so it will not change
// const findEven = function (num) {
//   if (num % 2 === 0) {
//     console.log(`${num} is even`);
//   }
// };

// findEven(4224432432);

// const obj = {
//   player: "bobby",
//   xp: 100,
//   isWizard: false,
// };

// to edit - inefficient
// const player = obj.player;
// const xp = obj.xp;
// const isWizard = obj.isWizard;

// destructure - select properties from obj
// const { player, xp } = obj;
// let { isWizard } = obj;



// ========== OBJ properties ================
// we can declare an array and pass it down
// in array brackets around the variable name
// it passes in the value
const name1 = "John Snow";
const name2 = "ray" + "smith"

const obj = {
  [name1]: "hello",
  [name2]: "hihi",
};

var exports = module.exports = {};
var animals = require("./animals.js");

exports.printAnimal = (animal) => {
  if(animals[animal] === undefined){
    throw "Animal is not in the library. Reach the list from GitHub. https://github.com/NeotiDev/animals-ascii";
  }else{
    console.log(animals[animal]);
  }
};

exports.getAnimal = (animal) => {
  if(animals[animal] === undefined){
    throw "Animal is not in the library. Reach the list from GitHub. https://github.com/NeotiDev/animals-ascii";
  }else{
    return animals[animal];
  }
};

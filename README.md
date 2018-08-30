# Animal Arts ASCII
Want to have some animals textart included in your project or console? Here you are!

## Installation
Use npm:
```
npm install animals-art-ascii --save
```

## Animals in this version
* cat
* dog
* cat_love
* dog_nsfw
* snake
* snail
* lion
* cow
* bear

## Usage

### animals.drawAnimal(animal)
* `animal` - The name of the animal.

This function will print the ascii to the console.

### art.draw(animal)
* `animal` - Name of the animal.

This function will return the ascii art.

## Example
```
var art = require('animals-art-ascii');

//Print the animal to console
art.printAnimal("snake");

//or, define it by a variable.
const snake = art.getAnimal("snake");
```

## Contribution
Contributing is really easy! Just make a pull request and help us by adding some more animals. Thanks!

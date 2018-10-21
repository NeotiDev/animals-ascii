# animals-ascii
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FNeotiDev%2Fanimals-ascii.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FNeotiDev%2Fanimals-ascii?ref=badge_shield)
Want to have some animals textart included in your project or console? Here you are!


<div align="center">

  <p>
<img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love"><!--
--><img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made with JavaScript">
  </p>


<p>
  <a href="https://github.com/NeotiDev/animals-ascii/blob/master/LICENSE"><img src="https://img.shields.io/github/license/NeotiDev/animals-ascii.svg?style=for-the-badge" alt="License"></a>
  </p>
  
  <p>
    <p>
    <a href="https://discord.gg/NqMA6xC"><img src="https://discordapp.com/api/guilds/478157155279699971/widget.png?style=banner2" alt="Join Our Discord Server"/></a>
  </p>
  </div>



[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FNeotiDev%2Fanimals-ascii.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FNeotiDev%2Fanimals-ascii?ref=badge_large)

## Installation
Use npm:
```
npm install animals-ascii --save
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

## Usage

### animals.drawAnimal(animal)
* `animal` - The name of the animal.

This function will print the ascii to the console.

### art.draw(animal)
* `animal` - Name of the animal.

This function will return the ascii art.

## Example
```
var art = require('animals-ascii');

//Print the animal to console
art.printAnimal("snake");

//or, define it by a variable.
const snake = art.getAnimal("snake");
```

## Contribution
Contributing is really easy! Just make a pull request and help us by adding some more animals. Thanks!
[https://animals-ascii.js.org](https://animals-ascii.js.org)

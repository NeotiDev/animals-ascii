/*
  _   _               _    _  ____               
 | \ | |  ___   ___  | |_ (_)|  _ \   ___ __   __
 |  \| | / _ \ / _ \ | __|| || | | | / _ \\ \ / /
 | |\  ||  __/| (_) || |_ | || |_| ||  __/ \ V / 
 |_| \_| \___| \___/  \__||_||____/  \___|  \_/  
                                                 
        This example and library was
         brought to you by NeotiDev           */
        
        // Include the library. You first need to install the package.
        const art = require('animals-ascii');
         
         
     	if(command == "ascii"){
      const animal = args.join(" ");
	  if(!animal) return message.reply(`**True Format:** !ascii cat/dog/snake/lion/cow/snail`);
		
		// Define it by a variable.
const animalPrinted = art.getAnimal(animal);
		message.channel.send(`\`\`\`${animalPrinted}\`\`\``);

	};

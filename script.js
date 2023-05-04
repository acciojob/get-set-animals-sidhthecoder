class Animal {
	constructor(species){
		this._species = species;
	}

	get species(){
		return this._species;
	}

	makeSound(){
		console.log("The " + this._species + " makes a sound");
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

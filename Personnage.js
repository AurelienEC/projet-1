class Personnage {
	constructor(name, surname = "", health = 150, strength = 25){
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.surname = surname; 
		this.showInfo()
	}

	decrire(){
		return `${this.name} a ${this.health} points de vie et ${this.strength} en force son surnom est ${this.surname}`;
  	}

  	showInfo(){
  		let btn = document.getElementById("showInfo");
  		btn.style.backgroundColor = "#000";
  		btn.style.color = "#fff";
  		btn.addEventListener('click', () => {
  			console.log(this.decrire());
  			console.log(this);
  		});
  		let self = this;
  		let fail = document.getElementById("showInfoFail");
  		fail.addEventListener('click', function(){
  			console.log(self.decrire());
  			console.log(this);
  		});
  	}
	
}

//Code exemple

const aurora = new Personnage("Aurora");
//const aurelien = new Personnage("Aurélien", "Tonio", 20, 03);
/*
console.log(aurora.decrire());
console.log(aurelien.decrire());

const tableau = new Array();
const tableau2 = [];
tableau.push(aurora);
tableau.push(aurelien);
tableau2.push(aurora);
tableau2.push(aurelien);
console.log(tableau);
console.log(tableau2);
*/
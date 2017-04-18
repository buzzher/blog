var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person'; // -------- es6

class Adult extends Person {
	payTaxes() {
		console.log(this.name + ' now owe $0 in taxes')
	}
}

alert('ABC 321');

var kate = new Person('Kate Smith', 'Pink');
kate.greet();
console.log(kate.name);

var brad = new Adult('Brad Gik', 'Hot Pink');
brad.greet();
console.log(brad.name);
brad.payTaxes();

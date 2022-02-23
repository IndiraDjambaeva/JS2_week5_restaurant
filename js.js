// //Ex1
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greet() {
//     return `Hello, ${this.firstName} ${this.lastName}`;
//   }
// }

// const john = new Person("John", "Doe");
// const mary = new Person("Mary", "Mike");

// //console.log(john);
// //console.log(john.firstName);
// //console.log(john.greet());

// console.log(john.greet === mary.greet);


// //Ex2
// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
  
//     greet() {
//       return `Hello, ${this.firstName} ${this.lastName}`;
//     }
//   }

// class Client {
//   constructor(firstName, lastName, phone, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phone = phone;
//     this.email = email;
//   }
  
//   greet() {
//     return `Hello, ${this.firstName} ${this.lastName}`;
//   }

//   getContacts() {
//     return `${this.phone} ${this.email}`;
//   }
// }

// const john = new Person("John", "Doe");
// const mary = new Person("Mary", "Mike");

// console.log(john.greet === mary.greet);




// //Ex3
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greet() {
//     return `Hello, ${this.firstName} ${this.lastName}`;
//   }
// }

// class Client extends Person {
//   constructor(firstName, lastName, email, city) {
//     super(firstName, lastName);
//     this.email = email;
//     this.city = city;
//   }

//   greet() {
//     return super.greet() + " I'm from " + this.city;
//   }
// }

// const john = new Person("John", "Doe");
// console.log(john.greet());

// const mary = new Client ("Mary", "Mike", "mary@mary.com", "NY");
// console.log(mary.greet());


// //Ex4
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greet() {
//     return `Hello, ${this.firstName} ${this.lastName}`;
//   }
// }

// class Client extends Person {
//   constructor(firstName, lastName, email, city) {
//     super(firstName, lastName);
//     this.email = email;
//     this.city = city;
//   }

//   greet() {
//     return `${this.firstName} Email: ${this.email}`;
//   }
// }

// const john = new Person("John", "Doe");
// console.log(john.greet());

// const mary = new Client ("Mary", "Mike", "mary@mary.com", "NY");
// console.log(mary.greet());


//Ex5
class Restaurant {
  constructor(restName, cousin) {
    this.restName = restName;
    this.cousin = cousin;
  }

  type() {
    return `This is ${this.restName} with ${this.cousin} cousin`;
  }
}

class Worktime extends Restaurant {
  constructor(openTime, closeTime) {
    super(restName, cousin);
    this.openTime = openTime;
    this.closeTime = closeTime;
  }
 
  type() {
    return (super.greet() + " Open: " + this.openTime + " Close: " + this.closeTime);
  }
}

const aba = new Restaurant("ABA", "asian");
console.log(aba.type());

const mary = new Worktime("Mary", "europe", "9:00", "22:00");
console.log(mary.type());





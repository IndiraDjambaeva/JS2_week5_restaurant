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


// //Ex5
// class Restaurant {
//   constructor(restName, cousin) {
//     this.restName = restName;
//     this.cousin = cousin;
//   }

//   type() {
//     return `This is ${this.restName} with ${this.cousin} cousin`;
//   }
// }

// class Worktime extends Restaurant {
//   constructor(openTime, closeTime) {
//     super(restName, cousin);
//     this.openTime = openTime;
//     this.closeTime = closeTime;
//   }
 
//   type() {
//     return (super.greet() + " Open: " + this.openTime + " Close: " + this.closeTime);
//   }
// }

// const aba = new Restaurant("ABA", "asian");
// console.log(aba.type());

// const mary = new Worktime("Mary", "europe", "9:00", "22:00");
// console.log(mary.type());


//Ex6
class Restaurant {
  constructor(name, cousin) {
    this.name = name;
    this.cousin = cousin;
  }

  showInfo() {
    return `This is ${this.name} with ${this.cousin} cousin`;
  }

  isOpen() {
    // let currentHour = new Date()
    //let currentHour = new Date().now()
    let currentHour = new Date().getHours();
    let currentDay = 5;
    
    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed`
    } else {
        if (currentHour > 1 && currentHour < 22) {
        return `${this.name} is open`
      } else {
        return `${this.name} is closed`
      }
    }

   
  }
}
  

const aaa = new Restaurant("AAA", "asian");
const bbb = new Restaurant("BBB", "europe");

console.log(aaa.showInfo());
console.log(bbb.showInfo());
console.log(aaa.isOpen());






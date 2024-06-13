// # Task_06_FSD60WD-E_04-06-24
// Task_06_FSD60WD-E_04-06-24-OOP in JS

// Q1)  https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// Answere:
class Movie {
  constructor(title, studio, rating) {
    (this.title = title), (this.studio = studio);
    //this.rating=rating
    if (rating == null || undefined) {
      this.rating = "PG";
    } else {
      this.rating = rating;
    }
  }
  getPG(arr) {
    console.log("PG METHOD CALLED", arr);
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i].rating)
      if (arr[i].rating == "PG") {
        console.log(arr[i].rating);
      }
    }
  }
}

let film1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(film1);

let film2 = new Movie("XYZ", "XYZ HOUSE");
console.log(film2);

let film3 = new Movie("ABC", "ABC HOUSE");
console.log(film3);

let film4 = new Movie("Royale", "Royale Productions", "PG­14");
console.log(film4);

let film6 = new Movie("dcf", "dcf Productions");
console.log(film6);

let film5 = new Movie("Casino", "Casino Productions", "PG­15");
console.log(film5);

const movie = [film1, film2, film3, film4, film6, film5];
console.log(movie);
film1.getPG(movie);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2) https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// ![image](https://github.com/vidyabharati/Task_06_FSD60WD-E_04-06-24/assets/86662443/6161fc96-ce25-4d82-8f48-702d466dc72f)

// Answere:
class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle[radius=${this.radius},color=${this.color}]`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Q3) Write a “person” class to hold all the details.
// Answere:
class Person {
  constructor(firstName, lastName, age, gender, address, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getGender() {
    return this.gender;
  }

  setGender(gender) {
    this.gender = gender;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  toString() {
    return `Person[firstName=${this.firstName}, lastName=${this.lastName}, age=${this.age}, gender=${this.gender}, address=${this.address}, phoneNumber=${this.phoneNumber}, email=${this.email}]`;
  }
}

// Example usage:
const person = new Person(
  "John",
  "Doe",
  30,
  "Male",
  "123 Main St, Anytown, USA",
  "555-1234",
  "john.doe@example.com"
);

console.log(person.getFullName()); // John Doe
console.log(person.toString()); // Person[firstName=John, lastName=Doe, age=30, gender=Male, address=123 Main St, Anytown, USA, phoneNumber=555-1234, email=john.doe@example.com]
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Q4) write a class to calculate the Uber price.

class UberPriceCalculator {
  constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerMile = costPerMile;
    this.bookingFee = bookingFee;
  }

  calculatePrice(distance, time) {
    const distanceCost = distance * this.costPerMile;
    const timeCost = time * this.costPerMinute;
    const totalCost = this.baseFare + distanceCost + timeCost + this.bookingFee;
    return totalCost;
  }

  setBaseFare(baseFare) {
    this.baseFare = baseFare;
  }

  setCostPerMinute(costPerMinute) {
    this.costPerMinute = costPerMinute;
  }

  setCostPerMile(costPerMile) {
    this.costPerMile = costPerMile;
  }

  setBookingFee(bookingFee) {
    this.bookingFee = bookingFee;
  }

  getBaseFare() {
    return this.baseFare;
  }

  getCostPerMinute() {
    return this.costPerMinute;
  }

  getCostPerMile() {
    return this.costPerMile;
  }

  getBookingFee() {
    return this.bookingFee;
  }
}

// Example usage:
const uberPriceCalculator = new UberPriceCalculator(2.0, 0.35, 1.75, 1.5);

const distance = 10; // Distance in miles
const time = 15; // Time in minutes

const price = uberPriceCalculator.calculatePrice(distance, time);
console.log(`The total Uber price is $${price.toFixed(2)}`); // The total Uber price is $24.25

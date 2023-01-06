// hashmap with set of key-value slots
let numeral2number = {"one two":"1", "two":"2", "three":"3"};

// record with set of property slots
let rec = {name:"John", age: 30, city: "New York"};

// untyped object with property slots and method slots
let city = {
    name: "New York",
    population: 1000000,
    country: "USA",
    getCountryAndCity: function() {
        return this.name + ": " + this.country;
    }
}


// this keyword
console.log(city.getCountryAndCity())
let c = city.getCountryAndCity;
console.log(c()) // context lost

c = city.getCountryAndCity.bind(city);
console.log(c()) // context still here


// prototypal inheritance
let vehicles = {
    wheels: true,
    drive() {
        console.log("Driving vehicle");
    }
};

// using __proto__ sets cars prototype to vehicles
let car = {
    windows: true,
    __proto__: vehicles
};

car.drive(); // Driving vehicle

// can make the chain longer
let volkswagen = {
    __proto__: car,
    drive() {
        console.log("Driving volkswagen");
    }
}

volkswagen.drive(); // Driving volkswagen
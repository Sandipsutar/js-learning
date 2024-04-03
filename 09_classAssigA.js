

console.log("======Step 1 =======");
class Vehicle {
    constructor(make, model, year, color, mileage,price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
        this.price = price;
    }

    // Method to log the details of the vehicle
    logDetails() {
        console.log(`Vehicle Details:  Name :${this.make} ,Model: ${this.model} , Year: (${this.year}), Color: ${this.color}, Mileage: ${this.mileage},Price : ${this.price}`);
    }
}
const Toyota= new Vehicle("Toyota", "Camry", 2020, "Silver", "30,000 km","46 lack");
Toyota.logDetails();
const Honda= new Vehicle("Honda", "Civic", 2018, "Black", "25,000 km","22.36 lack");
Honda.logDetails();
const Ford= new Vehicle("Ford", "F-150", 2019, "White", "40,000 km"," 1 cr");
Ford.logDetails();
const Chevrolet= new Vehicle("Chevrolet", "Malibu", 2017, "Blue", "35,000 km","65 lack");
Chevrolet.logDetails();
const Tesla= new Vehicle("Tesla", "Model S", 2021, "Red", "20,000 km","80 lack");
Tesla.logDetails();





// Create an array to hold objects of vehicles
const arrayOfVehicles = [];

// Create 5 objects from Vehicle class and add them to arrayOfVehicles
arrayOfVehicles.push(new Vehicle("Toyota", "Camry", 2020, "Silver", "30,000 km","46 lack"));
arrayOfVehicles.push(new Vehicle("Honda", "Civic", 2018, "Black", "25,000 km","22.36 lack"));
arrayOfVehicles.push(new Vehicle("Ford", "F-150", 2019, "White", "40,000 km"," 1 cr"));
arrayOfVehicles.push(new Vehicle("Chevrolet", "Malibu", 2017, "Blue", "35,000 km","65 lack"));
arrayOfVehicles.push(new Vehicle("Tesla", "Model S", 2021, "Red", "20,000 km","80 lack"));



// Traverse the arrayOfVehicles and log the details of each vehicle
console.log("======Traverse the array objects=======");

for (const vehicle of arrayOfVehicles) {
    vehicle.logDetails();
}

console.log("======Step 2 =======");
class College {
    constructor(name, location, coursesOffered, establishedYear) {
        this.name = name;
        this.location = location;
        this.coursesOffered = coursesOffered;
        this.establishedYear = establishedYear;
    }

    // Method to display the complete object details
    display() {
        console.log(`College Name: ${this.name}, Location: ${this.location}, Courses Offered: ${this.coursesOffered}, Established Year: ${this.establishedYear}`);
    }
}

const college1 = new College("ABC College", "New York", ["Computer Science", "Engineering"], 1990);
const college2 = new College("XYZ College", "California", ["Business", "Psychology"], 1985);
const college3 = new College("DEF College", "Texas", ["Medicine", "Nursing"], 2000);
const college4 = new College("GHI College", "Florida", ["Arts", "Music"], 1975);

console.log("\nDetails of colleges:");
college1.display();
college2.display();
college3.display();
college4.display();

//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

// properties

class Car extends VehicleModule{
    // constructor and super for properties
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    //methods

    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            // If there is enough room foor passengers this will state it. If not then the else statement will prompt a message.
            if ((num + this.passenger) >= this.maximumPassengers)
            this.passenger = num;
            return this.passenger;
        } else{
            console.log(this.model + " " + this.make + " not enough space for passengers ");
        }
    }
    start(){
        if (this.fuel > 0){
            // If there is enough fuel in the tank the message will prompt that the vehicle has started. If not the else statement will show.
            console.log(" the vehicle has started ")
            return this.started = true
        } else {
            console.log(" fuel is empty ")
            return this.started = false;
        }
    }
    // I named it maintenance instead of scheduleService for less confusion
    maintenance(){
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

}

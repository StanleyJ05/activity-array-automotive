//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            if ((num + this.passenger) <= this.maximumPassengers)
            this.passenger = num;
            return this.passenger;
        } else{
            console.log(this.model + " " + this.make + " not enough space for passengers ");
        }
    }
    start(){
        if (this.fuel > 0){
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

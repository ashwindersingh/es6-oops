import { Vehicle } from './vehicle.js'; // Import the vehicle class

export class Car extends Vehicle {

    constructor(license, model, latlong){
        super(license,model,latlong);
        this.miles = null;
        this.make = null;
    }
}
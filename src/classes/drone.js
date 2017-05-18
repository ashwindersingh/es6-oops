import { Vehicle } from './vehicle.js'; // Import the vehicle class

export class Drone extends Vehicle {

    constructor(license, model, latlong){
        super(license,model,latlong);
        this.airTimeHours = null;
        this.base = null;
    }
}
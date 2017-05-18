import { Car } from '../classes/car.js'; 
import { Drone } from '../classes/drone.js'; 
import { DataError } from './data-error.js';

export class FleetDataService {

    constructor(){
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for(let data of fleet){
            switch(data.type){
                case 'car':
                    if(this.validateCarData(data)){
                        let car = this.loadCar(data);
                        if(car)
                            this.cars.push(data);
                    } else {
                        let e = new DataError('Invalid car data', data);
                    }
                    break;
                case 'drone':
                    if(this.validateDroneData(data)){
                        let d = this.loadDrone(data);
                        if(d)
                            this.drones.push(data);
                    } else{
                        let e = new DataError('Invalid drone data', data);
                        this.errors.push(e);
                    }
                    break;
                default:
                    let e = new DataError('Invalid Vechicle type', data);
                    this.errors.push(e)
                    break;
            }
        }
    }

    getCarByLicense(license){
        return this.cars.find(function(car){
            return car.license === license;
        });
    }

    getCarSortedByLicense(){
        return this.cars.sort(function(car1, car2){
            if(car1.license < car2.license)
                return -1;
            if(car1.license > car2.license)
                return 1;
            return 0;
        });
    }

    filterCarsByMake(filter){
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }

    loadCar(car){
        try{
            let c =  new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch(e){
            this.errors.push(new DataError('error loading car', car));
        }
        return null;
    }

    loadDrone(dr){
        try{
            let d =  new Drone(dr.license, dr.model, dr.latLong);
            d.airTimeHours = dr.airTimeHours;
            d.base = dr.base;
            return dr;
        } catch(e){
            this.errors.push(new DataError('error loading frone', dr));
        }
        return null;
    }

    validateCarData(car){
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        
        for(let field of requiredProps) {
            if(!car[field]){
                this.errors.push(new DataError(`invalid car field ${field}`, car));
                hasErrors = true;
            }
        }
        if(Number.isNaN(Number.parseFloat(car.miles))){
            this.errors.push(new DataError(`invalid car mileage`, car));
            hasErrors = true;
        }

        return !hasErrors;
    }

    validateDroneData(drone){
        let requiredProps = 'license model latLong airTimeHours base'.split(' ');
        let hasErrors = false;
        
        for(let field of requiredProps) {
            if(!drone[field]){
                this.errors.push(new DataError(`invalid drone field ${field}`, drone));
                hasErrors = true;
            }
        }
        if(Number.isNaN(Number.parseFloat(drone.airTimeHours))){
            this.errors.push(new DataError(`invalid drone airTimeHours`, drone));
            hasErrors = true;
        }

        return !hasErrors;
    }
}
//import the module we want to used

import { Car } from './classes/car.js'; 
import { Drone } from './classes/drone.js'; 
import { fleet } from './fleet-data.js'; //it is not class that why in small name
import { FleetDataService } from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

let car = dataService.getCarByLicense('AT9900')
console.log(car);

car = dataService.getCarSortedByLicense('AT9900')
for(let c of car)
    console.log(c);

car = dataService.filterCarsByMake('L');
for(let c of car)
    console.log('filter result ' + c.make);

for(let e of dataService.errors)
    console.log(e);
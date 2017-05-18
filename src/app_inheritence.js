class Vehicle {
    // constructor (){
    //     this.gpsEnabled = true;
    // }

    start(){
        console.log('staring vehicle');
    }

    static getCompany(){
       console.log('in Static method');
    }
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
    // constructor(){
    //     super();//need to always call the base class constructor first.
    //     this.gpsEnabled = false;
    // }

    start() {
        super.start(); //Calling base class Method;
        console.log('staring car'); 
    }
}

let car = new Car();

car.start()
//console.log(car.gpsEnabled);
//console.log(car instanceof Vehicle);
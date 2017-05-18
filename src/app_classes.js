class Drone {
    constructor(id){  
        this._id = id;
    }

    //Getting the private property
    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    //static method
    static getCompany(){
        console.log('in Static method');
    }

    //Method
    fly(){
        console.log('Drone ' + this.id + ' is flying');
    }
}
Drone.maxHeight = 2000;//Class Property

let drone = new Drone(1, 'Drone1');

//Calling Static Method, instance cannot access the static method.
Drone.getCompany();

//Class Property, instance canot access the class property
console.log(Drone.maxHeight);

//accessing property
console.log(drone.id);

drone.id = 23;

//calling methods
drone.fly();

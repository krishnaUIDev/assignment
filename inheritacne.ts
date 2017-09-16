class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }
    helo(){
        console.log(this.name + "is dancing");
    }
}
var ben = new Person("krisna");
ben.helo();

class Awsome extends Person {
 helo(){
     console.log( "awsome dance");
 }

}

var chandu = new Person("munni");
chandu.helo()
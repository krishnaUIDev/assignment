class start{
    name: string;
    saying: string;
  static cast: string = "winter fell";
    constructor(){
        this.saying = start.cast;
    }
    helo(person: string){
        console.log("helo" + person);
    }

}

var ned = new start();
ned.saying = "iwnter i socm";
console.log(start.cast);
ned.helo("fucker");
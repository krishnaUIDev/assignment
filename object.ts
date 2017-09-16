interface start{
    name: string;
    age?: number;

}
function printName(start: start){
    console.log(start.name);


}

printName({name:"Eddard"});
printName({name:"joe"});
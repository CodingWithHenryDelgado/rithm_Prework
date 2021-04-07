let people = ["Greg", "Mary", "Devon", "James"];
for(let i=0; i < people.length; i++){
    console.log(people[i]);
}

people.shift();

people.pop();

people.unshift("Matt");

people.push("Henry");

for(let i=0; i < people.length; i++){
    if(people[i] == "Mary"){
        console.log(people[i]);
        break;
    }else{
        console.log(people[i]);
    }
}

people.slice(2);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2,1, "Elizabeth", "Artie");

let withBob = people.concat("Bob");

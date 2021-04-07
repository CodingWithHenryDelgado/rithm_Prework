let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

namesAndHobbies["henry"] = "Gaming";

for(let items in namesAndHobbies){
    console.log(namesAndHobbies[items] + " => " + items);
}

if("henry" in namesAndHobbies){
    console.log("henry " + namesAndHobbies.henry);
}
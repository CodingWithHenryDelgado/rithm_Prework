let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming.difficulty = 7;

delete programming.jokes;

programming.isFun = true;

for(let objects in programming.languages){
    console.log(programming.languages[objects]);
}

for(let objects in programming){
    console.log(programming[objects]);
}

for(let objects in programming){
    console.log(objects);
}

console.log(programming.languages);
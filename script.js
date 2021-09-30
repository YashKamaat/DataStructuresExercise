// DATA STRUCTURES EXERCISE
// ========
// 1A
const jedi = []
console.log(jedi);
// ========
// 1B
jedi[0] = "Luke";
console.log(jedi);
// ========
// 1C
jedi.push ("Obi-Wan Kenobi");
console.log(jedi);
// ========
// 1D
jedi.unshift("Yoda");
console.log(jedi);
// ========
// 1E
console.log(jedi[1]);
// ========
// 2A
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
// ========
// 2B
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
// ========
// 2C
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);
// ========
// 2D
console.log(starWarsVillians.slice (0,2));
// ========
// 3A
const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO", 
    assassin: "IG-88"
};
console.log(droids);
// ========
// 3B
console.log(droids ["astromech"]);
// ========
// 3C
console.log(droids.protocol);
// ========
// 3D
droids.assassin = "IG-11";
console.log(droids);
// ========

// BONUS
// 4
console.log(starWarsVillians [0][6]);
// =======
// 5
console.log(sithLords.slice(-2,-1));
// =======
// 6A
const starWarsMovies = [
    {episodeOne: "The Phantom Menace", episodeTwo: "Attack of the Clones", episodeThree: "Revenge of the Sith"},
    {episodeFour: "A New Hope", episodeFive: "The Empire Strikes Back", episodeSix: "Return of the Jedi"},  
    {episodeSeven: "The Force Awakens", episodeEight: "The Last Jedi", episodeNine: "The Rise of Skywalker"}
];
console.log(starWarsMovies);
// =======
// 6B
starWarsMovies.splice(1,0, "Solo", "Rogue One");
console.log(starWarsMovies);
// =======
// Enums => enumerations
// it allows us to declare a set of named constants in collection
// by default it's a number based value, first element is 0
// also there is a string based enums
// and heterogeneous enums [string + number]
const getHardTime = () => 20;
var Starters;
(function (Starters) {
    Starters[Starters["Zero"] = 5] = "Zero";
})(Starters || (Starters = {}));
var Levels;
(function (Levels) {
    Levels[Levels["Kid"] = 0] = "Kid";
    Levels[Levels["Beginner"] = 5] = "Beginner";
    Levels[Levels["Easy"] = 10] = "Easy";
    Levels[Levels["Medium"] = 15] = "Medium";
    Levels[Levels["Hard"] = getHardTime()] = "Hard";
    // cause the function isn't executed while TypeScript is compiling. It runs later in run time
    // Expert,
    // so we will get error if we didnt assign expert a value
    // cause it dont know what hard is to add 1
    // but if hard is constant then it will automatically intialized
})(Levels || (Levels = {}));
let lvl = "medium";
if (lvl === "medium") {
    console.log(`level is medium and time is ${Levels.Medium} secondes`);
}
export {};
//# sourceMappingURL=Enums.js.map
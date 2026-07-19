// Enums => enumerations
// it allows us to declare a set of named constants in collection
// by default it's a number based value, first element is 0
// also there is a string based enums
// and heterogeneous enums [string + number]

const getHardTime = () => 20;

enum Starters {
  Zero = 5,
}

enum Levels {
  Kid, // kid is equal 0 cause we didnt assign a value so it took the default value
  Beginner = Starters.Zero,
  Easy = 10,
  Medium = Easy + 5,
  Hard = getHardTime(), // here Hard is considered a computed value, not a constant value
  // cause the function isn't executed while TypeScript is compiling. It runs later in run time

  // Expert,
  // so we will get error if we didnt assign expert a value
  // cause it dont know what hard is to add 1
  // but if hard is constant then it will automatically intialized
}

let lvl = "medium";
if (lvl === "medium") {
  console.log(`level is medium and time is ${Levels.Medium} secondes`);
}

// tuple is another sort of array
// we know exactly how many elements it contains
// and which types it contains in which positions

let article: [number, string, boolean];
article = [1, "frontend development", true];
article = [2, "frontend development", false];
// if we tried to make this array 4 elements we will get an error that it's just 3
// or if we reorderd the elements we will get an error cause every type has it's position

// article[3] = "new"; // error => cause tuples have fixed positions and fixed types
// When you assign by index, TypeScript knows index 3 doesn't exist in the tuple type,
// so it reports an error

article.push(10); // but we can push items
// TypeScript allows push() because the tuple is still an array under the hood.
// At runtime, JavaScript has no such thing as a tuple—it's just an array

// and to prevent this we use readonly
let art: readonly [number, string, boolean];
art = [3, "frontend development", true];
// art.push() // error

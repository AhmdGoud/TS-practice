// type assertion
// typescript dont do any check to make sure the type is valid
// if there an error type we can know this in run time not compile time
const img = document.getElementById("myImg");
console.log(img.src);
// console.log(img.value); // error image dont have a value property
const input = document.getElementById("myInput");
console.log(input.value);
// console.log(input.href); // error input dont have an href property
const data = 100;
console.log(data.repeat(2)); // here although data is number but typescript
export {};
// didnt check cause we told it its string but we will get error in run time
// console.log((data as number).repeat(2)); error
// Property 'repeat' does not exist on type 'number'.
//# sourceMappingURL=assertion.js.map
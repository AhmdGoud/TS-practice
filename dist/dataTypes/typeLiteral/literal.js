// this is type literal, somthing like constant
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return 2;
    }
}
// we used it for the function output to make sure that if we got any other value
// then there is somthing wrong as we know the output must be certain values
console.log(compare(10, 10)); // 0, 1, 2
let theNumber = 0;
export {};
// theNumber = 1; // error => we cant assign it any other vaule except 0
//# sourceMappingURL=literal.js.map
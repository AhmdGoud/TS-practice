// type alias
// we give types to a nickname so we could use it later as shortcut
let title = "frontend";
title = "Front End";
let experince = "expert";
experince = 10; // worked
// we did kinda of extending the Actions type by using type intersection
// & is for intersection type it works as AND
// | is for union type it works like OR
function getMoves(moves) {
    console.log(`you can go ${moves.go} by ${moves.steps} steps at once and stop for ${moves.stops}`);
}
getMoves({ go: "forward", steps: 10, stops: 5 });
export {};
//# sourceMappingURL=alias.js.map
// type alias
// we give types to a nickname so we could use it later as shortcut

type st = string;
let title: st = "frontend";
title = "Front End";
// title = 10 // error cant assign a number to a type string

type stAndNum = string | number;
let experince: stAndNum = "expert";
experince = 10; // worked

type Actions = {
  go: string;
  steps: number;
};

type MoreActions = Actions & {
  stops: number;
};

// we did kinda of extending the Actions type by using type intersection
// & is for intersection type it works as AND
// | is for union type it works like OR

function getMoves(moves: MoreActions) {
  console.log(
    `you can go ${moves.go} by ${moves.steps} steps at once and stop for ${moves.stops}`,
  );
}

getMoves({ go: "forward", steps: 10, stops: 5 });

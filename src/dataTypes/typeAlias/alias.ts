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

function getMoves(moves: Actions) {
  console.log(`you can go ${moves.go} by ${moves.steps} steps at once`);
}
getMoves({ go: "forward", steps: 10 });

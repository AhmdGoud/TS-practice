// type void
// when function returns nothing, no value just undefined

function showMsg(msg: string): void {
  console.log(msg);
  return; // this works
  // return msg; => error type string is not assinable to void
}
console.log(showMsg("void type"));

// type never
// when function doing an infinite loop so the next code not reachable
// or it just throw an error so there is normal completion

function failed(er: string) {
  throw new Error(er);
}
failed("error happended");

// this loop function didnt work because of the failed function that throwed an error
function looping() {
  while (true) {
    console.log("looping");
  }
}
looping();

// interfaces serve some sort like types
// it's some how like type annotation with objects and type alias

interface User {
  id?: number;
  name: string;
  title: string;

  sayHello?(): string;
  sayWelcome?: () => string; // arrow

  doubleNum(num: number): number;
  // doubleNum: (num: number) => number; we could declare it as arrow too
}

// with objects
const user: User = {
  id: 100,
  name: "Ahmed Gouda",
  title: "ForntEnd developer",

  sayHello() {
    return `hello ${this.name}`;
  },

  sayWelcome() {
    return `hello ${user.name}`;
  },

  doubleNum(num) {
    return num * 2;
  },
};

console.log(user.sayHello?.()); // we used Optional chaining here as we declared the method as optional ?
console.log(user.sayWelcome?.());
console.log(user.doubleNum(100));

// with functions
function getUserData(user: User) {
  console.log(
    `userName is ${user.name} and his title is ${user.title} and the number is ${user.doubleNum(200)}`,
  );
}

getUserData({
  name: "Ahmed Mahrous",
  title: "Front-End Developer",
  doubleNum: (n) => n * 2, // we need to pass a function for doubleNum, not a value.
  // so we passed an arrow function also we could passed regular function like
  // doubleNum: function (num) {
  //     return num * 2;
  //   },
  // or exciting one like
  // doubleNum: double , if we already have a function wiht name doubled
});

// ------------- //
// interface ReOpen
interface Roles {
  user: string;
  admin: string;
}

interface Roles {
  moderator: boolean;
} // this is a reopen

const roles: Roles = {
  user: "ahmed",
  admin: "gouda",
  moderator: true,
};

console.log(roles.user, roles.admin);

// interface extends
interface Tasks extends Roles {
  task: "responsible for the production";
}

const tasks: Tasks = {
  user: "ahmed",
  admin: "gouda",
  moderator: true,
  task: "responsible for the production",
};

const doWhat = (tsk: Tasks) => tsk.task;
console.log(doWhat(tasks));

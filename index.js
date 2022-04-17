const name = "Susan";
const height = 39;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  say("Julio", "hello");
  
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));
  console.log(add(80, 9000));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Liz"));
  console.log(add(1, 2));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));
  
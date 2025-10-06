function identity<T>(arg: T): T { return arg; }
const output = identity<string>("myString");
console.log(output);

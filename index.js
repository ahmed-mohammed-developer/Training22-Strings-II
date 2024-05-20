/*
const name2 = "Ahned   ";
console.log(name2.trim());
console.log(name2.startsWith("A"));
console.log(name2.startsWith("Ahmed"));
console.log(name2.endsWith("A"));
console.log(name2.endsWith("  "));
console.log(name2.includes("  "));
console.log(name2.includes("H"));

const getEmail = emil => {
  return emil.trim();
};

const getMessage = message => {
  if (message.endsWith(".")) {
    return message;
  }
  return message + "No"
}

console.log(getMessage("Hello world"));

const getUnit = text => {
  if (text.includes("C")){
    return "Yes";
  } else if (text.includes("F")){
    return "No F";
  }
  return "N////A"
};
console.log(getUnit("It is 15°C today")); 

*/

let apps = "Ahmed,Mohmed,Zakan";
let appsArrye = apps.split(",");
console.log(appsArrye);

const message = "Yoy are Welcome";
console.log(message.replace(" ", "__"));
console.log(message.replaceAll(" ", "__"));

const getSlug = name => {
  let result = name;
  result = result.toLowerCase();
  result = result.substring(0, 15);
  result = result.replaceAll(" ", "*");

  return result;

};

console.log(getSlug("IKEA table")); 

const getCountTodos = todos => {
  return todos.split(", ").length;
};

console.log(getCountTodos("Laundry, Wash dishes, Clean table"));




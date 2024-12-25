// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons1 = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

printPersons(persons);


const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

function printPersons(persons, elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }
  element.innerHTML = ''; // Clear previous content

  const table = document.createElement('table');
  const headerRow = table.insertRow();
  headerRow.insertCell().textContent = "Name";
  headerRow.insertCell().textContent = "Age";

  persons.forEach(person => {
    const row = table.insertRow();
    row.insertCell().textContent = person.name;
    row.insertCell().textContent = person.age;
  });
  element.appendChild(table);
}

printPersons(persons, "personTable"); // Requires a <div id="personTable"></div> in your HTML

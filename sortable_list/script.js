const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');
const richestPeople = [
'Jeff Bezos',
'Bill Gates',
'Warren Buffett',
'Bernard Arnault',
'Carlos Slim Helu',
'Amancio Ortega',
'Larry Ellison',
'Mark Zuckerberg',
'Michael Bloomberg',
'Larry Page'
];

// Store the list items
const listItems = [];

let dragStartIndex;

// Insert List items into the DOM
function createList(){
    [...richestPeople]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort) // https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677
    .map(a => a.value)
    .forEach((person, index) => {
      console.log(person);
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index); // To keep track of the item. Data attribute creates the index.
      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
      `;

      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
};

createList();

const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// Fetch random user and add money
async function getRandomUser(){
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }
  addData(newUser);
}

function addData(obj){
    data.push(obj);

    updateDom();
}

// Update Dom
function updateDom(providedData = data){
    // Clear the main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

    providedData.forEach(item => {
      const element = document.createElement('div');
      element.classList.add('person');
      element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;

      main.appendChild(element);
    });
};

// Double money
// So we pass in each obj from the array, one at a time.
// Then, we unfurl the obj with the spread operator ...
// Then, we update things with money: obj.money * 2
function doubleMoney(){
    data = data.map(obj => {
      return {...obj, money: obj.money * 2}
    });
    console.log(data);
    updateDom();
};

// Format number as money
function formatMoney(number){
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);

doubleBtn.addEventListener('click', doubleMoney);

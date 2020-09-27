const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Rules and close event handlers
rulesBtn.addEventlistener('click', () => {
  rules.classList.add('show');
});

closeBtn.addEventlistener('click', () => {
  rules.classList.remove('show');
});

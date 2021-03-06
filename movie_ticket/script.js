const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value; // where the + changes it from a string to number


// Seat Click Event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// Movie Select Event
movieSelect.addEventListener('change', e =>{
  ticketPrice = +e.target.value;

  setMovieData(e.target.selectedIndex, e.target.value);

  updateSelectedCount();
});

// Update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;


    // Copy the selected seats into an array
    // Map through that array
    // Return a new array of indexes
    // Spread operator copies the contents of an array
    // Map returns an array
    const seatsIndex = [...selectedSeats].map(arrayCharacter => [...seats].indexOf(arrayCharacter));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
};

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};



//Get Data from local storage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((cow, index) =>{
          if(selectedSeats.indexOf(index) > -1){
              cow.classList.add('selected');
          }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null){
      movieSelect.selectedIndex = selectedMovieIndex;
    }

  };

// Check and show any saved data
populateUI();

// Initial count and total set
updateSelectedCount();

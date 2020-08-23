const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value; // where the + changes it from a string to number

// Save selected movie index and price
function setMovieData(function(movieIndex, moviePrice){
  localstorage.setItem('selectedmovieIndex', movieIndex);
  localstorage.setItem('selectedMoviePrice', moviePrice);
});

// Update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Copy the selected seats into an array
    // Map through that array
    // Return a new array of indexes
    // Spread operator copies the contents of an array
    // Map returns an array
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localstorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
};

// Movie Select Event
movieSelect.addEventListener('change', e =>{
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndiex, e.target.value);

  updateSelectedCount();
});

// Seat Click Event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});
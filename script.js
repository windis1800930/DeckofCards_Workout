// Array mit den Karten-Unicodezeichen
var deck = [
	'๐ก', '๐ข', '๐ฃ', '๐ค', '๐ฅ', '๐ฆ', '๐ง', '๐จ', '๐ฉ', '๐ช', '๐ซ', '๐ญ', '๐ฎ',
	'๐ฑ', '๐ฒ', '๐ณ', '๐ด', '๐ต', '๐ถ', '๐ท', '๐ธ', '๐น', '๐บ', '๐ป', '๐ฝ', '๐พ',
	'๐ฟ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐',
	'๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐',
	'๐', '๐'
];

const workouts = {
    '๐ก': 'PullUps','๐ข': 'PullUps','๐ฃ': 'PullUps','๐ค': 'PullUps','๐ฅ': 'PullUps','๐ฆ': 'PullUps',
    '๐ง': 'PullUps','๐จ': 'PullUps','๐ฉ': 'PullUps','๐ช': 'PullUps','๐ซ': 'PullUps','๐ญ': 'PullUps',
    '๐ฎ': 'PullUps',
    '๐ฑ': 'PushUps','๐ฒ': 'PushUps','๐ณ': 'PushUps','๐ด': 'PushUps','๐ต': 'PushUps',
    '๐ถ': 'PushUps','๐ท': 'PushUps','๐ธ': 'PushUps','๐น': 'PushUps','๐บ': 'PushUps',
    '๐ป': 'PushUps','๐ฝ': 'PushUps','๐พ': 'PushUps',
    '๐': 'Squats','๐': 'Squats','๐': 'Squats','๐': 'Squats','๐': 'Squats','๐': 'Squats',
    '๐': 'Squats','๐': 'Squats','๐': 'Squats','๐':'Squats','๐':'Squats','๐':'Squats',
	'๐': 'Squats',
    '๐':'Situps', '๐':'Situps', '๐':'Situps', '๐':'Situps', '๐':'Situps', '๐':'Situps', '๐':'Situps',
    '๐':'Situps', '๐':'Situps', '๐':'Situps', '๐':'Situps', '๐':'Situps',
	'๐': 'Situps',
    '๐ฟ': 'Joker',
    '๐': 'Joker'
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
// Funktion zum Mischen des Decks
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Mischen des Decks
window.onload = shuffleDeck(deck);

// Hinzufรผgen des Buttons
const drawButton = document.getElementById('drawButton');
drawButton.addEventListener('click', drawCard);

// Funktion zum Ziehen einer Karte
function drawCard() {
    var numCards = deck.length;
	if (numCards > 0) {
        const cardIndex = Math.floor(Math.random() * deck.length);
        const card = deck[cardIndex];

        var cardInfo = document.getElementById("card-info");
        cardInfo.textContent = "Only "+numCards+" cards left in your Workout";

        var workout = getWorkout(card);
        const workoutName = document.getElementById('workoutName');
        workoutName.innerHTML = `<div class="workout">${workout}`;

        const cardDisplay = document.getElementById('cardDisplay');
        if(workout == "Squats" || workout == "PushUps")
        {
            cardDisplay.innerHTML = `<div class="cardred">${card}`; 
        }
        else{
            cardDisplay.innerHTML = `<div class="card">${card}`;
        }
        deck.splice(cardIndex, 1);
    } 
    else{
        var cardInfo = document.getElementById("card-info");
        cardInfo.textContent = "0 cards left";
    }
}
function getWorkout(card) {
    return workouts[card];
}
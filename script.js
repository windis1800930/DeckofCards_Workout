// Array mit den Karten-Unicodezeichen
var deck = [
	'🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮',
	'🂱', '🂲', '🂳', '🂴', '🂵', '🂶', '🂷', '🂸', '🂹', '🂺', '🂻', '🂽', '🂾',
	'🂿', '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃈', '🃉', '🃊', '🃋', '🃍',
	'🃎', '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃝',
	'🃞', '🃟'
];

const workouts = {
    '🂡': 'PullUps','🂢': 'PullUps','🂣': 'PullUps','🂤': 'PullUps','🂥': 'PullUps','🂦': 'PullUps',
    '🂧': 'PullUps','🂨': 'PullUps','🂩': 'PullUps','🂪': 'PullUps','🂫': 'PullUps','🂭': 'PullUps',
    '🂮': 'PullUps',
    '🂱': 'PushUps','🂲': 'PushUps','🂳': 'PushUps','🂴': 'PushUps','🂵': 'PushUps',
    '🂶': 'PushUps','🂷': 'PushUps','🂸': 'PushUps','🂹': 'PushUps','🂺': 'PushUps',
    '🂻': 'PushUps','🂽': 'PushUps','🂾': 'PushUps',
    '🃁': 'Squats','🃂': 'Squats','🃃': 'Squats','🃄': 'Squats','🃅': 'Squats','🃆': 'Squats',
    '🃇': 'Squats','🃈': 'Squats','🃉': 'Squats','🃊':'Squats','🃋':'Squats','🃍':'Squats',
	'🃎': 'Squats',
    '🃑':'Situps', '🃒':'Situps', '🃓':'Situps', '🃔':'Situps', '🃕':'Situps', '🃖':'Situps', '🃗':'Situps',
    '🃘':'Situps', '🃙':'Situps', '🃚':'Situps', '🃛':'Situps', '🃝':'Situps',
	'🃞': 'Situps',
    '🂿': 'Joker',
    '🃟': 'Joker'
}

// Funktion zum Mischen des Decks
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
// Mischen des Decks
window.onload = shuffleDeck(deck);

// Hinzufügen des Klick-Handlers zum Button
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
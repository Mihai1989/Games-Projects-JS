//un array de obiecte
//un div eraper div
//un div pt score/puncte

//o variabila care tine un array de obiecte cu numele si calea imagini adica name si img
 const cardArray = [
   {
     name:'img1',
     img:'images/img1.jpg'
   },
   {
     name:'img1',
     img:'images/img1.jpg'
   },
   {
     name:'img2',
     img:'images/img2.jpg'
   },
   {
     name:'img2',
     img:'images/img2.jpg'
   },
   {
     name:'img3',
     img:'images/img3.jpg'
   },
   {
     name:'img3',
     img:'images/img3.jpg'
   },
   {
     name:'img4',
     img:'images/img4.jpg'
   },
   {
     name:'img4',
     img:'images/img4.jpg'
   },
   {
     name:'img5',
     img:'images/img5.jpg'
   },
   {
     name:'img5',
     img:'images/img5.jpg'
   },
   {
     name:'img6',
     img:'images/img6.jpg'
   },
   {
     name:'img6',
     img:'images/img6.jpg'
   }
 ]

 // refresh card position
 cardArray.sort(() => 0.5 - Math.random());

//o var care tine elemntul nostru div ul respectiv
 const grid = document.querySelector(".template");
 //o var care tine elementul si resultatul sorului
 const resultDisplay = document.querySelector("#result");
 const movesDisplay = document.querySelector("#moves");
 //o var cu un array gol care va stoca varianta unu si doi aleasa
 var cardsChosen = [];
 //
 var template = document.querySelector(".template");
 var cardsChosenId = [];
 var cardsWon = [];
 var transThis;
 var moves = 0;
 var timer = document.getElementById('timer');
 var watch = new Stopwatch(timer);
 //create the template/board
 function createBoard() {
   for (let i = 0; i < cardArray.length; i++) {

     var card = document.createElement('img');
     card.setAttribute('src', 'images/blank.jpg');
     card.setAttribute('data-id', i);
     card.addEventListener('click',flipCard);
     grid.appendChild(card);
   }
 }

 //check for matches
 function checkForMatch() {
   var cards = document.querySelectorAll('img');
   const optionOneId = cardsChosenId[0];
   const optionTwoId = cardsChosenId[1];

   if (cardsChosen[0] === cardsChosen[1]) {
     if (cardsChosenId[0] === cardsChosenId[1]) {
       cards[optionOneId].setAttribute('src', 'images/blank.jpg');
       cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
       alert('Sorry you can not chose the same card!');
     } else {
       alert('You found a match');
       cards[optionOneId].setAttribute('src', 'images/ok.jpg');
       cards[optionTwoId].setAttribute('src', 'images/ok.jpg');
       cardsWon.push(cardsChosen);
     }
   } else {
     incrementMoves();
     cards[optionOneId].setAttribute('src', 'images/blank.jpg');
     cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
     alert('Sorry try again!');
   }
   cardsChosen = [];
   cardsChosenId = [];
   resultDisplay.textContent = cardsWon.length;
   if (cardsWon.length === cardArray.length/2) {
     resultDisplay.textContent = 'Congratulations! You found them all!';
     watch.stop();
    var timerResult = document.querySelector('#timer').innerHTML;
    var movesResult = document.querySelector('#moves').innerHTML;
     congratsPopUp(movesResult, timerResult);
   }
 }

 //flip your card
 function flipCard() {
   play();
   watch.start();
   transThis = this;
   var cardId = this.getAttribute('data-id');
   cardsChosen.push(cardArray[cardId].name);
   cardsChosenId.push(cardId);
   this.setAttribute('src', cardArray[cardId].img);
   transThis.classList.add('open');
   if (cardsChosen.length === 2) {
     setTimeout(function(){
       checkForMatch();
       var allOpenClass = document.querySelector(".template").querySelectorAll('.open');
       for (var i = 0; i < allOpenClass.length; i++) {
         if (allOpenClass[i].classList.contains('open')) {
           allOpenClass[i].classList.remove('open');
         }
       }
     }, 500)
   }
 }

 function play() {
   var audio = document.querySelector("audio");
   audio.currentTime = 0;
   audio.play();
 }

 function incrementMoves() {
   movesDisplay.textContent = ++moves;
 }

 createBoard()

var congratsPopUp = function(move, timer) {
    alert("bravo ai reusit sa ghicesti toate imaginile " + move + " " + timer);
}

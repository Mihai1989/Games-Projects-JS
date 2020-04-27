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

const template = document.querySelector('.template');
var cardsChosen = [];
var cardsChosenId = [];

//functia care creaza imaginile, apeleaza functia filpcard si lipeste datele create divu-lui nostru
function addCardsToMyDiv() {
  //iterez myImages
  for (let i = 0; i < myImages.length; i++) {
    //creez elementul de img
    var card = document.createElement('img');
    //ii setez atributul src cum imaginea blank adica imaginea de start
    card.setAttribute('src','images/blank.jpg');
    //ii setez atributul data-id cu fiecare i adica 1,2...cate imagini avem in for loop
    card.setAttribute('data-id', i);
    //aici vom apela functia flip card
    card.addEventListener('click', flipCard);
    //vom lipi datele create elementului nostru adica template
    template.appendChild(card);
  }
}

function flipCard() {
  //stocheaza data-id create din iterare (data-id din template)
  var cardId = this.getAttribute('data-id');
  //o variabila care in functie de data-id va lua name(img1) si il va stoca intrun array
  cardsChosen.push(myImages[cardId].name);//in functie de data-id din template iei img1 din array cardsChosen
  //stocheaza card-id ales (0,1,2...)
  cardsChosenId.push(cardId);
  //o variabila care in functie de cardId va schimba src imagini initiale cu cea din myImages
  this.setAttribute('src', myImages[cardId].img //in functie de card-id iei si img calea imagini

  console.log(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenId);
  console.log(this);
  //console.log());
}

addCardsToMyDiv();

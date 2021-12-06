import React ,{useState} from 'react'
import './DeckBuilder.css'

function DeckBuilder() {
const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ];
const deckBuilder= () =>
{
  const cards = [];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    const suit = suits[i];
    const value = values[j];
    cards.push({ value, suit });
  }
}
return cards;
}
var GenCards = deckBuilder();
const [Cards, setCards] = useState(GenCards);

console.log('Cards deck',Cards);
const randomCard = (data)=> { 
  const random = Math.floor(Math.random() * 51);  
  const cardValue = data[random]?.value;
  const cardSuit = data[random]?.suit;

  const currentCard  = {value: cardValue, suit: cardSuit}
  console.log('current card is ', (currentCard));

  let tempCards = Cards.filter((item)=>(
     item.value !== cardValue || item.suit !== cardSuit)
  )
  setCards(tempCards);
  console.log(tempCards);

  let entity;
  cardSuit === "Diamonds" ? (entity = "&diams;") : (entity = "&" + cardSuit?.toLowerCase() + ";");
  
  const card = document.createElement("div");
  card.classList.add("card", cardSuit?.toLowerCase());
  card.innerHTML = 
  '<span class="card-value-suit top">' + cardValue + entity + '</span>' + 
  '<span class="card-suit">' + entity + '</span>' + 
  '<span class="card-value-suit bot">' + cardValue + entity + '</span>';
  document.body.appendChild(card)
}
const chooseRandomCard =(e)=>{
  e.preventDefault();
  //randomCard(Cards)
}
  return (
    <div className='deck_picker' >
      <button className='pick_card_btn' onClick={(e)=>chooseRandomCard(e) }>Pick Random 5 Cards</button>
      <p>Picked Cards</p>
      <p className='card_rand'>{randomCard(Cards)}</p>
    </div>
  )
}

export default DeckBuilder

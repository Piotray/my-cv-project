import React, { useState } from 'react';
import './index.css'; 

function App() {
  const [flippedCard, setFlippedCard] = useState(null);

  const cards = [
    { id: 1, content: 'HTML + CSS 💪💪💪'},
    { id: 2, content: 'We all hold many unknowns. Let me shed some light on who I am to clear up any uncertainty. Click the boxes. 👈👇👉'},
    { id: 3, content: 'Python ✌✌'},
    { id: 4, content: 'JavaScript  🤘🤘🤘'},
    { id: 5, content: 'English (C1), German (B1) 🖐'},
    { id: 6, content: 'React🤜🤛' },
    { id: 7, content: 'PostgreSQL👌'},
    { id: 8, content: 'Background: marketing, advertising 😎' }
  ];

  const handleCardHover = (cardId) => {
    setFlippedCard(cardId);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
  };

  return (
    <div className="container">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card card-${card.id} ${flippedCard === card.id ? 'flipped' : ''}`}
          onClick={() => handleCardHover(card.id)}
          onMouseLeave={handleCardLeave}
        >
          <div className="front">
          {card.id === 2 && <div className="circle">
            <p className='title'>👁</p></div>}
          </div>
          <div className="back">{card.content}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

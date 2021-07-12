import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [texts, setTexts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setTexts(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs : </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {texts.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

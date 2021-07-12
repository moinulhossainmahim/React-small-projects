import React from 'react';

const List = ({ people, setPeople }) => {
  const removeEach = (id) => {
    setPeople((prevPeople) => {
      const newPeople = prevPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  console.log(people, setPeople);
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
            <button onClick={() => removeEach(id)}>Remove</button>
          </article>
        );
      })}
    </>
  );
};

export default List;

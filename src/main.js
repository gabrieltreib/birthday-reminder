import React from 'react';
import { data } from './data'

const BirthdayReminder = () => {
 const [people, setPeople] = React.useState(data);



 return (
  <>
   {people.map((person) => {
    const { id, name, age, img } = person;

    return (
     <div key={id} className='item'>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <img src={img}></img>
     </div>

    );
   })}
   <button onClick={() => setPeople([])}> clear all</button>
  </>
 );
};

export default BirthdayReminder;
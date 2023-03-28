import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';

const stateLetters = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];


const DatePickerStart = () => {
const [date, setDate] = useState('');
const dateInputRef = useRef(null);

const handleChange = (e) => {
  setDate(e.target.value);
  console.log(e.target.value);
  };

  return (
    <div>
      <p>Start Date: {date}</p>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
    </div>
  );
};

const DatePickerEnd = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);
  
  const handleChange = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
    };
  
    return (
      <div>
        <p>End Date: {date}</p>
        <input
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
        />
      </div>
    );
  };


const NewTripInput = ()=>{

  const mapping = stateLetters.map((state, index) => <option value={state} key={index}>{state}</option>)
  // will be able to grab the value on change
  // can do onChange for selecting value
  //  DATE 
  // 2023-03-24

return(
  
    <label>
      State:
      <select name="selectedState">
        {mapping}
      </select>
      <br />
      <DatePickerStart />
      <DatePickerEnd />
    </label>
 )

};

export default NewTripInput;

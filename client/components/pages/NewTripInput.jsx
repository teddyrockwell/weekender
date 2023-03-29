import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const stateLetters = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

// Date format
// yyyy-mm-dd
// create new date object

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
const yyyy = today.getFullYear();
if(dd < 10)
{
    dd=`0${dd}`;
}

if(mm < 10)
{
    mm=`0${mm}`;
}
today = `${yyyy}-${mm}-${dd}`;
// console.log(today);
// get year, month, day
// create template literal to auto update

const DatePickerStart = ({ startDate, setStartDate }) => {
const handleChange = (e) => {
  setStartDate(e.target.value);
  console.log(e.target.value);
  };

  return (
    <div>
      <p>Start Date: {startDate}</p>
      <input
        type="date"
        onChange={handleChange}
        value={startDate}
        min={today}
      />
    </div>
  );
};

const DatePickerEnd = ({ endDate, setEndDate }) => {

  const handleChange = (e) => {
    setEndDate(e.target.value);
    console.log(e.target.value);
    };

    return (
      <div>
        <p>End Date: {endDate}</p>
        <input
          type="date"
          onChange={handleChange}
          value={endDate}
          min={today}
        />
      </div>
    );
  };


const NewTripInput = ({updateNewTripState}) => {
  // handle the state setting here
  const [ selectedState, setSelectedState ] = useState('');
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');


  //function passed from parent to grab the state and bring it up
  updateNewTripState(selectedState, startDate, endDate);

  // passing props => selectedState={selectedState}, startDate={startDate}, endDate={end}

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    console.log(e.target.value);
  }

  const stateOptions = stateLetters.map((state, index) => <option value={state} key={index}>{state}</option>)

return(

    <div className='container'>
    <label>
      State: 
      <select name="selectedState" value={selectedState} onChange={handleStateChange}>
        {stateOptions}
      </select>
      <br />
      <DatePickerStart startDate={startDate} setStartDate={setStartDate} />
      <DatePickerEnd endDate={endDate} setEndDate={setEndDate} />
    </label>
    <br />
    <p>Please select dates within 10 days of today (for accurate weather predictions):</p>
    <DisplayTripInfo selectedState={selectedState} startDate={startDate} endDate={endDate} />
    </div>
 )

};

const DisplayTripInfo = ({ selectedState, startDate, endDate }) => {
return (
  <div>
    {selectedState}
    <br />
    {startDate}
    <br />
    {endDate}
  </div>
)
}

export default NewTripInput;

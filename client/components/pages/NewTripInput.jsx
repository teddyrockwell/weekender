import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const stateLetters = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

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
        />
      </div>
    );
  };


const NewTripInput = () => {
  // handle the state setting here
  const [ selectedState, setSelectedState ] = useState('');
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');

  // passing props => selectedState={selectedState}, startDate={startDate}, endDate={end}

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    console.log(e.target.value);
  }

  const stateOptions = stateLetters.map((state, index) => <option value={state} key={index}>{state}</option>)
  // will be able to grab the value on change
  // can do onChange for selecting value
  //  DATE 
  // 2023-03-24

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

const DisplayTripInfo = (props) => {
return (
  <div>
    {props.selectedState}
    <br />
    {props.startDate}
    <br />
    {props.endDate}
  </div>
)
}

export default NewTripInput;

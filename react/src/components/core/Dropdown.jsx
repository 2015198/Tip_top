import React, { useState } from 'react';

var dropdownvalue = async ()=>{
  selectedOption
}

const Dropdown1 = ({ dropdown, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };
  
  return (
    <>
      <label htmlFor="site_id" className="block text-sm font-medium leading-6 text-gray-900">
        Select site
      </label>
      <div className="mt-2">
        <select
          required
          value={selectedOption}
          onChange={handleOptionChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {Array.isArray(dropdown) && dropdown.length > 0 ? (
            dropdown.map((item) => (
              <option key={item.id} value={item.id}
              >
                {item.id} {item.name}
              </option>
            ))
          ) : (
            <option disabled>No options available</option>
          )}
        </select>
        <p>Selected option: {selectedOption}</p>
      </div>
    </>
  );
};

export default Dropdown1;



import React from 'react'

import PropTypes from 'prop-types';
const FilterDoctors = ({ types, handleFilterChange }) => {
  return (
    <select className="catSelect" onChange={e => handleFilterChange(e.currentTarget.value)}>
      <option value="All">All</option>
      {types.map(type => (
        <option value={type} key={type}>
          {type}
        </option>
      ))}
    </select>
  )
}
FilterDoctors.propTypes = {
  type: PropTypes.instanceOf(Object).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
export default FilterDoctors
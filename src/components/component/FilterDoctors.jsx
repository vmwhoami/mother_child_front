import React from 'react';
import PropTypes from 'prop-types';

const FilterDoctors = ({ types, handleFilterChange }) => (
  <select className="catSelect" onChange={(e) => handleFilterChange(e.currentTarget.value)}>
    <option value="All">All</option>
    {types.map((type) => (
      <option value={type} key={type}>
        {type}
      </option>
    ))}
  </select>
);
FilterDoctors.propTypes = {
  types: PropTypes.instanceOf(Object).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
export default FilterDoctors;

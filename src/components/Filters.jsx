import { useState } from 'react';
import { Accordion } from './Accordion';
import 'styles/Filters.css';

export function Filters() {
  const [genderFilter, setGenderFilter] = useState({
    Male: false,
    Female: false,
    Unisex: false
  });

  const [sizes, setSizes] = useState({
    Small: false,
    Medium: false,
    'X-Large': false,
    Large: false
  });

  const [brands, setBrands] = useState({
    'Allen Solly': false,
    Addidas: false,
    Puma: false,
    'Lee Cooper': false,
    'Ray Ban': false,
    Nike: false
  });

  const onGenderFilterChange = (e) => {
    setGenderFilter({ ...genderFilter, [e.target.name]: e.target.checked });
  };

  const onSizesChange = (e) => {
    setSizes({ ...sizes, [e.target.name]: e.target.checked });
  };

  const onBrandsChange = (e) => {
    setBrands({ ...brands, [e.target.name]: e.target.checked });
  };

  return (
    <div className="filters-container">
      <h2 className="filter-title">Filters</h2>
      <Accordion
        title="GENDER"
        content={Object.keys(genderFilter).map((value, index) => {
          return (
            <div key={index}>
              <label htmlFor={value}>
                <input
                  id={value}
                  className="checkbox"
                  type="checkbox"
                  onChange={onGenderFilterChange}
                  name={value}
                  value={genderFilter[value]}
                />
                {value}
              </label>
              <br />
            </div>
          );
        })}
      />
      <Accordion
        title="SIZES"
        content={Object.keys(sizes).map((value, index) => {
          return (
            <div key={index}>
              <label htmlFor={value}>
                <input
                  id={value}
                  className="checkbox"
                  type="checkbox"
                  onChange={onSizesChange}
                  name={value}
                  value={sizes[value]}
                />
                {value}
              </label>
              <br />
            </div>
          );
        })}
      />
      <Accordion
        title="BRANDS"
        content={Object.keys(brands).map((value, index) => {
          return (
            <div key={index}>
              <label htmlFor={value}>
                <input
                  id={value}
                  className="checkbox"
                  type="checkbox"
                  onChange={onBrandsChange}
                  name={value}
                  value={brands[value]}
                />
                {value}
              </label>
              <br />
            </div>
          );
        })}
      />
    </div>
  );
}

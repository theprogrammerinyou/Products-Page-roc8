import { useState, useEffect } from 'react';
import { useProductContext } from 'context/product-context';
import { products } from 'products';
import { Accordion } from './Accordion';
import 'styles/Filters.css';

export function Filters() {
  const { product, setProducts, resetFilter, priceFilter, setPriceFilter } = useProductContext();
  const [genderFilter, setGenderFilter] = useState([]);

  const [sizes, setSizes] = useState([]);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // filter products based on sizes
    if (sizes.length > 0) {
      const filteredProducts = products.filter((p) => {
        return sizes.includes(p.Size);
      });
      setProducts(filteredProducts);
    }
    // filter products based on brands
    if (brands.length > 0) {
      const filteredProducts = products.filter((p) => {
        return brands.includes(p.Brand);
      });
      setProducts(filteredProducts);
    }
    // filter products based on gender
    if (genderFilter.length > 0) {
      const filteredProducts = products.filter((p) => {
        return genderFilter.includes(p.gender);
      });
      setProducts(filteredProducts);
    }

    // filter
    if (sizes.length > 0 && brands.length > 0 && genderFilter.length > 0) {
      const filteredProducts = products.filter((p) => {
        return (
          sizes.includes(p.Size) && brands.includes(p.Brand) && genderFilter.includes(p.gender)
        );
      });
      setProducts(filteredProducts);
    }
    // reset filter
    if (sizes.length === 0 && brands.length === 0 && genderFilter.length === 0) {
      resetFilter();
    }
  }, [sizes, brands, genderFilter]);

  useEffect(() => {
    // filter
    if (priceFilter === 'High to Low') {
      const filteredProducts = product.sort((a, b) => b.Price - a.Price);

      setProducts(filteredProducts);
    }
    if (priceFilter === 'Low to High') {
      const filteredProducts = product.sort((a, b) => a.Price - b.Price);
      setProducts(filteredProducts);
    }
  }, [priceFilter]);

  const onGenderFilterChange = (e) => {
    // add

    if (genderFilter.includes(e.target.name)) {
      setGenderFilter(genderFilter.filter((gender) => gender !== e.target.name));
    } else {
      setGenderFilter([...genderFilter, e.target.name]);
    }
  };

  const onSizesChange = (e) => {
    if (sizes.includes(e.target.name)) {
      setSizes(sizes.filter((size) => size !== e.target.name));
    } else {
      setSizes([...sizes, e.target.name]);
    }
  };

  const onBrandsChange = (e) => {
    // add brand to brands array if selected and remove if unselected
    if (brands.includes(e.target.name)) {
      setBrands(brands.filter((brand) => brand !== e.target.name));
    } else {
      setBrands([...brands, e.target.name]);
    }
  };
  const resetFilters = () => {
    setSizes([]);
    setBrands([]);
    setGenderFilter([]);
    resetFilter();
  };

  return (
    <div className="filters-container">
      <h2 className="filter-title">Filters</h2>
      <div>
        <button type="button" className="reset-btn" onClick={resetFilters}>
          Reset
        </button>
        <h4>Active Filters</h4>
        <div className="active-filters">
          {sizes.length > 0 && (
            <div className="active-filter">
              <h4>Sizes</h4>
              <ul>
                {sizes.map((size, index) => {
                  return <li key={index}>{size}</li>;
                })}
              </ul>
            </div>
          )}
          {brands.length > 0 && (
            <div className="active-filter">
              <h4>Brands</h4>
              <ul>
                {brands.map((brand, index) => {
                  return <li key={index}>{brand}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Accordion
        title="GENDER"
        content={['Male', 'Female'].map((value, index) => {
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
        content={['X-Large', 'Large', 'Small', 'Medium'].map((value, index) => {
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
        content={['Allen Solly', 'Nike', 'Puma', 'Ray Ban'].map((value, index) => {
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
      <Accordion
        title="PRICE"
        content={['High to Low', 'Low to High'].map((value, index) => {
          return (
            <div key={index}>
              <label htmlFor={value}>
                <input
                  id={value}
                  className="checkbox"
                  type="radio"
                  onChange={(e) => setPriceFilter(e.target.value)}
                  name="price"
                  value={value}
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

/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from 'react';
import { products } from 'products';

const ProductContext = createContext({});

function ProductProvider({ children }) {
  const [product, setProduct] = useState(products);

  const [priceFilter, setPriceFilter] = useState('Low to High');
  const resetFilter = () => {
    setProduct(products);
  };
  return (
    <ProductContext.Provider
      value={{
        product,
        setProducts: setProduct,
        resetFilter,
        priceFilter,
        setPriceFilter
      }}>
      {children}
    </ProductContext.Provider>
  );
}

const useProductContext = () => {
  return useContext(ProductContext);
};

export { useProductContext, ProductProvider };

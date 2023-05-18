import { useState, useEffect } from "react";
import { createContext } from "react";
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  // setCurrentProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  // useEffect(() => {
  //   setCurrentProducts(SHOP_DATA);
  // }, []);


return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
};

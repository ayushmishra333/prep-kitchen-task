import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );

    case "DELETE":
      return state.filter((p) => p.id !== action.payload);

    default:
      return state;
  }
};

export const ProductProvider = ({ children, initialProducts }) => {
  const [state, dispatch] = useReducer(productReducer, initialProducts);

  return (
    <ProductContext.Provider value={{ products: state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
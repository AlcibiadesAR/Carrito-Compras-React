import { useReducer } from "react";
import { CartContext } from "./cartContext";

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "[CART] Add Product":
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity || 1 }
            : product
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case "[CART] Remove Product":
      return state.filter((product) => product.id !== action.payload);
    case "[CART] Increment Quantity":
      return state.map((product) => {
        const cant = product.quantity + 1;
        if (product.id === action.payload) return { ...product, quantity: cant };
        return product;
      });

    case "[CART] Decrement Quantity":
        return state.map(product => {
            if (product.id === action.payload) {
              const newQuantity = product.quantity - 1;
              return { ...product, quantity: Math.max(newQuantity, 1) }; 
            }
            return product;
          });
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [shoppingList, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product) => {
    dispatch({ type: "[CART] Add Product", payload: product });
  };

  const removeProduct = (id) => {
    dispatch({ type: "[CART] Remove Product", payload: id });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: "[CART] Increment Quantity", payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: "[CART] Decrement Quantity", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        shoppingList,
        addProduct,
        removeProduct,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

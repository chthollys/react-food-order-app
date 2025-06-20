import { createContext, useEffect, useState } from "react";

export const UserProgressContext = createContext({
  userProgress: { cart: false, checkout: false },
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState({
    cart: false,
    checkout: false,
  });

  function showCart() {
    setUserProgress((prevState) => {
      return {
        ...prevState,
        cart: true,
      };
    });
  }

  function hideCart() {
    setUserProgress((prevState) => {
      return {
        ...prevState,
        cart: false,
      };
    });
  }

  function showCheckout() {
    setUserProgress((prevState) => {
      return {
        ...prevState,
        checkout: true,
      };
    });
  }

  function hideCheckout() {
    setUserProgress((prevState) => {
      return {
        ...prevState,
        checkout: false,
      };
    });
  }

  const contextValue = {
    userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext value={contextValue}>{children}</UserProgressContext>
  );
}

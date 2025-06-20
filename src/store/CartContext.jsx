import { createContext, useReducer } from "react";

/**
 * @typedef {Object} CartContext
 * @property {Array<Object>} items - The items in the cart.
 * @property {(item: Object) => void} addItem - Function to add an item to the cart.
 * @property {(id: string, amount: number) => void} updateItem - Function to update the quantity of an item.
 * @property {(id: string) => void} removeItem - Function to remove an item from the cart.
 * @property {() => void} clearCart - Function to clear all item in cart.
 */

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  updateItem: (id, amount) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state.items];

      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === action.item.id,
      );
      const existingItem = updatedItems[existingItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          ...action.item,
          quantity: 1,
        });
      }
      return {
        ...state,
        items: updatedItems,
      };
    }

    case "UPDATE_ITEM": {
      const updatedItems = [...state.items];
      const { id, amount: updateAmount } = action.payload;

      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id,
      );
      const existingItem = updatedItems[existingItemIndex];
      if (existingItem) {
        if (existingItem.quantity + updateAmount <= 0) {
          updatedItems.splice(existingItemIndex, 1);
        } else {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + action.payload.amount,
          };
          updatedItems[existingItemIndex] = updatedItem;
        }
        return {
          ...state,
          items: updatedItems,
        };
      }
      return state;
    }

    case "REMOVE_ITEM": {
      const updatedItems = [...state.items];

      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      const existingItem = updatedItems[existingItemIndex];
      if (existingItem) {
        updatedItems.splice(existingItemIndex, 1);
      }
      return {
        ...state,
        items: updatedItems,
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        items: [],
      };
    }

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCart({
      type: "ADD_ITEM",
      item,
    });
  }

  function updateItem(id, amount) {
    dispatchCart({
      type: "UPDATE_ITEM",
      payload: {
        id,
        amount,
      },
    });
  }

  function removeItem(id) {
    dispatchCart({
      type: "REMOVE_ITEM",
      payload: { id },
    });
  }

  function clearCart() {
    dispatchCart({
      type: "CLEAR_CART",
    });
  }

  const contextValue = {
    items: cart.items,
    addItem,
    updateItem,
    removeItem,
    clearCart,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}

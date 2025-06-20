import { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import { currencyFormatter } from "../../util/formatting";
import { getItemsTotalPrice } from "../../util/totalprice";
import CartItem from "./CartItem";

export default function Cart() {
  const { items, updateItem, removeItem } = useContext(CartContext);
  const { userProgress, hideCart, showCheckout } =
    useContext(UserProgressContext);

  const cartTotalPrice = getItemsTotalPrice(items);

  function handleCloseCart() {
    hideCart();
  }

  function handleGoToCheckout() {
    showCheckout();
    hideCart();
  }

  return (
    <Modal className="cart" open={userProgress.cart} onClose={handleCloseCart}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => updateItem(item.id, -1)}
            onIncrease={() => updateItem(item.id, 1)}
            onDelete={() => {
              removeItem(item.id);
            }}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}

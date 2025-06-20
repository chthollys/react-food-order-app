import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import { getItemsTotalPrice } from "../util/totalprice";
import { currencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "./hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const { items, clearCart } = useContext(CartContext);
  const { userProgress, hideCheckout } = useContext(UserProgressContext);
  const {
    data,
    isPending: isSending,
    error,
    sendRequest,
    clearData,
    clearError,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customer = Object.fromEntries(fd.entries());

    sendRequest(JSON.stringify({ order: { items, customer } }));
  }

  function handleClearError() {
    clearError();
  }

  function handleCloseCheckout() {
    hideCheckout();
  }

  function handleFinishOrder() {
    hideCheckout();
    clearCart();
    clearData();
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button onClick={handleClearError}>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending Order...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={userProgress.checkout} onClose={handleFinishOrder}>
        <h2>Thank You for Your Order!</h2>
        <p>Your Order ID: {data.id}</p>
        <p className="modal-actions">
          <Button onClick={handleFinishOrder}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgress.checkout} onClose={handleCloseCheckout}>
      <form onSubmit={handleFormSubmit}>
        <h2>Checkout</h2>
        <p>
          Total Amount: {currencyFormatter.format(getItemsTotalPrice(items))}
        </p>

        <Input label="Full Name" type="text" id="name" name="name" />
        <Input label="E-Mail Address" type="email" id="email" name="email" />
        <Input label="Street" type="text" id="street" name="street" />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            name="postal-code"
          />
          <Input label="City" type="text" id="city" name="city" />
        </div>

        {error && (
          <Error title="Failed to send order" message={error.message} />
        )}

        <p className="modal-action">{actions}</p>
      </form>
    </Modal>
  );
}

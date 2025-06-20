import { currencyFormatter } from "../../util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onDecrease,
  onIncrease,
  onDelete,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <div className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
        <div>
          <button className="cart-item-remove-action" onClick={onDelete}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

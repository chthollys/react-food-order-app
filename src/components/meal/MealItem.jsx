import { useContext } from "react";
import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";
import { CartContext } from "../../store/CartContext";

export default function MealItem({
  meal: { id, name, image, price, description },
}) {
  const { addItem } = useContext(CartContext);

  function handleAddMeal() {
    addItem({ id, name, image, price, description });
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={`${name}'s image`} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p>
          <Button onClick={handleAddMeal}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}

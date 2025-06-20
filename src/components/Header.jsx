import { useContext } from "react";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import logoImg from "../assets/logo.jpg";

export default function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const itemsCount = items.reduce(
    (currentValue, item) => currentValue + item.quantity,
    0,
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo's Image" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCart}>
          Cart ({itemsCount})
        </Button>
      </nav>
    </header>
  );
}

import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "../Error.jsx";

const requestConfig = {};

export function Meals() {
  const {
    data: loadedMeals,
    isPending,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isPending) {
    return <p className="center">Fetching Meals</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error.message} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSauce,
  addToppings,
  clearToppingsAndSauce,
  toggleGluten,
} from "../../slicer/pizzaSlice";
// import { addSauce, addToppings } from "../slicer/pizzaSlice";
const PizzaPage = () => {
  const pizza = useSelector((store) => store.pizzaInfo);
  // const user = useSelector((store)=> store.userInfo);
  // const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // dispatch(addToppings)
  const hanldeOnAddToppings = (toping) => {
    alert(toping);
    // add to redux - store
    // addToppings(tp);
    dispatch(addToppings(toping));
    // setToppings
  };
  const hanldeOnAddSauce = (sauce) => {
    alert(sauce);
    // add to redux - store
    dispatch(addSauce(sauce));
  };
  const hanldeOnClearSauce = () => {
    alert("do you want to deltete sauce");
    // add to redux - store
    dispatch(clearToppingsAndSauce());
  };
  const hanldeOnClearToggleSauce = () => {
    alert("do you want to toogle");
    // add to redux - store
    dispatch(toggleGluten());
  };
  return (
    <div>
      <h1>PIZZA</h1>
      <h2>Toppings:</h2>
      {pizza.toppings.map((item) => {
        return <div>{item}</div>;
      })}
      <h2>Sauce</h2>
      {pizza.sauce.map((item) => {
        return <div>{item}</div>;
      })}
      <h2>Gluten</h2>
      {pizza.gluten.toString()}
      <p>
        <button onClick={() => hanldeOnAddToppings("Anchovies")}>
          ADD Anchovies
        </button>
        <button onClick={() => hanldeOnAddToppings("Olives")}>
          ADD Olives
        </button>
        <button onClick={() => hanldeOnAddToppings("Pineapple")}>
          ADD pineapple
        </button>
      </p>
      <p>
        <button onClick={() => hanldeOnAddSauce("BBQ")}>ADD BBQ</button>
        <button onClick={() => hanldeOnAddSauce("Aoili")}>ADD Aoili</button>
        <button onClick={() => hanldeOnAddSauce("Sweet Chili")}>
          ADD Sweet Chili
        </button>
      </p>
      <p>Clear Everything</p>
      <button onClick={() => hanldeOnClearSauce()}>clear sauce</button>
      <p>Toggle Gluten</p>
      <button onClick={() => hanldeOnClearToggleSauce()}>Toggle sauce</button>
    </div>
  );
};
export default PizzaPage;

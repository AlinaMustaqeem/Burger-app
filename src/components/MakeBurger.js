import { useState } from 'react';
import Buttons from './Buttons';
import AddIngredients from './AddIngredients';

const MakeBurger = () => {
  const [cheese, setCheese] = useState(0);
  const [tomato, setTomato] = useState(0);
  const [lettuce, setLettuce] = useState(0);
  const [meat, setMeat] = useState(0);

  const UpdateIngredients = (ingredient, operation) =>{
    switch (ingredient) {
      case 'cheese':
        if (operation === "add")
        {
          setCheese(cheese + 1)
        }
        else
        {
          cheese > 0 ? setCheese(cheese - 1) : setCheese(cheese)
        }
        break;
      case 'tomato':
        if (operation === "add")
        {
          setTomato(tomato + 1)
        }
        else
        {
          tomato > 0 ? setTomato(tomato - 1) : setTomato(tomato)
        }
        break;
      case 'lettuce':
        if (operation === "add")
        {
          setLettuce(lettuce + 1)
        }
        else
        {
          lettuce > 0 ? setLettuce(lettuce - 1) : setLettuce(lettuce)
        }
        break;
      case 'meat':
        if (operation === "add")
        {
          setMeat(meat + 1)
        }
        else
        {
          meat > 0 ? setMeat(meat - 1) : setMeat(meat)
        }
        break;
      default:
        console.log(`Sorry, we are out of .`);
    }
  }

  return(
    <div>
      <img src="/assets/top.jpg" alt="logo" />
      <div></div>
      <AddIngredients ingredientLength={cheese} imgName="cheese" />
      <AddIngredients ingredientLength={tomato} imgName="tomato" />
      <AddIngredients ingredientLength={lettuce} imgName="lettuse" />
      <AddIngredients ingredientLength={meat} imgName="meat" />
      <img src="/assets/bottom.jpg" alt="logo" />

      <hr />

      <Buttons Subingredient={() => UpdateIngredients("cheese", "Sub")} Addingredient={() => UpdateIngredients("cheese", "add")} ingredientName="Cheese" />
      <Buttons Subingredient={() => UpdateIngredients("tomato", "Sub")} Addingredient={() => UpdateIngredients("tomato", "add")} ingredientName="Tomato" />
      <Buttons Subingredient={() => UpdateIngredients("lettuce", "Sub")} Addingredient={() => UpdateIngredients("lettuce", "add")} ingredientName="Lettuce" />
      <Buttons Subingredient={() => UpdateIngredients("meat", "Sub")} Addingredient={() => UpdateIngredients("meat", "add")} ingredientName="Meat" />

    </div>
  )


}

export default MakeBurger

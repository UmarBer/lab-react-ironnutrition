import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFoodState] = useState({ foods, totalCalories: 0 });
  const [formState, setFormState] = useState({ showing: false });

  const showForm = () => {
    setFormState({ showing: true });
  };

  const addFood = (event) => {
    event.preventDefault();
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
      quantity: 0,
    };
    let updatedFoods = [...foods, newFood];
    // updatedFoods.unshift(newFood);
    setFoodState({ foods: updatedFoods });
    setFormState({ showing: false });
    console.log(food);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>

      {formState.showing ? (
        <form id="add-food-form" onSubmit={addFood}>
          <h2>Add new food</h2>
          <div className="inputs">
            <label>Name</label>
            <input className="input" type="text" name="name"></input>
            <label>Calories</label>
            <input className="input" type="number" name="calories"></input>
            <label>Image</label>
            <input className="input" type="file" name="image"></input>
          </div>
          <input type="submit" value="Add Food" />
        </form>
      ) : (
        <button onClick={showForm}>Add Food</button>
      )}
      {food.foods.map((dish) => {
        return (
          <div className="column">
            <FoodBox
              name={dish.name}
              calories={dish.calories}
              image={dish.image}
              quantity={dish.quantity}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

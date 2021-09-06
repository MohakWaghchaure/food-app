import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {id:'001', name: 'test001', description: 'test Description 001', price: 22},
    {id:'002', name: 'test002', description: 'test Description 002', price: 22},
    {id:'003', name: 'test003', description: 'test Description 003', price: 22},
    {id:'004', name: 'test004', description: 'test Description 004', price: 22},
    {id:'005', name: 'test005', description: 'test Description 005', price: 22},
    {id:'006', name: 'test006', description: 'test Description 006', price: 22},
    {id:'007', name: 'test007', description: 'test Description 007', price: 22},
]

const AvailableMeals = ()=>{   
    const mealsList = DUMMY_MEALS.map(meal=> 
        <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description}></MealItem>
    ) 
    console.log('meals..', mealsList);
    return(
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>                
            </Card>
        </section>
    )
}

export default AvailableMeals;
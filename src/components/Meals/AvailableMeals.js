import React, { useEffect, useState } from "react";
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
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    
    useEffect(()=>{
        const fetchMeals = async()=>{
            const response = await fetch('database_link_for_meals',);
            if(!response.ok){
                throw new Error('Something went wrong !!!');
            }
            const responseData = await response.json();

            const loadedMeals = []
            for(const key in responseData){
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };
        
        fetchMeals().catch((e)=>{
            setIsLoading(false);
            setHttpError(e.message);
        })      
    }, []);
     
    if(isLoading){
        return (
            <section className={classes.mealsLoading}>
                <p>Loading...</p>
            </section>
        )
    };
    if(httpError){
        return(
            <section className={classes.mealsError}>
                <p>{httpError}</p>
            </section>
        )
    }
    const mealsList = meals.map(meal=> 
        <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description}></MealItem>
    );
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
import React from "react";
import {Categories, SortPopup, PizzaBlock} from "../components";
export default function Home({pizzas}) {
    
    return(
        <div className="container">
            <div className="content__top">

                <Categories items={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
                <SortPopup items={[
                    {name:'популярности', type: 'popular'}, 
                    {name:'цене', type: 'price'}, 
                    {name: 'алфавиту', type: 'alfabet'}
                    ]} />
                
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">


            {
                pizzas && pizzas.map(((pizza, i) => {
                    return(
                        <PizzaBlock key={`${pizza}_${i}`} {...pizza} />
                    )
                }))
                
            }
                
            </div>
        </div>
    )
}
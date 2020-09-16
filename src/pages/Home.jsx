import React, {useCallback} from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

import {setCategory, setSortBy} from '../redux/actions/filters';
import Preload from '../components/Preload';

const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const sortArray = [
    {name:'популярности', type: 'popular', order:'desc'}, 
    {name:'цене', type: 'price', order:'desc'}, 
    {name: 'алфавиту', type: 'name', order:'asc'}
];

export default function Home() {

    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector((state) => state.pizzas);
    const {category, sortBy} = useSelector((state) => state.filters);
    const cartItems = useSelector(({cart}) => cart.items);
    
    const onSelectCategory = useCallback( (index) => { 
        dispatch(setCategory(index))
        // eslint-disable-next-line
    }, []);

    const onClickAddPizza = (obj) => dispatch(addPizzaToCart(obj));

    const onClickSortType = (type) => dispatch(setSortBy(type));

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
        // eslint-disable-next-line
    }, [category, sortBy]);

    return(
        <div className="container">
            <div className="content__top">

                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
                <SortPopup activeSortType={sortBy.type} sortItems={sortArray} onClickSortType={onClickSortType} />
                
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">


            {
                isLoaded 
                    ? items && items.map(((pizza, i) => {
                        return(
                            <PizzaBlock 
                            onClickAddPizza={onClickAddPizza} 
                            key={`${pizza}_${i}`} 
                            addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
                            {...pizza} />
                        )
                    }))
                    : Array(12).fill(0).map( (_, i) => <Preload key={i} />)
                
            }
                
            </div>
        </div>
    )
}
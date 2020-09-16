import axios from "axios";

export const constantPizzas = {
  SET_PIZZAS: 'SET_PIZZAS',
  FETCH_PIZZAS: 'FETCH_PIZZAS',
  SET_LOADED: 'SET_LOADED'
}

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false)); 
  axios.get(`/pizzas?${category > 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then( ({data}) => dispatch(setPizzas(data)))   
};

export const setPizzas = (items) => ({
  type: constantPizzas.SET_PIZZAS,
  payload: items
});

export const setLoaded = (payload) => ({
  type: constantPizzas.SET_LOADED,
  payload
});
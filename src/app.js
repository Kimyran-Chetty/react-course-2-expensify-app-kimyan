import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore';
import getVisbleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();

// store.subscribe(()=>{
//     const state = store.getState();
//     const visibleExpenses = getVisbleExpenses(state.expenses,state.filters)
//     console.log(visibleExpenses);
    
// }); 


const expenseOne = store.dispatch(addExpense({description: 'Water Bill', note: 'This was the water bill ', amount: 55500, createdAt: 2000}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas Bill', note: 'This was the gas bill ', amount: 64500, createdAt: 3000}));
const expenseThree = store.dispatch(addExpense({description: 'Rent Bill', note: 'This was the gas bill ', amount: 109500, createdAt: 1000}));

// store.dispatch(setTextFilter('water'));

// setTimeout(() =>{
//     store.dispatch(setTextFilter('bill')); 
// }, 3000)

//Solution without using subcribe (which must be subcribed before dispatch calls).
const state = store.getState();
const visibleExpenses = getVisbleExpenses(state.expenses,state.filters)
console.log(visibleExpenses);



const jsx = (
    <Provider store = {store} >
        <AppRouter />
    </Provider>
    
);
  

ReactDOM.render( jsx, document.getElementById('app'));


import {createStore} from 'redux';


//Example of deconstructing objects in function parameters
// const add = ({a,b},c) => {
//     return a + b +c

// };
// console.log(add({a:1,b:12},100));


//Action generators - functions that return action objects
// const incrementCount = (payload = {} ) => ({  //shorthand

//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// Using function param deconstructing:

const incrementCount = ({incrementBy = 1} = {} ) => ({  //shorthand

    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy 
});

const resetCount = () => ({
    type:'RESET'

});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

//This function is called a reducer:
// 1. Reducers are pure functions (only determined by the input)
// 2. Never directly change state or action

const countReducer = (state = { count:0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':

            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

            return {
                 count: state.count - action.decrementBy
            }  
            
        case 'RESET':
             return {
                 count: 0
             }    

        case 'SET':
            return {
                count: action.count
            }      

        default:
            return state;     

    }
  
}


const store = createStore(countReducer);

//Watching for changes to state
const unsubcribe = store.subscribe(()=>{
    console.log(store.getState());
});




//Actions: an object that gets sent to the store

//increment, decrement, reset

// How do I increment  the count by one

// store.dispatch(
//     {
//     type: 'INCREMENT',
//     incrementBy:5

//     }
// );

store.dispatch(incrementCount({ incrementBy : 5}));

//unsubcribe();  // unsubscribing after increment

store.dispatch(incrementCount());




// How do I reset the  count to zero
// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());



// How do I dencrement  the count by one
store.dispatch(decrementCount());

// store.dispatch(
//     {
//     type: 'DECREMENT',
//     decrementBy: 10
//     }
// );

store.dispatch(decrementCount({decrementBy:10}));

// Set count 
// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({count:102}));








import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({description = '',note ='', amount = 0, createdAt= 0}={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt

    }
});

//REMOVE_EXPENSE
const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (textToSet='') => ({
    type:'SET_TEXT_FILTER',
    text: textToSet

});

//SORT_BY_DATE
const sortByDate = () =>({
    type: 'SORT_BY_DATE',
    //sortBy :'Date'
});

//SORT_BY_AMOUNT
const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT',
    //sortBy :'Amount'
});


//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});



//expenses reducer:

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState , action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense); 
            //Spread operator:
            return [...state, action.expense] ;
        
        // case 'REMOVE_EXPENSE':
        //     return state.filter((expense) => {
        //          return expense.id !== action.id ;
        //  });
        //or using deconstrcting expense array and using shorthand
        case 'REMOVE_EXPENSE' :
            return state.filter(({id})=> id !== action.id);  

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    
                    return {
                        ...expense,
                        ...action.updates
                    }

                }
               
            })   

        default:
            return state;

    }

};

//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){

        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text: action.text
            }  
        
        case 'SORT_BY_AMOUNT' :
            return {
                    ...state,
                    //sortBy: action.sortBy
                    sortBy :'amount'
                    }

        case 'SORT_BY_DATE' :
            return {
                     ...state,
                    //sortBy: action.sortBy
                    sortBy :'date'
                   }            
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate
            } 

        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.endDate
            }     
                   
        default:
            return state;

    }
}

//Timestamps:
//Starting point : January 1st 1970 (unix epoch)
//45647 ,10, -90 (milliseconds)

//Search by criteria and sort!!!
//Get visible expenses:
const getVisbleExpenses = (expenses, {text,sortBy,startDate,endDate}) =>{

    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; //Underfined for startDate doesnt work
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;     //Underfined for endDate doesnt work
        const textMatch = typeof text !== 'string' || ((expense.description).toLowerCase()).includes(text.toLowerCase()) ;             //Underfined for text doesnt work

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;  //decending order (high to low) , //accending -1 : 1
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1    //decending order (high to low)
        }
    });

}

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
    );


store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisbleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses);
});    


const expenseOne = store.dispatch(addExpense({description: 'Rent', note: 'This was the final payment for 40G', amount: 54500, createdAt: 2000}));

const expenseTwo = store.dispatch(addExpense({description: 'Coffee', note: 'Jitters', amount: 500, createdAt: 3000}));

// console.log(expenseOne);

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense( expenseTwo.expense.id, {amount:600}));

 //store.dispatch(setTextFilter('ren'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
 //store.dispatch(sortByDate());

 //store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


///////////////////////////////////////
const demoState = {
    expenses: [{
        id:'jkughtyts',
        description: 'Rent',
        note: 'This was the final payment for 40G',
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }

};


//Object Spread Operator:
// const user = {
//     name: 'Jen',
//     age :24
// }

// console.log({
//     ...user,
//     location: 'DBN',
//     age: 27    // Overrides initial age 
// })
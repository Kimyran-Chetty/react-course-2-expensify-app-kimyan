import expenseReducer from '../../reducers/expenses';
import filtersReducer from '../../reducers/filters';
import expensesModelArray from '../fixtures/expenses';
import moment from 'moment';


test('Should setup default array', () => {
    const state = expenseReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])

})

test('Should return object for ADD_EXPENSE case', () => {

    const expenseNew = {id:'345hj',description: 'Electricity Bill', note: 'This was the lights bill ', amount: 65500, createdAt: 2000}

    const state = expenseReducer(expensesModelArray,{type:'ADD_EXPENSE', expense:expenseNew})
    expect(state).toEqual([
        ...expensesModelArray,expenseNew
    ])
})

test('Should return an object array for REMOVE_EXPENSE with valid ID', () => {

    const action = {
        type:'REMOVE_EXPENSE', 
        id: expensesModelArray[1].id
    }

    const state = expenseReducer(expensesModelArray, action);
    expect(state).toEqual(
        [expensesModelArray[0],expensesModelArray[2] ]
    )
})

test('Should return an object array for REMOVE_EXPENSE with invalid ID', () => {

    const action = {
        type:'REMOVE_EXPENSE', 
        id: '1024'
    }

    const state = expenseReducer(expensesModelArray, action);
    expect(state).toEqual(expensesModelArray)
})

test('Should return an object array for EDIT_EXPENSE with valid ID', () => {

    const action = {
        type:'EDIT_EXPENSE', 
        id: expensesModelArray[1].id,
        updates: {description :'July Rent', amount:300000}
    }

    const state = expenseReducer(expensesModelArray, action);
    // expect(state).toEqual
    // ( [
    // expensesModelArray[0],
    // {id:'2',description:'July Rent',note:'',amount:300000, createdAt: moment(0).subtract(4,'days').valueOf()},
    // expensesModelArray[2]

    // ]);

    //or:
    expect(state[1].description).toBe('July Rent');
    expect(state[1].amount).toBe(300000);
})

test('Should return an object array for EDIT_EXPENSE with invalid ID', () => {

    const action = {
        type:'EDIT_EXPENSE', 
        id: '1024',
        updates: {description :'July Rent', amount:300000}
    }

    const state = expenseReducer(expensesModelArray, action);
    expect(state).toEqual(expensesModelArray);
})

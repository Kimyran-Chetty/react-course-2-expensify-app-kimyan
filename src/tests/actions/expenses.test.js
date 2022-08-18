import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual(
        {type:'REMOVE_EXPENSE',
        id:'123abc'}
        )
})

test ('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {description: 'Water Bill', note: 'This was the water bill ', amount: 55500})
    expect(action).toEqual(
        {type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{description: 'Water Bill', note: 'This was the water bill ', amount: 55500}
        }
    )
})

test('Should setup add expense action object with provided values', () => {
    const expenseData = {description: 'Water Bill', note: 'This was the water bill ', amount: 55500, createdAt: 2000}
    
    const action = addExpense(expenseData);
    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense:{...expenseData, id: expect.any(String)}
        }
    )
})

test('Should setup add expense action object without provided values', () => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type:'ADD_EXPENSE',
            expense:{ id: expect.any(String),description: '', note: '', amount:0, createdAt:0}
        }
    )
})
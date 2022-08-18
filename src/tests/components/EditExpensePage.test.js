import React from 'React';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach(()=> {

    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()} ;

    wrapper = shallow(<EditExpensePage 
        editExpense= {editExpense}  
        history = {history} 
        removeExpense = {removeExpense} 
        expense={expenses[2]}/>);
   
})


test('Should render EditExpensePage', () => {
       expect(wrapper).toMatchSnapshot();
})

test('Should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})

test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith(expenses[2].id)
})

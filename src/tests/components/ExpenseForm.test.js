import React from 'react'
import ExpenseForm from '../../components/ExpenseForm'
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>) // //Using Manual Mocks for moment Libraries
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]} />)  //Using Manual Mocks for moment Libraries
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm  />)  
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
    
});

test('Should set description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm  />)  
    
    wrapper.find('input').at(0).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);
    
});

test('Should set note on textarea change', () => {
    const value = 'new description note'
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('textarea').simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
})

test('Should set amount on valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('Should not set amount on invalid input', () => {
    const value = '12.122'
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
})

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrappper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy} />)

    wrappper.find('form').simulate('submit', {
        preventDefault : () => {}
    });

    expect(wrappper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt

    })




    // onSubmitSpy('Kimyran', 'DBN');
    // expect(onSubmitSpy).toHaveBeenCalledWith('Kimyran', 'DBN');
}); 

test('Should test new date on date change', () => {
    const now = moment();
    const wrapper = shallow (<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test('Should change focus on onFocusChange', () => {
    const focused = true ;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused);
});
import React from 'react'
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';


test('should render ExpenseForm with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1}  expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with two expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={23}  expensesTotal={245678345}/>);
    expect(wrapper).toMatchSnapshot();
})
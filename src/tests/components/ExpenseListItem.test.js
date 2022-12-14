import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('Should render ExpenseListItem with an expense', () => {
    const wrapper = shallow(<ExpenseListItem item = {expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})
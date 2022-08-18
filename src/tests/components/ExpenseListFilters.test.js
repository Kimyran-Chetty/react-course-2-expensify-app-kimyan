import React from 'React';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters' 
import moment from 'moment';

let setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount, wrapper

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();

    wrapper = shallow(<ExpenseListFilters 
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        setTextFilter = {setTextFilter}
        sortByDate = {sortByDate}
        sortByAmount = {sortByAmount}
        filters ={filters}
        
        />)
})

test('Should render ExpenseListFilters',() => {
    expect(wrapper).toMatchSnapshot();
})

test('Should render ExpenseListFilters with alt filters correctly',() => {
    wrapper.setProps({
        filters: {altfilters}
    })

})

test('should handle text change',  () => {
    const value = 'bil'
    wrapper.find('input').simulate('change',{
        target:{value}
    });
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should handle sort by date', () => {
    wrapper.setProps({
        filters: {altfilters}
    })

    const value = 'date';
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled();
    
})

test('should handle sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled();
    
})

test('should handle date changes', () => {
    const startDate = altfilters.startDate;
    const endDate = altfilters.endDate;

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);

    //without constants
    // wrapper.find('DateRangePicker').prop('onDatesChange')({startDate: altfilters.startDate, endDate: altfilters.endDate});
    // expect(setStartDate).toHaveBeenCalledWith(altfilters.startDate);
    // expect(setEndDate).toHaveBeenCalledWith(altfilters.endDate);


})

test('should handle focus change', () => {
    const value = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(value)
    expect(wrapper.state('calendarFocused')).toBe(value);
})


import filtersReducer from '../../reducers/filters'
import moment from 'moment';

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date', 
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set SORT_BY_AMOUNT to amount', () => {
    const state = filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'})
    // expect(state).toEqual({
    //     text: '',
    //     sortBy:'amount', 
    //     startDate: moment().startOf('month'),
    //     endDate: moment().endOf('month') 
    // })
    //or:
    expect(state.sortBy).toBe('amount');

})

test('Should set SORT_BY_DATE to amount', () => {
    const currentState ={
        text: '',
        sortBy:'amount', 
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month') 
    }

    const state = filtersReducer(currentState,{type: 'SORT_BY_DATE'})
    // expect(state).toEqual({
    //     text: '',
    //     sortBy:'date', 
    //     startDate: moment().startOf('month'),
    //     endDate: moment().endOf('month') 
    // })
    //or:
    expect(state.sortBy).toBe('date');

})

test('Should set SET_TEXT_FILTER to amount', () => {
    const state = filtersReducer(undefined,{type: 'SET_TEXT_FILTER', text:'test'})
    expect(state.text).toBe('test');

});

test('Should set SET_START_DATE to amount', () => {
    const state = filtersReducer(undefined,{type: 'SET_START_DATE', startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0));

});

test('Should set SET_END_DATE to amount', () => {
    const state = filtersReducer(undefined,{type: 'SET_END_DATE', endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0));

});
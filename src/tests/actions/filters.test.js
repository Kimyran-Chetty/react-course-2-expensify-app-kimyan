import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters'
import moment from 'moment'

test ('Should setup setTextFilter with passed in text', () => {
    const action = setTextFilter('test');
    expect(action).toEqual(
     {
        type: 'SET_TEXT_FILTER',
        text: 'test'
     }
    )
})

test ('Should setup setTextFilter without passed in text', () => {
    const action = setTextFilter();
    expect(action).toEqual(
     {
        type: 'SET_TEXT_FILTER',
        text: ''
     }
    )
})

test ('Should setup sortByDate ', () => {
    const action = sortByDate();
    expect(action).toEqual(
     {
        type: 'SORT_BY_DATE',
     }
    )
})

test ('Should setup sortByAmount ', () => {
    const action = sortByAmount();
    expect(action).toEqual(
     {
        type: 'SORT_BY_AMOUNT',
     }
    )
})

test ('Should setup setStartDate ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual(
     {
        type: 'SET_START_DATE',
        startDate: moment(0)
     }
    )
})

test ('Should setup setEndDate ', () => {
    const action = setEndDate(moment(2000));
    expect(action).toEqual(
     {
        type: 'SET_END_DATE',
        endDate: moment(2000)
     }
    )
})
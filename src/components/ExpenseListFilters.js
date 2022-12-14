import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css'  //Put this in my app.js to resolve the Jest expense dashboard test file

export class ExpenseListFilters extends React.Component{  //When changing from a stateless functional component to a class (to use state) - rermeber to access this.props to access the instance of the class

    state = {
        calendarFocused : null
        
    };

    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)  
        //console.log(e.target.value);
    }

    onSortChange = (e)=>{
        if(e.target.value==='date'){
            this.props.sortByDate();
        }
        else if(e.target.value==='amount'){
            this.props.sortByAmount();
        }
        
    }

    render() {

    return (
            <div>
                <input type = 'text' value = {this.props.filters.text} onChange = {this.onTextChange}/>

                <select value = {this.props.filters.sortBy} onChange = {this.onSortChange}>
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                </select>
        
                <DateRangePicker
                startDateId= {'startDateID'}    //Code works fine without this
                endDateId={'endDateID'}         //Code works fine without this
                startDate = {this.props.filters.startDate}
                endDate = {this.props.filters.endDate}              
                onDatesChange = {this.onDatesChange}
                focusedInput = {this.state.calendarFocused}
                onFocusChange = {this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=> false}
                />
                
            </div>
        )
 }

}


const mapStateToProps = (state) => {
    return{
        filters : state.filters
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate : () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);

//export default ExpenseListFilters;

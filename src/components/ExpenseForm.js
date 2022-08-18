import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css'

//Rudemetry way to do dates is by using the date class which is tedious and complex eg:
//const date =new Date();

//We will always use moment :
// const now  = moment();
// console.log(now.format('MMM, Do, YYYY'));


export default class ExpenseForm extends React.Component{

    constructor(props){   //We now use a constructor to get access to the props which contains the state (of expenses)
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused : false,
            error: ''
    
        }
    }

    onDescriptionChange = (e) => {

        const description = e.target.value;
        this.setState(() => ({description}))

    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {

        const amount = e.target.value;
        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {

        if(createdAt){
            this.setState(()=> ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused: focused}))
    }

    //Changed for test
    // onFocusChange = (focused) => {
    //     this.setState(() => ({calanderFocused: focused}))
    // }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            //Set error state equal to 'Please provide description .and amount.'
            this.setState(() =>({error: 'Please provide description and amount.'}))
        }
        else{
            //Clear error 
            this.setState(() =>({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) *100 ,  //Converting text amount to actual decimal
                createdAt: this.state.createdAt.valueOf(), // Method of moment to convent to millisecond timestamp
                note: this.state.note
            });

            console.log('submitted')
        }
    }
    
    render() {
        return (
            <div>

            {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit = {this.onSubmit}>
                    <input
                    type="text"
                    placeholder = "Description"
                    autoFocus                     //Doesnt work
                    value = {this.state.description}
                    onChange = {this.onDescriptionChange}
                    />

                    <input
                    type="text"
                    placeholder = "Amount"
                    value = {this.state.amount}
                    onChange = {this.onAmountChange}
                    />

                    <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}   // All days from past available // {(day) => {logic}} --- something like this could be used to valaidate if days are selectable

                    
                    />

                    <textarea
                    placeholder = "Add a note for your expense (optional)" 
                    value = {this.state.note}
                    onChange = {this.onNoteChange}
                    >
                    </textarea>

                    <button>Add Expense</button>



                </form>
            </div>
        )
    }
}
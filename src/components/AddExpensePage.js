import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component{

    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense))
        this.props.addExpense(expense);
        this.props.history.push('/');   //Method of router to redirect you to a page
    };

    render() {
       return(
                <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit = {this.onSubmit}
                />
                </div>
       ) 
    }

}


const mapDispatchToProps = (dispatch) => {
    return{
        addExpense: (expense) => dispatch(addExpense(expense))
    };
}

export default connect (undefined,mapDispatchToProps)(AddExpensePage);
//export default AddExpensePage;
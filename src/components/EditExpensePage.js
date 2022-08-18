import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense,removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        console.log('updated',expense)
    }


    onClick = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }


    render() {
        return (
                    <div>
                    
                    <ExpenseForm
                    expense = {this.props.expense}
                    onSubmit= {this.onSubmit}
                    />

                    <button onClick = {this.onClick}>
                    Remove </button>

                </div>
        )
    }
}

// const EditExpensePage = (props) => {
//     //console.log(props);
//     return (
//         <div>
            
//             <ExpenseForm
//             expense = {props.expense}
//             onSubmit= {(expense) => {
//                 props.dispatch(editExpense(props.expense.id, expense));
//                 props.history.push('/');
//                 console.log('updated',expense)
//             }}
//             />

//             <button onClick = {() => {
//                 props.dispatch(removeExpense(props.expense.id));
//                 props.history.push('/');
//             }}>
//             Remove </button>

//         </div>
//     );

// };

const mapStateToProps = (state, props) => {
    return{
        expense: state.expenses.find((expense) => {
            if(expense.id === props.match.params.id){
                return true;
            }
            else{
                return false;
            }
        })
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
        }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
//export default EditExpensePage;
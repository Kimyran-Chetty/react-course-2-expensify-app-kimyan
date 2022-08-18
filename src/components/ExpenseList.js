import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisbleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (

    <div>
        {props.expenses.length === 0 ? (

            <p>No Expenses</p>

            ) : 
            
            (
                props.expenses.map((expense) => {
                    
                //My solution
                return <ExpenseListItem 
                        key = {expense.id}
                        item ={expense}
                        />

                }

                //New Solution using spread
                // {
                // return <ExpenseListItem key= {expense.id} {...expense}
                // />
                // }

                )       

            )

        }

      
       
    </div>

);

// const ConnectedExpenseList = connect((state)=>{
//     return{
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;

//Common practise for the above code:

const mapStateToProps = (state)=>{
    return{
        //expenses: state.expenses,
        expenses: getVisbleExpenses(state.expenses,state.filters)
     
    };
}

export default connect(mapStateToProps)(ExpenseList);
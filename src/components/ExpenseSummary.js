import React from 'react';
import {connect} from 'react-redux';
import getVisbleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

// export const ExpenseSummary = (props) => {
//     return (
//             <div>
//             { props.expensesVisible.length > 0 &&
//                 <div>
//                 <h2>
//                   Viewing {props.expensesVisible.length} {props.expensesVisible.length === 1? 'expense': 'expenses'}
//                 </h2>
//                 <h2>
//                   Totalling: {numeral(props.expensesTotal/100).format('$0,0.00')}
//                 </h2>
//                 </div>
//             }
//             </div>

//     )
// }

export const ExpenseSummary = ({expensesCount,expensesTotal}) => {

  const expenseWord = expensesCount === 1? 'expense': 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');

  return (
          <div>
          { expensesCount > 0 &&
              <div>
              <h1>
                Viewing {expensesCount} {expenseWord}, totalling: {formattedExpensesTotal}
              </h1>
             
              </div>
          }
          </div>

  )
}



const mapStateToProps = (state) => {

  const expensesVisible = getVisbleExpenses(state.expenses,state.filters);

    return{
        
        expensesCount: expensesVisible.length,
        expensesTotal: getExpensesTotal(expensesVisible)
    }
    
}

export default connect (mapStateToProps)(ExpenseSummary);


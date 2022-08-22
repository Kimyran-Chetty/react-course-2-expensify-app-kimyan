
//Using reduce method with just expenseTotal
const getExpensesTotal = (expenses) => {

    return expenses.map((expense) => {
                                      return expense.amount
                                     }).reduce((sum,value) => {
                                                            return sum+value;
                                                             },0)   
}



//Using reduce method with expenseSummary object
// const getExpensesTotal = (expenses) => {

//     const expenseSummary = {
//      numberOfExpenses : expenses.length,
//      totalOfExpenses : 0
//     }
//     expenseSummary.totalOfExpenses = expenses.map((expense) => {
//         return expense.amount}).reduce((sum,value) => {
//                                     return sum+value;
//                                 },0)

//     return expenseSummary;
    
// }

//Initial solution with expenseSummary object
// const getExpensesTotal = (expenses) => {

//     const expenseSummary = {
//      numberOfExpenses : expenses.length,
//      totalOfExpenses : 0
//     }

//     expenses.map((expense) => {
//         expenseSummary.totalOfExpenses += expense.amount
//     })

//     return expenseSummary;
    
// }

export default  getExpensesTotal;
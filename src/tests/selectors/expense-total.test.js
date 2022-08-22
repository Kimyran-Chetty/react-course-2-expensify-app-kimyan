import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

//Initial tests with number of expenses
// test('Should correctly add up with no expenses', () => {
//     const summary = getExpensesTotal([]);
//     expect(summary.numberOfExpenses).toBe(0);
//     expect(summary.totalOfExpenses).toBe(0);
//     console.log(summary.totalOfExpenses);
//     console.log(summary.numberOfExpenses);
//   })

// test('Should correctly add up with one expenses', () => {
//   const summary = getExpensesTotal([expenses[0]]);
//   expect(summary.numberOfExpenses).toBe(1);
//   expect(summary.totalOfExpenses).toBe(195);
//   console.log(summary.totalOfExpenses);
//   console.log(summary.numberOfExpenses);
// })  

// test('Should correctly add up with multiple expenses', () => {
//   const summary = getExpensesTotal(expenses);
//   expect(summary.numberOfExpenses).toBe(3);
//   expect(summary.totalOfExpenses).toBe(114195);
//   console.log(summary.totalOfExpenses);
//   console.log(summary.numberOfExpenses);
// })

test('Should correctly add up with no expenses', () => {
    const totalOfExpenses = getExpensesTotal([]);
    expect(totalOfExpenses).toBe(0);
    console.log(totalOfExpenses);
  })

test('Should correctly add up with one expenses', () => {
  const totalOfExpenses = getExpensesTotal([expenses[0]]);
  expect(totalOfExpenses).toBe(195);
  console.log(totalOfExpenses);
})  

test('Should correctly add up with multiple expenses', () => {
  const totalOfExpenses = getExpensesTotal(expenses);
  expect(totalOfExpenses).toBe(114195);
  console.log(totalOfExpenses);

})
import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//TODO:
// //load a locale   
// numeral.register('locale', 'fr', {
//     delimiters: {
//         thousands: ' ',
//         decimal: ','
//     },
//     abbreviations: {
//         thousand: 'k',
//         million: 'm',
//         billion: 'b',
//         trillion: 't'
//     },
//     ordinal : function (number) {
//         return number === 1 ? 'er' : 'ème';
//     },
//     currency: {
//         symbol: 'R'
//     }
// });

// // switch between locales
// //numeral.locale('rand');

//My solution
const ExpenseListItem = (props) => {  
    return (
        <div>
            <Link to = {`/edit/${props.item.id}`}>
            <h3>{props.item.description}</h3>
            </Link>
            
            <p> 
            {numeral(props.item.amount/100).format('$0,0.00')} 
            -
            {moment(props.item.createdAt).format('MMMM Do, YYYY')}
            </p>
            
        </div>
    )
}

// solution using spread and deconstruction 
// const ExpenseListItem = ({dispatch,id,description, amount, createdAt}) => {  // Was ExpenseListItem = (props) , however we deconstructed the props object
//     return (
//         <div>
//             <h3>{description}</h3>
//             <p> Amount: {amount} CreatedAt: {createdAt}</p>
//             <button onClick = {() => {
//                  props.dispatch(removeExpense(id))
//             }}>
//             Remove </button>
//         </div>
//     )
// }

//export default connect()(ExpenseListItem);

export default ExpenseListItem;
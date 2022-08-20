import React from 'react';
import {Link} from 'react-router-dom';

//My solution
const ExpenseListItem = (props) => {  
    return (
        <div>
            <Link to = {`/edit/${props.item.id}`}>
            <h3>{props.item.description}</h3>
            </Link>
            
            <p> Amount: {props.item.amount} CreatedAt: {props.item.createdAt}</p>
            
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
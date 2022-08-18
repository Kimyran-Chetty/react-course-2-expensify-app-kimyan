//expenses reducer:

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState , action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense); 
            //Spread operator:
            return [...state, action.expense] ;
        
        // case 'REMOVE_EXPENSE':
        //     return state.filter((expense) => {
        //          return expense.id !== action.id ;
        //  });
        //or using deconstrcting expense array and using shorthand
        case 'REMOVE_EXPENSE' :
            return state.filter(({id}) => id !== action.id);  //How does ({id}) work in conjuction with action . just (id) breaks the remove functionaility

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    
                    return {
                        ...expense,
                        ...action.updates
                    }

                }
                else{
                    return expense;    //Make sure to always add an else statement for any map operations (If you don't have else, then you aren't returning anything for the other expenses that are not a match for expense.id === action.id. With map, you always need to return what you want to replace the array item with. If you return nothing undefined is returned by default which will effectively remove the item.)
                }
               
            })   

        default:
            return state;
    }
};

export default expenseReducer; 
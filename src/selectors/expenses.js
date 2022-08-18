import moment from 'moment';

const getVisbleExpenses = (expenses, {text,sortBy,startDate,endDate}) =>{

    return expenses.filter((expense)=>{
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; //Underfined for startDate doesnt work
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;     //Underfined for endDate doesnt work
        //const textMatch = typeof text !== 'string' || ((expense.description).toLowerCase()).includes(text.toLowerCase()) ;             //Underfined for text doesnt work
        
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;             

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;  //decending order (high to low) , //accending -1 : 1
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1    //decending order (high to low)
        }
    });

};

export default getVisbleExpenses;
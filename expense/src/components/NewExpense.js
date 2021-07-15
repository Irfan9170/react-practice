import React, { useState } from 'react';
import './NewExpense.css';
const NewExpense = (props) => {
	const [ enterTitle, setTitle ] = useState('');
    const [ enterAmount, setAmount ] = useState('');
    const [ enterDate, setDate] = useState('');
	const [isEditing,setEditing]= useState(false);

	const onChangeTitle = (event) => {
		setTitle(event.target.value);
		
	};
    const onChangeAmount = (event) => {
		setAmount(event.target.value);
		
	};
    const onChangeDate = (event) => {
		const enterdate = event.target.value;
		const date = new Date (enterdate);
		
		setDate(date);
		
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
        const expense = {
			id:Math.random().toString(),
            title:enterTitle,
            amount:enterAmount,
            date:enterDate
        }
        console.log(expense);
		props.onExpenseData(expense);
		setAmount('');
		setTitle('');
		setDate('');
	};
	const startEditingHandler = () => {
		setEditing(true);
	  };
	
	  const stopEditingHandler = () => {
		setEditing(false);
	  };

	return (

	
		<div className="new-expense">

        {!isEditing && (
			<button onClick={startEditingHandler}>Add New Expense</button>
		  )}
		  {isEditing && (
			<form onCancel={stopEditingHandler}  onSubmit={onSubmitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input required type="text" value={enterTitle} onChange={onChangeTitle} />
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input required type="number" value={enterAmount} onChange={onChangeAmount} min="0.01" />
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" value={enterDate} onChange={onChangeDate} min="2019-01-01" max="2022-12-31" />
					</div>
				</div>
				<div className="new-expense__actions">
					<button  type="submit">Add Expense</button>
				</div>
			</form>

      )}
			
		</div>
	);
};

export default NewExpense;

import React, { useState, useEffect } from 'react';

const BudgetPlanner = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [newExpense, setNewExpense] = useState({
    expensename: '',
    amount: '',
    category: 'accommodation',
    date: '',
    currency: 'usd'
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!newExpense.expensename || !newExpense.amount || !newExpense.date) {
      alert('Please enter valid expense details.');
      return;
    }
    setExpenses([...expenses, newExpense]);
    setNewExpense({
      expensename: '',
      amount: '',
      category: 'accommodation',
      date: '',
      currency: 'usd'
    });
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const downloadCSV = () => {
    const headers = ['Expense Name', 'Amount', 'Category', 'Date', 'Currency'];
    const rows = expenses.map(expense => [
      expense.expensename,
      expense.amount,
      expense.category,
      expense.date,
      expense.currency
    ]);

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += headers.join(',') + '\n';
    csvContent += rows.map(row => row.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'expenses.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container mx-auto py-4 md:py-8" style={{ maxWidth: '90%' }}>
      <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-center">Budget Planner</h1>

      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-2 md:p-4 rounded-lg shadow-md mb-2 md:mb-4">
        <h2 className="text-lg font-semibold mb-2">Add Expense</h2>
        <div className="mb-2">
          <label htmlFor="expense-name" className="block text-sm font-medium text-gray-700">Expense Name</label>
          <input type="text" id="expense-name" value={newExpense.expensename} onChange={(e) => setNewExpense({ ...newExpense, expensename: e.target.value })} className="mt-1 p-1 md:p-2 w-full md:w-96 border-gray-300 rounded-md bg-gradient-to-r from-gray-100 to-gray-200" />
        </div>
        <div className="mb-2">
          <label htmlFor="expense-amount" className="block text-sm font-medium text-gray-700">Amount</label>
          <input type="number" id="expense-amount" value={newExpense.amount} onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })} className="mt-1 p-1 md:p-2 w-full md:w-96 border-gray-300 rounded-md bg-gradient-to-r from-gray-100 to-gray-200" />
        </div>
        <div className="mb-2">
          <label htmlFor="expense-category" className="block text-sm font-medium text-gray-700">Category</label>
          <select id="expense-category" value={newExpense.category} onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })} className="mt-1 p-1 md:p-2 w-full md:w-96 border-gray-300 rounded-md bg-gradient-to-r from-gray-100 to-gray-200">
            <option value="accommodation">Accommodation</option>
            <option value="transportation">Transportation</option>
            <option value="food">Food</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="expense-date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="expense-date" value={newExpense.date} onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })} className="mt-1 p-1 md:p-2 w-full md:w-96 border-gray-300 rounded-md bg-gradient-to-r from-gray-100 to-gray-200" />
        </div>
        <div className="mb-2">
          <label htmlFor="currency" className="block text-sm font-medium text-gray-700">Currency</label>
          <select id="currency" value={newExpense.currency} onChange={(e) => setNewExpense({ ...newExpense, currency: e.target.value })} className="mt-1 p-1 md:p-2 w-full md:w-96 border-gray-300 rounded-md bg-gradient-to-r from-gray-100 to-gray-200">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
        </div>
        <button onClick={addExpense} className="bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:bg-blue-600">Add Expense</button>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-2 md:p-4 rounded-lg shadow-md mb-2 md:mb-4">
        <h2 className="text-lg font-semibold mb-2">Expense List</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} className="flex justify-between items-center mb-1 md:mb-2 p-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md shadow-sm">
              <div>
                <span className="text-gray-700 mr-2">{expense.expensename}</span>
                <span className="text-red-500 mr-2">${expense.amount}</span>
                <span className="text-gray-700 mr-2">{expense.category}</span>
                <span className="text-gray-700 mr-2">{expense.date}</span>
                <span className="text-gray-700 mr-2">{expense.currency}</span>
              </div>
              <button onClick={() => deleteExpense(index)} className="text-red-500 hover:text-red-600 text-xs md:text-sm">Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={downloadCSV} className="bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-md hover:bg-green-600 mt-4">Download CSV</button>
      </div>
    </div>
  );
};

export default BudgetPlanner;

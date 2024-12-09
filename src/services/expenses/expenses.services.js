/**
 * @param {number} id*
 * @param {number} userId*
 * @param {Date} spentAt*
 * @param {string} title*
 * @param {number} amount*
 * @param {string} category*
 * @param {string} note
 *
 *
 */

const { getNewExpenseData } = require('../../untils/expenses');

// const expenseData = {
//   spentAt: '2022-10-19T11:01:43.462Z',
//   title: 'Buy a new laptop',
//   amount: 999,
//   category: 'Electronics',
//   note: 'I need a new laptop',
// };

// let expenses = Array.from({ length: 6 }, (_, i) => ({
//   ...expenseData,
//   userId: i,
//   id: i,
// }));

let expenses = [];

let lastId = expenses.length;

const getExpenses = (categories, userId, from, to) => {
  let filtredExpenses = [...expenses];

  if (categories && Array.isArray(categories)) {
    filtredExpenses = filtredExpenses.filter(({ category }) => {
      return categories.includes(category);
    });
  } else if (userId) {
    filtredExpenses = filtredExpenses((expense) => expense.userId === userId);
  }

  if (from) {
    filtredExpenses = filtredExpenses.filter(
      (expense) => new Date(expense.spentAt) >= new Date(from),
    );
  }

  if (to) {
    filtredExpenses = filtredExpenses.filter(
      (expense) => new Date(expense.spentAt) <= new Date(to),
    );
  }

  return filtredExpenses;
};

const getExpenseById = (expenseId) =>
  expenses.find(({ id }) => id === expenseId) || null;

const saveExpense = (expense) => {
  lastId += 1;

  const newExpense = getNewExpenseData(expense, lastId);

  expenses.push(newExpense);

  return newExpense;
};

const removeExpense = (expenseId) => {
  expenses = getExpenses().filter(({ id }) => id !== expenseId);
};

const updateExpense = (id, expenseToUpdate) => {
  const expense = getExpenseById(id);

  Object.assign(expense, expenseToUpdate);

  return expense;
};

module.exports = {
  getExpenses,
  getExpenseById,
  saveExpense,
  removeExpense,
  updateExpense,
};

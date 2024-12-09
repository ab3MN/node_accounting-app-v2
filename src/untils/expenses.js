const isExpenseValid = (expense) => {
  const { title, amount, category, spentAt } = expense;

  return !!(title && amount && category && spentAt);
};

const getNewExpenseData = (expense, id) => {
  const { title, amount, category, userId, note } = expense;

  const newExpense = {
    id,
    title,
    amount,
    category,
    userId,
  };

  return note ? { ...newExpense, note } : newExpense;
};

module.exports = {
  isExpenseValid,
  getNewExpenseData,
};

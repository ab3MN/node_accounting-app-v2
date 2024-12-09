// const userData = {
//   name: 'Homer Simpson',
// };

// let users = Array.from({ length: 7 }, (_, id) => ({ id, ...userData }));
let users = [];

let lastId = users.length;

const getUsers = () => users;

const saveUser = (name) => {
  lastId += 1;

  const newUser = { id: lastId, name };

  users.push(newUser);

  return newUser;
};

const getUserById = (id) => getUsers().find((user) => user.id === id) || null;

const updateUser = (id, name) => {
  const user = getUserById(id);

  if (!user) {
    throw new Error('No User');
  }

  Object.assign(user, { name });

  return { id, name };
};

const removeUser = (userId) => {
  users = getUsers().filter(({ id }) => id !== userId);
};

module.exports = {
  getUsers,
  saveUser,
  getUserById,
  updateUser,
  removeUser,
};

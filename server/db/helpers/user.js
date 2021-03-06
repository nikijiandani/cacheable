module.exports = function makeUserHelpers (knex) {
  return {
    // Saves user to db
    saveUser: (newUser, cb) => {
      knex('user').insert({
        email: newUser.email,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        password: newUser.password
      }).asCallback((err) => {
        cb(err, true);
      });
    },

    // Get a user from db with email (serving as id)
    getUser: (id, cb) => {
      knex.select().from('user').where('email', id).asCallback((err, result) => {
        cb(err, result);
      });
    },

    // update name and password and return user
    updateUser: (id, first_name, last_name, password, cb) => {
      knex.select().from('user').where('email', id).update({
        first_name: first_name,
        last_name: last_name,
        password: password
      }).asCallback((err, result) => {
        cb(err, result);
      })
    }
  };
};

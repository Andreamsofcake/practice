// Update with your config settings.
  var User, Token;
  User = bookshelf.Model.extend({
    tokens: function() {
      return this.hasMany(Token);
    },
    tableName: 'users'
  });
  Token = bookshelf.Model.extend({
    user: function() {
      return this.belongsTo(User);
    },
    tableName: 'tokens'
  });

  var admit = require('admit-one')('bookshelf', {
    bookshelf: { modelClass: User }
  });
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

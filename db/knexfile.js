// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  staging: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3307,
      database: "knex",
      user: "root",
      password: "twekl2020",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

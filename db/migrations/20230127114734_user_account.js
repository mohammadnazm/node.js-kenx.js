/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/* One To One Relation Ship */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id");
      table.string("name");
    })
    .then(function () {
      knex.schema.createTable("accounts", function (table) {
        table.increments("id");
        table.string("name");
        table.integer("user_id").unsigned().unique().references("users.id");
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users").dropTable("accounts");
};

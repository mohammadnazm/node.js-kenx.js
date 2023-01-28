/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/* Many To Many Relation */
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable("posts", function (table) {
      table.increments("id").primary();
      table.string("title");
    }),
    knex.schema.createTable("categories_posts", function (table) {
      table.increments("id").primary();
      table.integer("post_id").unsigned().references("posts.id");
      table.integer("category_id").unsigned().references("categories.id");
    }),
    knex.schema.createTable("categories", function (table) {
      table.increments("id").primary();
      table.string("title");
    }),
  ]);
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable("posts"),
    knex.schema.dropTable("categories"),
    knex.schema.dropTable("categories_posts"),
  ]);
};

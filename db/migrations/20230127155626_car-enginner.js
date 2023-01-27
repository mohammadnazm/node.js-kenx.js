/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("Car", function (t) {
      t.increments("Pk_Car_Id").primary();
      t.string("Brand");
      t.string("Model");
    })
    .then(function () {
      return knex.schema.createTable("Engineer", function (t) {
        t.increments("Pk_Engineer_Id");
        t.string("FullName");
        t.string("MobileNo");
        t.integer("Fk_Car_Id", 11)
          .unsigned()
          .references("Pk_Car_Id")
          .inTable("Car");
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Car").dropTable("Engineer");
};

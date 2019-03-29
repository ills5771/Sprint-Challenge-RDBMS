exports.up = function(knex) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();

    tbl.text("description").notNullable();

    tbl.text("notes").notNullable();

    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.boolean("completed");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("actions");
};

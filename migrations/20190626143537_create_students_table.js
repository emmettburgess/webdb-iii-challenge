exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(tbl) {
      tbl.increments(); name, 128, unique, not null
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl
        .integer('cohort_id')
        .unsigned()
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };

  exports.down = function(knex, Promise) {};
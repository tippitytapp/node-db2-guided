// the .up() records the changes to be applied to the DB
exports.up = function(knex) {
  // create veggies table
  return knex.schema.createTable('veggiess', table => {
      // primary key, called id, autoincrements, not null
      table.increments();    
      table.string('name', 255).notNullable().unique();
      table.boolean('declious');
      table.timestamps(true, true); // created at and updated at
  })
};

 // the .down() records how to undo the .up() changes
exports.down = function(knex) {
  // remove the veggies table
  return knex.schema.dropTableifExists('veggiess');
};

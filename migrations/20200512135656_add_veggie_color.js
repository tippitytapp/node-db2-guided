// the .up() records the changes to be applied to the DB
exports.up = function(knex) {
    return knex.schema.table('veggiess', table=>{
        table.string('color', 128)
    })
  };
  
   // the .down() records how to undo the .up() changes
  exports.down = function(knex) {
    return knex.schema.table('veggiess', table => {
        table.dropColumn('color');
    })
  };
  
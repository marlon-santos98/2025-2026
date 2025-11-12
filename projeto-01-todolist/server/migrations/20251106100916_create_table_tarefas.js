// server/migrations/XXXX_create_table_tarefas.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // O 'up' cria a estrutura
  return knex.schema.createTable("tarefas", (table) => {
    table.increments("id").primary(); // 'id' auto-incrementável (1, 2, 3...) e chave primária
    table.string("titulo").notNullable(); // 'titulo' (texto) e não pode ser nulo
    table.boolean("concluida").defaultTo(false); // 'concluida' (true/false), padrão 'false'
    table.timestamp("criado_em").defaultTo(knex.fn.now()); // Data de criação
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // O 'down' desfaz (ex: para rollback)
  return knex.schema.dropTable("tarefas");
};

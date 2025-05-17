export async function up(db) {
  await db.exec(`
      CREATE TABLE inventory_hosts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      inventory_id INTEGER NOT NULL,
      ip_address TEXT NOT NULL,
      description TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (inventory_id) REFERENCES inventories(id) ON DELETE CASCADE
)`);
}

export async function down(db) {
  await db.exec("DROP TABLE IF EXISTS inventory_hosts");
}

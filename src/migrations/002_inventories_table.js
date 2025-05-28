export async function up(db) {
  await db.exec(`
    CREATE TABLE inventories(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        use_password INTEGER NOT NULL,
        username TEXT,
        password TEXT,
        private_key TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);
}

export async function down(db) {
  await db.exec("DROP TABLE IF EXISTS inventories");
}

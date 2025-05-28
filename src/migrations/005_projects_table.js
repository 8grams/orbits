export async function up(db) {
  await db.exec(`
    CREATE TABLE projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        user_id INTEGER NOT NULL,
        playbook_id INTEGER NOT NULL,
        inventories_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (playbook_id) REFERENCES playbooks(id) ON DELETE CASCADE,
        FOREIGN KEY (inventories_id) REFERENCES inventories(id) ON DELETE CASCADE
    )
  `);
}

export async function down(db) {
  await db.exec("DROP TABLE IF EXISTS projects");
}

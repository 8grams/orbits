export async function up(db) {
  await db.exec(`
    CREATE TABLE playbooks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        git_url TEXT,
        private_key TEXT,
        playbook TEXT,
        main_file TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);
}

export async function down(db) {
  await db.exec("DROP TABLE IF EXISTS playbooks");
}

export async function up(db) {
  await db.exec(`
    CREATE TABLE project_metadata (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      project_id INTEGER NOT NULL,
      type TEXT NOT NULL,
      key TEXT,
      value TEXT,
      ip_address TEXT,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
      FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
    )
  `);
}

export async function down(db) {
  await db.exec("DROP TABLE IF EXISTS project_metadata");
}

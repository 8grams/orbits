export async function up(db) {
  await db.exec(`
    CREATE TABLE users (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      name       TEXT,
      email      TEXT NOT NULL UNIQUE,
      avatar     TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      role       TEXT NOT NULL
    )
  `);
}

export async function down(db) {
  await db.exec("DROP TABLE IF EXISTS users");
}

import Database from "./config.js";

const initDb = {
    async init(){
        const db = await Database()

        await db.exec (`CREATE TABLE tasks (
            id INTEGER PRIMARY KEY,
            title TEXT,
            description TEXT,
            completed_at DATETIME DEFAULT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        await db.close()
    }
}

initDb.init()

//id, title, description, completed_at, created_at, updated_at
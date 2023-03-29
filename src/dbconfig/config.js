import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default  async () =>
await open({
    filename: './src/dbconfig/tasks.sqlite',
    driver: sqlite3.Database,
});
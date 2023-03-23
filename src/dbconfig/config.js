//const sqlite3 = require("sqlite3")
//const { open } = require ("sqlite");

import sqlite3 from "sqlite3";
//const db = new sqlite3.Database(':memory');
import { open } from "sqlite";

export default  async () =>
await open({
    filename: './src/dbconfig/tasks.sqlite',
    driver: sqlite3.Database,
});
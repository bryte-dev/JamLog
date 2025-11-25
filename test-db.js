import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const client = new pg.Client({
connectionString: process.env.DATABASE_URL,
});

async function test() {
try {
await client.connect();
console.log("Connexion OK !");
const res = await client.query("SELECT NOW()");
console.log(res.rows);
await client.end();
} catch (err) {
console.error("Erreur:", err);
}
}

test();

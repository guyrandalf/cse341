const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://cse341:randalf4liverpool@cse341.k8ew3da.mongodb.net/";

  const client = new MongoClient(uri);

  await client.connect();

  await listDatabases(client);

  try {
    await client.connect();

    await listDatabases(client);
  } catch (error) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

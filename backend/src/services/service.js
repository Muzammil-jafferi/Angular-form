import { fetchMongoConnectionDB } from "../db/connectionWrapper";

export async function addUserService(queryParam) {
  const client = await fetchMongoConnectionDB();
  const db = client.db("user_list");
  const collection = db.collection("user");
  
  return await collection.insertOne(queryParam);
  
}

export async function fetchUserService() {
  const client = await fetchMongoConnectionDB();
  const db = client.db("user_list");
  const collection = db.collection("user");

  return await collection.find({}).toArray();
}

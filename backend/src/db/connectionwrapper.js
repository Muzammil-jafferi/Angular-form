const MongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb://localhost:27017/";
const dbConnectionUrlParser = {
  useNewUrlParser: true
};

let mongoConnObj;
export async function fetchMongoConnectionDB() {
  if (!mongoConnObj) {
    mongoConnObj = await MongoClient.connect(
      connectionString,
      dbConnectionUrlParser
    );
  }
  return mongoConnObj;
}
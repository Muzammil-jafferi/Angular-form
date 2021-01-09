import {
  addUser,
  fetchUser
} from "./controllers/controller";

export default (app) => {
  app.post("/add", addUser);
  app.get("/fetch", fetchUser); 
};

import {
  addUserService,
  fetchUserService
} from "../services/service";

let successResponseObject = {
  _code: 200,
  _message: "Success",
};

let failureResponseObject = {
  _code: 500,
  _message: "Error Occured",
};

export async function addUser(req, res) {
  try {
    let param = req.body;
    if (
      param.first_name &&
      param.last_name &&
      param.company_name &&
      param.mobile
    ) {
      await addUserService(param);
    } else {
      throw new Error(
        "All parameters are required"
      );
    }
    res.send(successResponseObject);
  } catch (err) {
    failureResponseObject._error = err.message;
    res.send(failureResponseObject);
  }
}

export async function fetchUser(req, res) {
  try {
    let userList = await fetchUserService();
    console.log(userList)
    successResponseObject._result = userList;
    res.send(successResponseObject);
  } catch (err) {
    failureResponseObject._error = err.message;
    res.send(failureResponseObject);
  }
}
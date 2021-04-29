import mongoose from "mongoose";

import User from "./models/User";

const URI = process.env.MONGO_CONNECT;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export default (request, response) => {
  if (request.method == "POST") {
    mongoose.connect(URI, options, (error, result) => {
      const user = new User({
        username: request.body.username,
        password: request.body.password
      });

      user.save((error, result) => {
        if (!error) {
          response.status(201).json(result);
        } else {
          response.status(400).json(error);
        }
      });
    });

  }
};
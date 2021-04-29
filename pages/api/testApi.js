import mongoose from "mongoose";

import User from "./models/User";

const URI = process.env.MONGO_CONNECT;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export default (request, response) => {
  mongoose.connect(URI, options, (error, result) => {
    console.log("mongodb connected");
  })

  response.status(200).json({text: "test ran successfully!"});
};
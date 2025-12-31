const express = require("express");
const axios = require("axios");
const Redis = require("redis");
// For testing purposes, enable cors,why? If for example you make a request from a frontend running http://localhost:3000 to this backend server that is running on port 5000, we will get a CORS error
const cors = require("cors");

const app = express();

app.use(cors());
let redisClient;

//self-invoked async function that runs immediately
(async () => {
  //default port is 6379 when not provided
  redisClient = Redis.createClient();
  redisClient.on("error", err => {
    console.log("Redis client error", err);
    process.exit(1);
  });
  await redisClient.connect();
  console.log("Redis client connected successfully");
})();

app.get("/users", async (req, res) => {
  try {
    // If a key called users exists in redis,then get the data
    const users = await redisClient.get("users");
    if (users) {
      console.log("Served from Redis");
      // users is a JSON string type and we convert it to JS object and pass it to res.json so the client receives a proper JSON
      return res.json(JSON.parse(users));
    } else {
      console.log("Served from github");
      // if the server responses with json data, then axios converts the data to a Javascript object
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/iso1983/addresses/main/APIdatafiltered.json"
      );
      //save key called users in redis with the data
      //1 hour = 3600 seconds , 1 day = 24 * 3600 = 86400 seconds,redis accepts string, data is type of JS object so save it as json string using JSON.stringify
      redisClient.set("users", JSON.stringify(data), { EX: 86400 });
      return res.json(data);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => console.log("Listening"));

'use strict';

/**
 * Load Twilio configuration from .env config file - the following environment
 * constiables should be set:
 * process.env.TWILIO_ACCOUNT_SID
 * process.env.TWILIO_API_SID
 * process.env.TWILIO_API_SECRET
 */

const http = require('http');
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const express = require('express');
const mongoose = require("mongoose");

require('dotenv').load();

// some hard coded user details
const users = [
  {identity: "user1", role: "user"},
  {identity: "user2", role: "user"},
  {identity: "user3", role: "user"},
  {identity: "user4", role: "user"},
  {identity: "user5", role: "user"},
  {identity: "admin", role: "host"}
]

// Create Express webapp.
const app = express();

// Parse users input to req.body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
});

app.get('/api', function(request, response) {
  response.status(200).json({ status: "sucess", body: "App is running"})
})

/**
 * Generate an Access Token for a chat application user provided via the url
 */
app.get('/api/token', function(request, response) {

  const identity = request.query['identity'];

  if (!identity) {
    return response.status(400).send({
      body: "An identity is needed"
    })
  }

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created.
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_SID,
    process.env.TWILIO_API_SECRET
  );

  // Assign the generated identity to the token.
  token.identity = identity;

  // Grant the access token Twilio Video capabilities.
  const grant = new VideoGrant();
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response.
  response.send({
    identity: identity,
    token: token.toJwt()
  });
});

app.get('/api/getUser', function(request, response) {
    const identity = request.query.identity

    if (!identity) {
        return response.status(400).send({
            status: "error",
            body: "identity is required..."
        })
    }

    const user = users.find(user => user.identity === identity)

    if (!user) {
      return response.status(400).send({
          status: "error",
          body: "identity not found"
      })
    }

    return response.status(200).send({
      status: "success",
      data: user
    })
});

const authRoutes = require("./routes/authRoutes");
const roomRoutes = require("./routes/roomsRoutes");

app.use("/api/user", authRoutes);
app.use("/api/rooms", roomRoutes);

// handle SPA for production
if(process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static(__dirname + "/dist"))

  // handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/dist/index.html")
  })
}

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => {
    console.log("connected to db")
  }
)

// Create http server and run it.
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Express server running on *:');
});


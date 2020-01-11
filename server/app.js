const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();
// mlab
//mongoose.connect(mongoConnectionString, { useUnifiedTopology: true });
mongoose.connect(
  "mongodb+srv://ekiprop:kevanroek@cluster0-5m8nk.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("db connected");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening on port 4000");
});

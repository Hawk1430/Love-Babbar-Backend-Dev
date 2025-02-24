const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Got a GET request");
// });
// app.post("/items", (req, res) => {
//   res.send("Got a POST request");
// });
// app.put("/items/:id", (req, res) => {
//   res.send("Got a PUT request");
// });
// app.delete("/items/:id", (req, res) => {
//   res.send("Got a DELETE request");
// });
const birds = require("./routes/birds");

app.use("/birds", birds);

app.listen(port, () => {
  console.log(`Hawk app listening on port ${port}`);
});

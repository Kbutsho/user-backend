const { cyan, bold } = require("colorette");
const app = require("./app");
const database = require("./Database/database");

database();
const port =  8000;
app.listen(port, () => {
  console.log(cyan(bold("Server is running on PORT " + port + " !")));
});

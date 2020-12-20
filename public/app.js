const express = require("express");
const app = express();
 
//  Router
const productRouter = express.Router();
 
// natives inside Router
productRouter.use("/create", function(request, response){
  response.send("Add Recepie");
});
productRouter.use("/:id", function(request, response){
  response.send(`Recepie ${request.params.id}`);
});
productRouter.use("/", function(request, response){
  response.send("List of recepies");
});
// 
app.use("/products", productRouter);
 
app.use("/about", function (request, response) {
  response.send("About");
});
 
app.use("/", function (request, response) {
  response.send("Home");
});
app.listen(3000);
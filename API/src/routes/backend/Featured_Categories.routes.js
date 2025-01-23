const express = require("express")
const route = express.Router()
const CategoryController = require("../../controllers/backend/Featured_Categories.controller")

module.exports = (app) => {
  route.post("/add", CategoryController.create)
  route.post("/view", CategoryController.view)
  route.post("/delete", CategoryController.delete)
  route.post("/multiple-delete", CategoryController.multiple_delete)
  route.put("/update", CategoryController.update)
  route.post("/details/:id", CategoryController.details)
  route.put("/change-status", CategoryController.changestatus)

  app.use("/api/backend/Featured_Categories", route)
}

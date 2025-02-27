const express = require("express")
const route = express.Router()
const TapbingController = require("../../controllers/fronted/Tabing.controller");

module.exports = (app) => {
  route.post("/view", TapbingController.view)

  app.use("/api/fronted/Tapbing_Categories", route)
}

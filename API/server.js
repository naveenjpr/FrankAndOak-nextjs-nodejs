const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const server = express()
server.use(cors())

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Serve uploaded images statically

server.use("/uploads/courses", express.static("uploads/courses"))
server.use("/uploads/Tabingcategory", express.static("uploads/Tabingcategory"))

// Routes
server.get("/", (request, response) => {
  response.send("Server Working Fine.....")
})
//Backend Urls

require("./src/routes/backend/Featured_Categories.routes")(server)
require("./src/routes/backend/women.slider.routes")(server)
require("./src/routes/backend/men.slider.routes")(server)
require("./src/routes/backend/Tapbing.routes")(server)
server.get("*", (request, response) => {
  response.send("Page not found.....")
})
//Fronted Urls
require("./src/routes/fronted/Featured_Categories.routes")(server)
require("./src/routes/fronted/Tabing.routes")(server)
// require("./src/routes/fronted/user.routes")(server)

mongoose // Mongoose connection
  .connect(
    "mongodb+srv://naveensainijpr:Gionee123@cluster0.neh2bv1.mongodb.net/frankANDok?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    server.listen("5000", () => {
      console.log("Database Connected!")
    })
  })
  .catch((error) => {
    console.log("Database Not Connected!" + error)
  })

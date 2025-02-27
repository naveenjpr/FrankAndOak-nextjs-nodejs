const express = require("express")
const route = express.Router()
const TapbingController = require("../../controllers/backend/Tapbingcontroller")
const multer = require("multer")
const upload = multer({ dest: "uploads/Tabingcategory" })
const path = require("path")
// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {


    cb(null, "uploads/Tabingcategory") // फाइलों को स्टोर करने के लिए डायरेक्टरी
    console.log(file)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() // फाइल नाम में यूनीकनेस जोड़ने के लिए
    const fileExtension = path.extname(file.originalname) // फ़ाइल का एक्सटेंशन
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension) // फाइनल फाइल नाम
  },
})

// Initialize multer upload middleware

const uploadImage = multer({ storage: storage }).fields([
  { name: "frontImage", maxCount: 1 }, // Field for front image
  { name: "backImage", maxCount: 1 }, // Field for back image
])

module.exports = (app) => {
  route.post("/add", uploadImage, TapbingController.create)

  route.post("/view", upload.none(), TapbingController.view)

  route.delete("/delete/:id", upload.none(), TapbingController.delete)
  route.put("/change-status", upload.none(), TapbingController.changeStatus)
  route.put("/update", uploadImage, TapbingController.update)

  route.post("/details/:id", upload.none(), TapbingController.details)

  // route.post('/multiple-delete',upload.none(), coursesController.multipleDelete)

  app.use("/api/backend/Tapbing_Categories", route)
}

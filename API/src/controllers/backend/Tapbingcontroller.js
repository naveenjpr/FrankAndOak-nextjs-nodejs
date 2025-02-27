const Tabing_men_womenes = require("../../models/Tapbing.scheme")

// Get all products
exports.create = async (request, response) => {
  console.log("Request Body:", request.body)
  console.log("Uploaded Files:", request.files)

  try {
    const data = new Tabing_men_womenes({
      category: request.body.category,
      color: request.body.color,
      size: request.body.size,
      heading: request.body.heading,
      price: request.body.price,
      status: request.body.status ?? 1,
      frontImage: request.files?.frontImage?.[0]?.filename || "",
      backImage: request.files?.backImage?.[0]?.filename || "",
      updated_at: Date.now(),
      deleted_at: "",
    })

    const success = await data.save()
    const result = {
      status: true,
      message: "Record created successfully",
      data: success,
    }

    response.send(result)
    console.log(request.body)
    console.log(result)
  } catch (error) {
    console.error("Error saving record:", error)

    const error_messages = Object.values(error.errors || {}).map(
      (err) => err.message
    )

    response.status(500).json({
      status: false,
      message: "Something went wrong",
      error_messages: error_messages.length ? error_messages : [error.message],
    })
  }
}

exports.view = async (request, response) => {
  var condition = {
    deleted_at: null,
  }

  if (request.body.category != undefined) {
    if (request.body.category != "") {
      condition.category = new RegExp(request.body.category, "i")
    }
  }
  if (request.body.size != undefined) {
    if (request.body.size != "") {
      condition.size = new RegExp(request.body.size, "i")
    }
  }

  if (request.body.heading != undefined) {
    if (request.body.heading != "") {
      condition.heading = new RegExp(request.body.heading, "i")
    }
  }
  if (request.body.price != undefined) {
    if (request.body.price != "") {
      condition.price = request.body.price
    }
  }
  if (request.body.status != undefined) {
    if (request.body.status != "") {
      condition.status = request.body.status
    }
  }

  console.log(condition)

  try {
    // Fetch data from the database based on the condition and sort it by `created_at` in descending order
    var Featured_category = await Tabing_men_womenes.find(condition).sort({
      created_at: -1,
    })

    // Check if the fetched data array is non-empty
    if (Featured_category.length > 0) {
      let resp = {
        status: true,
        message: "Record(s) found successfully",
        imagePath: "http://localhost:5000/uploads/Tabingcategory/", // Base path for accessing images
        data: Featured_category, // Attach the fetched data
      }
      response.send(resp) // Send the response with the data
    } else {
      // Handle the case where no records are found
      let resp = {
        status: false, // Consider using `false` for consistency with an "error" or "not found" status
        message: "No records found",
      }
      response.send(resp)
    }
  } catch (error) {
    // Handle any errors that occur during the database query
    response.status(500).send({
      status: false,
      message: "An error occurred while fetching records",
      error: error.message, // Include the error message for debugging
    })
  }
}

exports.update = async (request, response) => {
  // console.log(request.file)

  data = {
    category: request.body.category,
    color: request.body.color,
    size: request.body.size,
    // frontImage: request.body.frontImage,
    // backImage: request.body.backImage,
    heading: request.body.heading,
    price: request.body.price,
    status: request.body.status ?? 1,
  }
  if (request.file != undefined) {
    if (request.file.filename != "") {
      data.frontImage = request.file.filename
      data.backImage = request.file.filename
    }
  }
  await Tabing_men_womenes.updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: data,
    }
  )
    .then((result) => {
      var res = {
        status: true,
        message: "Record update succussfully",
        data: result,
      }

      response.send(res)
    })
    .catch((error) => {
      var error_messages = []

      for (let field in error.errors) {
        // console.log(field);
        error_messages.push(error.errors[field].message)
      }

      var res = {
        status: false,
        message: "Something went wrong",
        error_messages: error_messages,
      }

      response.send(res)
    })
}
exports.details = async (request, response) => {
  var condition = {
    deleted_at: null,
  }

  await Tabing_men_womenes.findById(request.params.id)
    .then((result) => {
      if (result != "") {
        var res = {
          status: true,
          message: "Record found successfully !!",
          data: result,
        }

        response.send(res)
      } else {
        var res = {
          status: false,
          message: "No Record found !!",
          data: "",
        }

        response.send(res)
      }
    })
    .catch((error) => {
      var res = {
        status: false,
        message: "Something went wrong !!",
      }

      response.send(res)
    })
}
exports.delete = async (request, response) => {
  try {
    const { id } = request.params // Use params instead of body

    const productData = await Tabing_men_womenes.findOne({
      _id: id,
      deleted_at: null,
    })

    if (!productData) {
      return response.send({
        status: false,
        message: "Record not found",
      })
    }

    await Tabing_men_womenes.updateOne(
      { _id: id },
      { $set: { deleted_at: Date.now() } }
    )

    return response.send({
      status: true,
      message: "Record deleted successfully!!",
    })
  } catch (error) {
    return response.send({
      status: false,
      message: "Something went wrong",
      error: error.message, // Send error details for debugging
    })
  }
}

exports.changeStatus = async (request, response) => {
  const TabingData = await Tabing_men_womenes.findOne({
    _id: request.body.id,
  })

  // console.log(TabingData.length);

  if (TabingData == null) {
    var res = {
      status: false,
      message: "Id not match in the database",
    }

    response.send(res)
  }

  await Tabing_men_womenes.updateOne(
    {
      _id: request.body.id,
    },
    {
      $set: {
        status: request.body.status,
      },
    }
  )
    .then((result) => {
      var res = {
        status: true,
        message: "Record update succussfully",
        data: result,
      }

      response.send(res)
    })
    .catch((error) => {
      var res = {
        status: false,
        message: "Something went wrong",
      }

      response.send(res)
    })
}

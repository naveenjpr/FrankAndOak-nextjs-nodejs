const Tabing_men_womenes = require("../../models/Tapbing.scheme")

exports.view = async (request, response) => {
  console.log(request.body)
  var condition = {
    deleted_at: null,
    status: 1,
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

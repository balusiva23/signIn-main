const router = require("express").Router()
const userRoute = require("./users")


router.use("/user", userRoute)



module.exports = router
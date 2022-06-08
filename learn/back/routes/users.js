const { login } = require("../controller/users")
const router = require("koa-router")()

router.prefix("/users")

// 用户登陆
router.post("/login", login)

module.exports = router

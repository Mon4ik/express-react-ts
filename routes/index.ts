import { Router } from "express"
const router = Router()

router.get("/", (req, res) => {
    res.render("react", { file: "index", title: "Home" })
})

export default router

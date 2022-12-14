import createError from "http-errors"
import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import fpMiddleware from "express-fileupload"

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(fpMiddleware())

app.use("/public", express.static(path.join(__dirname, "public")))
app.use("/", express.static(path.join(__dirname, "webpack")))

// YOUR routes
import indexRouter from "./routes/index"

app.use("/", indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
// @ts-ignore
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render("error")
})

app.listen(process.env.NODE_ENV === "production" ? 80 : 3000, () =>
    console.log("Run server")
)

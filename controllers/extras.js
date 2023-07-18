const express = require("express")
const extrasRouter = express.Router()

extrasRouter.get("/_healthz", (req, res) => {
    res.json({ ok: "ok" })
})

extrasRouter.get("/_errorz", (req, res, next) => {
    // continue flag
    // handle errors
})

module.exports = extrasRouter
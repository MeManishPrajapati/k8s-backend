function checkHealth(req, res){
    res.json({ ok: "ok" })
}

function errorGenerator(req, res){
    // continue flag
    // handle errors
}

module.exports = {
    checkHealth,
    errorGenerator
}
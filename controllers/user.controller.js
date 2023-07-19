function getUserInfo(req, res){
    res.json({
        name: "Manish Prajapati",
        email: "maulikprajapati52@gmail.com"
    })
}

module.exports = {
    getUserInfo
}
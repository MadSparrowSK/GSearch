class ErrorController {
    _403(req,res) {
        res.status(403).json({
            message: "You dont have permission"
        })
    }
    _404(req, res) {
        res.status(404).json({
            message: "Not Found"
        })
    }
    _500(req,res) {
        res.status(500).json({
            message: ":("
        })
    }
}

module.exports = new ErrorController();
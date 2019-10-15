export default class Controllers {
    get(req, res, next) {
    res.status(200).json({
    msg: "This is GET method of User",
    params: req.query
    })
    }
    post(req, res, next) {
    res.status(201).json({
    msg: "This is POST method of User",
    body: req.body
    })
    }
    put(req, res, next) {
    res.status(201).json({
    msg: "This is PUT method of User",
    body: req.body
    })
    }
    delete(req, res, next) {
    res.status(200).json({
    msg: "This is DELETE method of User",
    param: req.params
    })
    }
    }
   
   
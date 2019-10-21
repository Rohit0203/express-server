import { NextFunction, Request, Response } from 'express';
export default class Controllers {
    public get(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            msg: 'This is GET method of User',
            params: req.query
        });
    }
    public post(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({
            body: req.body,
            msg: 'This is POST method of User',

        });
    }
    public put(req: Request, res: Response, next: NextFunction) {
        res.status(201).json({
            body: req.body,
            msg: 'This is PUT method of User',

        });
    }
    public delete(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            msg: 'This is DELETE method of User',
            param: req.params
        });
    }
}


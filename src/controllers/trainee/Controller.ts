import * as bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import UserSchema from '../../../src/libs/repositories/users/UserSchema';
import * as jwt from 'jsonwebtoken';
export default class Controllers {
  public login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    UserSchema.findOne({ email }).then((user: any) => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          jwt.sign(
            { _id: user._id },
            process.env.SECRET as jwt.Secret,
            { expiresIn: 900 },
            (err, token) => {
              if (err) {
                res.status(401).json({
                  msg: 'some Error occured'
                });
              }
              res.status(200).json({
                token
              });
            }
          );
        } else {
          res.status(401).json({
            msg: 'Icorrect password'
          });
        }
      } else {
        res.status(404).json({
          msg: 'User doesnt exist'
        });
      }
    });
  }
  public get(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      msg: 'This is GET method of Trainee',
      params: req.query
    });
  }
  public post(req: Request, res: Response, next: NextFunction) {
    res.status(201).json({
      body: req.body,
      msg: 'This is POST method of Trainee'
    });
  }
  public put(req: Request, res: Response, next: NextFunction) {
    res.status(201).json({
      body: req.body,
      msg: 'This is PUT method of Trainee'
    });
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({
      msg: 'This is DELETE method of Trainee',
      param: req.params
    });
  }
}

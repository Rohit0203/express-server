import { Secret, verify } from 'jsonwebtoken';
import { hasPermissions } from './../../../extraTs/utils/permissions';
import UserSchema from '../repositories/users/UserSchema';
import * as mongoose from 'mongoose';

import { NextFunction, Request, Response } from 'express';

export const authMiddleWare = (
  moduleName: string,
  permissionType: string
) => async (req: Request, res: Response, next: NextFunction) => {
  const header: any = req.headers.authorization;
  const token: any = header.split(' ')[1];
  verify(
    token,
    process.env.SECRET as Secret,
    async (err: Error, decoded: any) => {
      if (err) {
        console.log(err);
        res.status(403).json({
          msg: 'Unauthorized Access'
        });
      }
      req.body = decoded;
      const { _id } = decoded;
      await UserSchema.findOne({ _id: mongoose.Types.ObjectId(_id) })
        .then((data: any) => {
          if (data === null) {
            res.status(404).json({
              msg: 'User not found in the system'
            });
          }
          req.body.role = data.role;
        })
        .catch(err => {
          console.log(err);
        });
      if (!hasPermissions(moduleName, decoded.role, permissionType)) {
        res.status(403).json({
          msg: 'Unauthorized Access'
        });
      }
      req.body = decoded;
      next();
    }
  );
};

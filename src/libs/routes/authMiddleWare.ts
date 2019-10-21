import { Secret, verify } from 'jsonwebtoken';
import { hasPermissions } from './../../../extraTs/utils/permissions';

import { NextFunction, Request, Response } from 'express';

export const authMiddleWare = (moduleName: string, permissionType: string) => async (req: Request, res: Response, next: NextFunction) => {
    const header: any = req.headers.authorization;
    const token: any = header.split(' ')[1];
    verify(token, process.env.SECRET as Secret, (err: Error, decoded: any) => {
        if (err) {
            res.status(403).json({
                msg: 'Unauthorized Access'
            });
        }
        if (!hasPermissions(moduleName, decoded.role, permissionType)) {
            res.status(403).json({
                msg: 'Unauthorized Access'
            });
        }
        req.body = decoded;
        next();
    });
};
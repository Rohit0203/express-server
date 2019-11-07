import * as bcrypt from 'bcryptjs';
import { Request, request } from 'express';
import * as jwt from 'jsonwebtoken';
import env from '../config/configuration';
import UserSchema from '../libs/repositories/users/UserSchema';

export default async () => {
  const salt = await bcrypt.genSalt(10);
  const seedData = [
    {
      email: 'trainee@successive.tech',
      name: 'Trainee',
      password: await bcrypt.hash('successive', env.SALT),
      role: 'trainee',
      sub: 'Learn and Implement'
    },
    {
      email: 'head.trainer@successive.tech',
      name: 'Head Trainer',
      password: await bcrypt.hash('successive1', env.SALT),
      role: 'head-trainer',
      sub: 'Learn and Implement'
    },
    {
      email: 'trainer@successive.tech',
      name: 'Trainer',
      password: await bcrypt.hash('successive12', env.SALT),
      role: 'trainer',
      sub: 'Learn and Implement'
    }
  ];
  UserSchema.countDocuments('', (err: any, count: any) => {
    console.log('Seeding Data ....');
    if (count === 0) {
      UserSchema.insertMany(seedData)
        .then((users: any) => {
          console.log('data seeded');
        })
        .catch((err: Error) => {
          console.log(err);
        });
    }
    if (err) {
      console.log(err);
    }
    UserSchema.findOne()
      .then((user: any) => {
        const data = { _id: user._id as any, email: user.email as any };
        const token = jwt.sign(data, process.env.SECRET as jwt.Secret, {
          expiresIn: '1h'
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log('Already data is seeded');
  });
};

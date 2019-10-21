
import * as jwt from 'jsonwebtoken';
import UserSchema from '../libs/repositories/users/UserSchema';

const seedInitial = () => {

    const seedData = [
        {
            email: 'trainee@successive.tech',
            name: 'Trainee',
            password: 'successive',
            role: 'trainee',
            sub: 'Learn and Implement',
        },
        {
            email: 'head.trainer@successive.tech',
            name: 'Head Trainer',
            password: 'successive1',
            role: 'head-trainer',
            sub: 'Learn and Implement',
        },
    ];
    UserSchema.countDocuments('', (err: any, count: any) => {
        console.log('Seeding Data ....');
        if (count === 0) {
            UserSchema.insertMany(seedData).then((users: any) => {
                console.log('data seeded');
            }).catch((err: any) => {
                console.log(err);
            });
        }
        if (err) {
            console.log(err);
        }
        UserSchema.findOne().then((user: any) => {
            const data = { _id: user._id as any, email: user.email as any };
            const token = jwt.sign(data, process.env.SECRET as jwt.Secret, { expiresIn: '1h' });
            console.log(token);
        }).catch(err => {
            console.log(err);
        });
        console.log('Already data is seeded');
    });
};
export default seedInitial;

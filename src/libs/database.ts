import * as mongoose from 'mongoose';
import seedInitial from '../libs/seedData';

export default class Database {
    public open(url: string) {
        return mongoose.connect(url, { useNewUrlParser: true }, err => {
            if (err) {
                return err;
            }
            seedInitial();
            return true;
        });
    }
    public disconnect() {
        mongoose.connection.close();
    }
}
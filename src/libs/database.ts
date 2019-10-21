import * as mongoose from 'mongoose';
export default class Database {
    public open(url: string) {
        return mongoose.connect(url, { useNewUrlParser: true }, err => {
            if (err) {
                return err;
            }
            return true;
        });
    }
    public disconnect() {
        mongoose.connection.close();
    }
}
import * as mongoose from 'mongoose';
import seedInitial from '../libs/seedData';

export default class Database {
  public open(url: string) {
    return mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('DB Connected..');
      })
      .then(seedInitial)
      .then(() => {
        return true;
      })
      .catch(err => {
        console.log(err);
        process.exit(1);
      });
  }
  public disconnect() {
    mongoose.connection.close();
  }
}

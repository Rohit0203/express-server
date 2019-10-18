import validateEmail from './helpers';

export default class User {
  private validUsers: number = 0;
  private invalidUsers: number = 0;
  public validateUsers = (
    users: { traineeEmail: string; reviewerEmail: string }[]
  ) => {
    users.forEach(element => {
      const { traineeEmail: t, reviewerEmail: r } = element;
      if (validateEmail(t) && validateEmail(r)) {
        this.validUsers += 1;
        console.log(
          'traineeEmail:',
          t + '   ' + 'reviewerEmail:',
          r + '\t validUser:\t',
          this.validUsers
        );
      } else {
        this.invalidUsers += 1;
        console.log(
          'traineeEmail:',
          t + '   ' + 'reviewerEmail:',
          r + '\t invalidUser:\t',
          this.invalidUsers
        );
      }
    });
  };
}

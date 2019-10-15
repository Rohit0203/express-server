import validateEmail from "./helpers";

var validUsers = 0;
var invalidUsers = 0;

const validateUsers = users => {
  users.forEach(element => {
    const { traineeEmail: t, reviewerEmail: r } = element;
    if (validateEmail(t) && validateEmail(r)) {
      validUsers += 1;
      console.log(
        "traineeEmail:",
        t + "   " + "reviewerEmail:",
        r + "\t validUser:\t",
        validUsers
      );
    } else {
      invalidUsers += 1;
      console.log(
        "traineeEmail:",
        t + "   " + "reviewerEmail:",
        r + "\t invalidUser:\t",
        invalidUsers
      );
    }
  });
};
export default validateUsers;

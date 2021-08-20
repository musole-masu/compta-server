import bcrypt from "bcrypt";

export class PasswordUtil {
  hashPassword = (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, bcrypt.genSaltSync(8));
  };
  comparePassword = (plainTextPassword, hashPassword) => {
    return bcrypt.compareSync(plainTextPassword, hashPassword);
  };
}

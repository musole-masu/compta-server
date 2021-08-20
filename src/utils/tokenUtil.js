import * as jwt from "jsonwebtoken";
import "dotenv/config";
const { ACCESS_TOKEN_SECRET } = process.env;

export class TokenUtil {
  generate = (id) => {
    return jwt.sign({ id }, ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
  };

  decode = (token) => {
    try {
      return jwt.verify(token, ACCESS_TOKEN_SECRET);
    } catch (error) {
      return error;
    }
  };
}

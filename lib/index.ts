import * as uuid from "uuid";
import * as crypto from "crypto"; // http://nodejs.org/api/crypto.html

export default function guid(str?: string) {
  if (!str || str.length < 1) {
    // no parameter supplied
    return uuid.v4(); // return node-uuid v4() uuid
  }
  // create a consistent (non-random!) UUID
  const hash = crypto
    .createHash("sha256")
    .update(str.toString())
    .digest("hex")
    .substring(0, 36)
    .split("");

  hash[8] = "-";
  hash[13] = "-";
  hash[14] = "4";
  hash[18] = "-";
  hash[19] = "8";
  hash[23] = "-";

  return hash.join("");
}

module.exports = guid;

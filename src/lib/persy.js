const freeclimbSDK = require("@freeclimb/sdk");
const dotenv = require("dotenv");

dotenv.config();
const accountId = process.env.ACCOUNT_ID;
const authToken = process.env.AUTH_TOKEN;
const freeclimbClient = freeclimbSDK(accountId, authToken);

const sdkInit = () => {
  return freeclimbClient;
};

module.exports = {
  sdkInit
};

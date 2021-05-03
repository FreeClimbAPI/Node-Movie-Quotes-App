const freeclimbSDK = require("@freeclimb/sdk");
const dotenv = require("dotenv");

dotenv.config();
const accountId = process.env.ACCOUNT_ID;
const apiKey = process.env.API_KEY;
const freeclimbClient = freeclimbSDK(accountId, apiKey);

const sdkInit = () => {
  return freeclimbClient;
};

module.exports = {
  sdkInit
};

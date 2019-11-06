const FreeClimb = require("./persy");
const dotenv = require("dotenv");

dotenv.config();
const freeclimbPhoneNumber = process.env.PERSEPHONY_PHONE_NUMBER;
const freeclimbAppId = process.env.PERSEPHONY_APP_ID;

const send = (deliveryMethod, destination, msg) => {
  // Replace curly Unicode quotes with their ASCII equivalent
  msg = msg.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
  if (deliveryMethod === "text") {
    sendText(msg, destination);
  } else if (deliveryMethod === "call") {
    makeCall(msg, destination);
  } else {
    console.log("Improper delivery method: " + deliveryMethod);
    console.log("Message: " + msg);
  }
};

const sendText = (msg, destination) => {
  try {
    let freeclimbSDK = FreeClimb.sdkInit();
    freeclimbSDK.api.messages
      .create(freeclimbPhoneNumber, destination, msg)
      .then(function(response) {
        console.log(`Sent Text Message: ${msg}`);
      })
      .catch(e => console.log(e));
  } catch (err) {
    console.log(err);
  }
};

const makeCall = (msg, destination) => {
  try {
    let freeclimbSDK = FreeClimb.sdkInit();
    freeclimbSDK.api.calls
      .create(destination, freeclimbPhoneNumber, freeclimbAppId)
      .then(function(response) {
        console.log(`Initiated a call using FreeClimb`);
      })
      .catch(e => console.log(e));
    res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  send
};

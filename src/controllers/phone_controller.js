const Persy = require("../lib/persy");
const Movies = require("../lib/movies");

const phoneCall = async (req, res, next) => {
  try {
    let freeclimbSDK = Persy.sdkInit();
    let promise = Movies.retrieveQuotes;

    promise.then(() => {
      const say = freeclimbSDK.percl.say(Movies.randomQuote());

      const say2 = freeclimbSDK.percl.say(
        "Thank you for calling the Movie Quote Hotline. Good Bye"
      );
      const hangup = freeclimbSDK.percl.hangup();

      res.status(200).json(freeclimbSDK.percl.build(say, say2, hangup));
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send();
  }
};

module.exports = {
  phoneCall
};

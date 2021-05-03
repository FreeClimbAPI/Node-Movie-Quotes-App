# Movie Quote Application

This project serves as a guide to help you build an application with FreeClimb. Specifically, the project will:

- Send a movie quote to a person via text message
- Respond to a text with a movie quote
- Call a person and play a movie quote
- Receive a phone call and play a movie quote

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the Movie Quote Application locally

1. Download and install [Node.js](https://nodejs.org)
2. Install yarn globally [Mac OS](https://yarnpkg.com/lang/en/docs/install/#mac-stable) | [Windows](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

3. Clone or download this repo locally.

4. Install the node packages necessary using command:

   ```bash
   yarn install
   ```

5. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                   |
   | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                               |
   | API_KEY              | API key which can be found under [API credentials](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                     |
   | FREECLIMB_PHONE_NUMBER | FreeClimb Phone Number associated with Movie Quote Application found under [My Numbers](https://www.freeclimb.com/dashboard/portal/numbers) in Dashboard (**E.164 format**) |
   | FREECLIMB_APP_ID       | Application ID associated with FreeClimb Movie Quote Application found under [Apps](https://www.freeclimb.com/dashboard/portal/applications) in Dashboard                   |
   | HOST_URL                | URL for hosted Movie Quote Application                                                                                                                                        |

## Using the Movie Quote Application

### Responding to Incoming Calls and Texts

1. Run the application using command:

   ```bash
   $ node src/app
   Express server listening on port 80
   ```

2. Call or text your FreeClimb phone number and expect a funny movie quote in response.

### Making Outgoing Calls and Texts

1. Sending movie quote via text (where +1XXXXXXXXXX represents the E.164 formatted phone number the quote should go to):

   ```bash
   $ node src/main text +1XXXXXXXXXX
   Sent Text Message: The random quote: "I'm about to do to you what Limp Bizkit did to music in the late '90s."
   ```

2. Sending movie quote via call (where +1XXXXXXXXXX represents the E.164 formatted phone number the quote should go to):

   ```bash
   $ node src/main call +1XXXXXXXXXX
   Initiated a call using FreeClimb
   ```

## Getting Help

If you are experiencing difficulties, [contact support](https://freeclimb.com/support).

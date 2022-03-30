<p align="center"><a href="https://shorten.domains" title="shorten.domain"><img src="https://github.com/NadavsSchwartz/shorts-client/blob/main/src/assets/white_logo_transparent_background.png" alt="Shorts" width="350px"></a></p>

# Shorts

**Shorts** is a modern URL shortener with a dedicated dashboard to manage your links and view the click rate statistics.

[https://shorten.domains](https://shorten.domains)

## Table of Contents

- [Key Features](#key-features)
- [Stack](#stack)
- [Setup](#setup)
- [Contributing](#Contributing)
- [License](#license)

## Key Features

- Free forever.
- Statistics for shortened URLs.
- View, delete and manage your links.
- Admin account to view, delete and ban links.
- Bot detection.
- Malware detection.
- Google recaptcha.
- Email confirmation for contact submition

## Stack

- Node (Web server)
- Express (Web server framework)
- Passport (Google, Twitter, Github Authentication )
- React (UI library)
- Redux (State management)
- Material UI (CSS styling solution library)
- React Charts (Chart library)
- MongoDB (database)

### Back End REPO
[Shorts Back end](https://github.com/NadavsSchwartz/shorts)

## Setup

### Manual

You need to have [Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/) and the rest of the dependencies installed.

1. Clone this repository.
2. Create an `.env` file in the root folder and fill it properly ([see below](#configuration)).
3. Install dependencies: `npm install` or `yarn` if you're using yarn.
4. Run for development: `npm run start` or `yarn run start` if you're using yarn.
5. [Clone the back end repository](https://github.com/NadavsSchwartz/shorts).
6. Create an `.env` file in the back-end folder and fill it properly ([see below](#configuration)).
7. Install dependencies: `npm install` or `yarn` if you're using yarn.
8. Run for development: `npm run dev` or `yarn dev` if you're using yarn.

### Configuration

For the configuration, the following variables have to be added in your `.env`-file:

  #### Front-end
  -[REACT_APP_GOOGLE_SITE_KEY (Recaptcha V2)](https://developers.google.com/recaptcha) 
  
  #### Back-end
- MONGODB_URI(Connection string from MongoDB)
- SESSION_SECRET(Secret for sessions)
- MAIL_USER Your email user
- MAIL_PASS Your email password
- MAIL_HOST Your SMTP host
- MAIL_PORT Your SMTP port
- (OPTIONAL)WHITELISTED_DOMAINS - Array of whitelisted domains for cors
- [GOOGLE_CLIENT_ID(OAuth)](https://console.cloud.google.com/apis/credentials)
- [GOOGLE_CLIENT_SECRET(OAuth)](https://console.cloud.google.com/apis/credentials)
- [TWITTER_API_KEY(OAuth)](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api)
- [TWITTER_API_KEY_SECRET(OAuth)](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api)
- [TWITTER_BEARER_TOKEN](https://developer.twitter.com/en/docs/twitter-api/getting-started/about-twitter-api)
- [GITHUB_CLIENT_ID(OAuth)](https://github.com/settings/applications)
- [GITHUB_CLIENT_SECRET(OAuth)](https://github.com/settings/applications)
- [GOOGLE_SECRET_KEY(Recaptcha)](https://developers.google.com/recaptcha)
- [GOOGLE_SAFEBROWSING_API_KEY](https://developers.google.com/safe-browsing/v4/get-started)
- [IPINFO_TOKEN(IP location data)](https://ipinfo.io/developers)

## Contributing

Pull requests are welcome. You'll probably find lots of improvements to be made.

Open issues for feedback, requesting features, reporting bugs, or discuss ideas.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

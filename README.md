# github-dashboard

# Requirements

- [nodejs](https://nodejs.org/en/download/package-manager)
- [cube-js](https://github.com/cube-js/cube.js#getting-started)
- [github-data-mining](https://github.com/mikeshng/github-data-mining)
- [mongoDB BI connector](https://real-time-dashboard.cube.dev/cube-js-backend-with-mongo-db)

Mongodb BI allows the cubejs starts conversations with your mongodb.

# Additional Doc that may help

- [cubejs connect to database](https://cube.dev/docs/connecting-to-the-database)

# Set up

- Generate your CUBEJS_API_SECRET following the doc https://cube.dev/docs/security#generating-tokens. Replace the <CUBEJS_API_SECRET> placeholder in the .env file with your newly generated token
- Copy the .env.template to .env. Your .env file contains placeholders in DB credentials. Please replace them with your DB credentials.

# Start

```Shell
$ npm install
$ npm run dev
```

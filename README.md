# github-dashboard

# Requirements

- [nodejs](https://nodejs.org/en/download/package-manager)
- [cube-js](https://github.com/cube-js/cube.js#getting-started)
- [github-data-mining](https://github.com/mikeshng/github-data-mining) (queries Github data for presentation on this dashboard app)
- [mongoDB BI connector](https://real-time-dashboard.cube.dev/cube-js-backend-with-mongo-db)

Mongodb BI allows the cubejs starts conversations with your mongodb.

# Additional Doc that may help

- [cubejs connect to database](https://cube.dev/docs/connecting-to-the-database)

# Set up

- Ensure that [github-data-mining](https://github.com/mikeshng/github-data-mining) is setup and run, so that the database is populated with data for the dashboard
- Generate your CUBEJS_API_SECRET following the doc https://cube.dev/docs/security#generating-tokens. Replace the <CUBEJS_API_SECRET> placeholder in the .env file with your newly generated token
- Copy the .env.template to .env. Your .env file contains placeholders in DB credentials. Please replace them with your DB credentials.

Example .env file

```
CUBEJS_DB_HOST=localhost
CUBEJS_DB_USER=
CUBEJS_DB_NAME=github
CUBEJS_DB_PORT=3307
CUBEJS_DB_PASS= 
CUBEJS_WEB_SOCKETS=true
CUBEJS_DB_TYPE=mongobi
CUBEJS_API_SECRET=<cubejs-token-here>
```

- Please replace `CUBEJS_TOKEN` in dashboard-app/src/App.js with CUBEJS_API_SECRET in your .env

# Start

- Ensure that MongoDB for BI is started by launching `mongosqld` in the location where it was installed.

- To start the cube.js playground:

```Shell
$ npm install
$ npm run dev
```

The cube.js playground will be running on http://localhost:3000

- To start the dashboard

```Shell
$ cd dashboard-app
$ npm start
```

The dashboard will be running on http://localhost:4000
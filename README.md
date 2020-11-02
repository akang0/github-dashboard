# github-dashboard

# Requirements

- [nodejs](https://nodejs.org/en/download/package-manager)
- [cube-js](https://github.com/cube-js/cube.js#getting-started)
- [github-data-mining](https://github.com/mikeshng/github-data-mining)

# Set up

- Generate your CUBEJS_API_SECRET following the doc https://cube.dev/docs/security#generating-tokens. Replace the <CUBEJS_API_SECRET> placeholder in the .env file with your newly generated token
- Copy the .env.template to .env. Your .env file contains placeholders in DB credentials. Please replace them with your DB credentials.

# Start

```Shell
$ npm install
$ npm run dev
```

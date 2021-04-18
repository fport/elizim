# elizim 
<p align="center"><img src="https://user-images.githubusercontent.com/56169582/115157509-6b40a480-a092-11eb-9446-56b45f93172c.png" width="180px"/></p>



## Want to Contribute?

You have 2 things you can do:

1. Either open an issue about a bug, feature request, page, or component,
2. __Or__ close an issue, by writing and/or implementing it in your own fork!



## A Little About Design

[`Figma Design Sheet`](https://www.figma.com)
is here in case you want to take a look.
Bear in mind that it's still in development!

## A Little About API
[`API Doc`](https://documenter.getpostman.com/view/15075082/TzJsfdQ2) is here!

## Development & Deploying Guide

Firstly, install your dependencies!

```sh
npm install
```

Next up, create yourself a `.env` file!

```sh
# .env
NODE_ENV = {your NODE_ENV api url here}
PORT = {your PORT api url here}
MONGO_URI ={your MONGO_URI api url here}
```

Then you can do:

```sh
  "start": "node backend/server",
  "server": "nodemon backend/server",
  "client": "npm start --prefix frontend",
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "data:import": "node backend/seeder",
  "data:destroy": "node backend/seeder -d"
```

for a development server, or

```sh
npm run build
```

for building the project into static, deployable files.


## Linting

> Additionally, you can do `yarn run lint` to see formatting errors
> and `yarn run lint:fix` to fix them.
> Don't worry if you forgot to lint your code!
> Someone will definitely fix it in another commit for you :smiley:


## .vscode settings.json
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["js"],
  "editor.formatOnSave": true
}
```
## for disable eslint while coding
```
/* eslint-disable */
```



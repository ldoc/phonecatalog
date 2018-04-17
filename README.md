
# Phone Catalog App (Code Challange)

## Install App

Clone the repository into any folder

Go to the folder and install app dependencies: 

```
npm install
```

## Running API server (without docker)

From a terminal go to the folder and launch: 

```
npm run api
```

### Note: 

I have added repeated items of the two mobiles in the mocked json that returns the "/phones" path to see the reponsive beahavior better.

## Running Web dev server (without docker)

From a terminal go to the folder and launch:

```
npm start
```

If you are on a Windows S.O you have to change the 'start' script to get the NODE_ENV variable in other way:

```
"start": "set NODE_ENV=development && webpack-dev-server"
```

## Building the Web App (without docker)

From a terminal go to the folder and launch:

```
npm run build
```

If you are on a Windows S.O you have to change the 'build' script to get the NODE_ENV variable in other way:

```
"build": "set NODE_ENV=production && webpack -p"
```


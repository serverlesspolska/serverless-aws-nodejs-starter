# serverless-aws-nodejs-starter
A bootstrap project with a set of preconfigured libraries so you can start faster your Lambda coding.

# How to use?

## Install

```
sls install --url https://github.com/panzupa/serverless-aws-nodejs-starter --name my-project
```
```
npm i
```

## Tests

```
npm run test
```
```
sls invoke local -f sampleOne
sls invoke local -f sampleTwo
```
## Deployment

```
sls deploy -t dev
```
or 
```
sls deploy -t prod
```

# What's included

* Eslint with modified airbnb-base see `.eslintrc.yml`
* Jest test with `lambda-tester` lib


# node-logging

Logging best practices:

- Log when there is an error or the app encounters unexpected exceptions.

- Adopt logging at the early stage of app development.

- Divide logs into several log files in case you have an application with massive traffic.

- Logging should be structured and done in levels.

## Using Winston:

Winston allows you to implement multiple logging transports, i.e., a log can be recorded to a file, console, or database.

To install winston:

```js
npm i winston
```

### Example: `d_logging_express`

> http://localhost:3000/ - the server will send a hello world message. We want Winston to capture that and record it in our log file.

> http://localhost:3000/calc - we’re trying to add variable y to variable x. In this case, variable y is not defined. This will generate an error, and we want Winston to capture this instance for us.

> http://localhost:3000/hello - the server we have created has no such URL. We want Winston to inform us when a link that points to our IP address is accessed but can’t be found; that is a 404 error.

```js
info: Nov-12-2020 10:07:59: 	Server started and running on http://localhost:3000
info: Nov-12-2020 10:08:02: 	Server Sent A Hello World!
error: Nov-12-2020 10:08:05: 	500 - Internal Server Error - y is not defined - /calc - GET - ::1
error: Nov-12-2020 10:08:10: 	400 || Not Found - /hello - GET - ::1
```

### Example: `e_express_mongodb`

To install winston-mongodb

```js
npm install winston-mongodb
```

Run the server

```js
node app.js
```

Visit the pages as you did above to generate the logs.

Logs are saved to [mongodb atlas](https://www.mongodb.com/)

## Using Morgan

### Example: `f_express_morgan`

```js
// install morgan
npm i morgan
//Run the server
node app.js
```

In browser visit `http://localhost:3000/`

`access.log` file generates:

```js
::1 - - [30/Jul/2021:04:20:43 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"

```

[reference](https://www.section.io/engineering-education/logging-with-winston/)

const Koa = require('koa');
const logger = require('koa-logger')
const { koaBody } = require('koa-body');

const router = require('koa-router');

// create app instance
const app = new Koa();

// middleware functions
app.use(koaBody());

// koa logger (show the logs in console)
app.use(logger())

// Require the Router we defined in books.js
let admin = require('./router/admin.js');

// Use the Router on the sub route /books
app.use(admin.routes());

// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });


app.listen(3000)

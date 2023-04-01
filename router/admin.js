const Router = require('koa-router');

// Prefix all routes with: /books
const router = new Router({
	prefix: '/admin'
	// prefix: '/admin:id'
});

let books = [
	{ id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
	{ id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
	{ id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
	{ id: 101, name: 'Into The Wild', author: 'John Krakauer' }
];

// Routes will go here
router.get('/', (ctx, next) => {
	ctx.body = books;
	next();
});

// Routes will go here
// router.get('/', (ctx, next) => {
// 	ctx.body = books[0];
// 	next();
// });

module.exports = router;
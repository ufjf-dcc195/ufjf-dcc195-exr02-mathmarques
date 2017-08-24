var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handlers = {};
handlers['/'] = requestHandlers.hello;
handlers['/notfound'] = requestHandlers.notFound;
handlers['/oculto.html'] = requestHandlers.oculto;

server.start(router, handlers);

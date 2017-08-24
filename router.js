function route(pathname, handlers, request, response) {
    console.log('Roteado: '+ pathname);
    if(handlers[pathname]) {
        handlers[pathname](request, response);
    } else {
        console.log("Requisição inválida em " + pathname);
        handlers['/notfound'](request, response);
    }
}

exports.route = route;
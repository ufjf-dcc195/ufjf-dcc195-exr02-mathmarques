var url = require('url');

function hello(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Ola a todos!");
    response.end();
}

function notFound(request, response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("Nao encontrado!");
    response.end();
}

function oculto(request, response) {
    var parsed = url.parse(request.url, true);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<!DOCTYPE html><html><head></head><body>");
    if(parsed.query.senha === "54321")
        response.write("<h2>Acertou!</h2>");
    else
        response.write("<h2>Nao autorizado!</h2>");
    response.write("</body></html>");
    response.end();
}

exports.hello = hello;
exports.notFound = notFound;
exports.oculto = oculto;

var http = require('http');
var dia = require('./biblioteca')
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>Brasil 2 x 1 Suiça</h2> <br>');
    res.write(Date().substring(16,24)+'<br>');
    res.write('< style=color:green'+Data().substring(0,3));
    res.writable(dia.diaDaSemana()+'</p><br>')
    res.end ('Bom dia!');

}).listen(3000);
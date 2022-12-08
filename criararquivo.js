var fs = require('rs');

fs.appendFile('novoArquivo.txt', 'Texto: vai aparecer dentro do arquivo...',function (err){
    if (err) throw err;
    console.log ('arquivo craido...');
});

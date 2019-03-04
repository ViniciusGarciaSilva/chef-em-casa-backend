const app = require('../src/app'); // importa a aplicacao

const port = normalizaPort(process.env.PORT || '5000'); // define a porta do server

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

app.listen(port, function () {  // passa a porta a ser escutada e da um console log
    console.log(`app listening on port ${port}`)
})
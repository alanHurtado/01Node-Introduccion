const { argv } = require("./bases-node/config/yargs");
const { tabla: crearArchivo } = require("./bases-node/helpers/multiplicar");


console.clear();

crearArchivo(argv.b, argv.l);
